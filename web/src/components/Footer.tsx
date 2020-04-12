import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = {
  container: css`
    background: #ff5700;
    margin-top: 1.45rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  `,
  wrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `,
  title: css`
    margin: 0;
    display: inline-block;
  `,
}

const TitleLink = styled(Link)`
  color: #fff;

  &:active,
  &:hover {
    color: #fff;
  }
`

interface FooterProps {
  readonly author: string
}

export default function Footer({ author }: FooterProps) {
  return (
    <footer css={style.container}>
      <div css={style.wrapper}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="http://strapi.io">Strapi</a>
        by <TitleLink to="/">{author}</TitleLink>
      </div>
    </footer>
  )
}
