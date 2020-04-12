import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import { Layout } from '../components/Layout'

import { UpCarousel } from '@up-group-ui/react-controls'

export const IndexPage = ({ data }: { data: any }) => (
  <>
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      style={{
        margin: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UpCarousel
        items={data.allStrapiArticle.edges.map((document: any) => ({
          title: document.node.Title,
          key: document.node.id,
          description: document.node.Introduction,
          color: '#EEE',
          logo: document.node.image && document.node.image.childImageSharp.fixed,
          action: (item: any) => navigate(item.key),
        }))}
        renderItem={(isOpen, item) => (
          <>
            <h4>
              <Link to={`/${item.key}`}>{item.title}</Link>
            </h4>
            {isOpen && item.logo && (
              <>
                <Img fixed={item.logo as FixedObject} />
                <p>{item.description}</p>
              </>
            )}
          </>
        )}
      />
    </div>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
  </>
)

const LayoutIndexPage = (props: any) => (
  <Layout>
    <IndexPage {...props} />
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          Title
          Content
          Logo {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default LayoutIndexPage
