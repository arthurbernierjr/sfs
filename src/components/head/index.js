import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

export default function Head ({ pageTitle }) {
  const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                }
            }
        }
    `)

  const { title, description, keywords } = site.siteMetadata

  return (
    <Helmet
      title={`${pageTitle} | ${title}`}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords }
      ]}
    />
  )
}
