/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const crypto = require('crypto')

const { kebabCase } = require('lodash')

function groupCountBy(field, edges) {
  const groupCounts = edges.reduce((acc, { node }) => {
    const groups = node.frontmatter[field] || []
    groups.forEach((group) => {
      acc[group] = (acc[group] || 0) + 1
    })
    return acc
  }, {})

  return Object.entries(groupCounts)
}

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  function createContentListPages({ itemTotal, prefix, component, context, limit = 10 }) {
    const pageTotal = Math.ceil(itemTotal / limit)

    for (let page = 1; page <= pageTotal; page++) {
      const path = page > 1 ? `${prefix}/${page}` : `${prefix}`
      const skip = (page - 1) * limit

      createPage({
        path,
        component,
        context: {
          ...context,
          itemTotal,
          limit,
          page,
          pageTotal,
          prefix,
          skip,
        },
      })
    }
  }

  const IndexTemplate = path.resolve('src/templates/IndexTemplate.tsx')
  const TagTemplate = path.resolve('src/templates/TagTemplate.tsx')
  const SingleTemplate = path.resolve('src/templates/SingleTemplate.tsx')
  const ArticleTemplate = path.resolve('src/templates/ArticleTemplate.tsx')

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticle {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: ArticleTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })

  const { data, errors } = await graphql(`
    {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('Error fetching data', errors)
    return
  }

  const edges = data.allMdx.edges

  edges.forEach(({ node }) => {
    const { frontmatter, parent } = node
    const path = frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`
    createPage({
      path,
      component: SingleTemplate,
    })
  })

  reporter.info(`Articles (${edges.length})`)

  createContentListPages({
    itemTotal: edges.length,
    prefix: '/all',
    component: IndexTemplate,
  })

  reporter.info(`Index (${Math.ceil(edges.length / 10)})`)

  groupCountBy('tags', edges).forEach(([tag, itemTotal]) => {
    createContentListPages({
      itemTotal,
      prefix: `/tags/${kebabCase(tag)}`,
      component: TagTemplate,
      context: { tag },
    })

    reporter.info(`Tag: ${tag} (${Math.ceil(itemTotal / 10)})`)
  })

  return getArticles
}

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  if (node.internal.type === 'StrapiArticle') {
    const newNode = {
      id: createNodeId(`StrapiArticleContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.Content || ' ',
        type: 'StrapiArticleContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.Content || ' ')
          .digest('hex'),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }
}
