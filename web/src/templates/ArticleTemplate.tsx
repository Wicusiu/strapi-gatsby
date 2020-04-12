import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ArticlePageQuery, ArticlePageQueryVariales } from 'generated/types/gatsby'
import Img from 'gatsby-image'

import { Layout } from '../components/Layout'
import { ArchivePageContext } from '../context'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ArticleTemplateProps {
  readonly data: ArticlePageQuery
  readonly pageContext: ArchivePageContext & ArticlePageQueryVariales
}

const ArticleTemplate: React.FunctionComponent<ArticleTemplateProps> = ({ data, pageContext }) => {
  console.log(data.strapiArticle.childStrapiArticleContent.childMdx)
  return (
    <Layout>
      <Helmet title={data.strapiArticle.Title} />
      <article>
        <h2>{data.strapiArticle.Title}</h2>
        <section>
          {data.strapiArticle.Author && (
            <p>
              by{' '}
              <Link to={`/authors/User_${data.strapiArticle.Author.id}`}>
                {data.strapiArticle.Author.username}
              </Link>
            </p>
          )}
          <MDXProvider>
            <MDXRenderer>{data.strapiArticle.childStrapiArticleContent.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </article>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      Title
      Content
      Logo {
        childImageSharp {
          fixed(width: 400, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
      Author {
        id
        username
        first_name
        last_name
        avatar {
          id
          extension
          publicURL
        }
      }
    }
  }
`
