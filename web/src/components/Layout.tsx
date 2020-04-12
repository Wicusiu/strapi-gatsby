import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import { Header } from './Header'
import Footer from './Footer'

const wrapper = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <main>
      <Helmet
        titleTemplate={`%s - ${data.site?.siteMetadata?.title}`}
        defaultTitle={data.site?.siteMetadata?.title}
        meta={[
          {
            name: 'description',
            content: data.site?.siteMetadata?.description,
          },
          {
            name: 'keywords',
            content: 'gatsby, gatsbyjs, sample, demo, typescript',
          },
        ]}
      />
      <Header title={data.site?.siteMetadata?.title || ''} />
      <div css={wrapper}>{children}</div>
      <Footer author={'Skik'} />
    </main>
  )
}
