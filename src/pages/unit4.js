import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LectureCard from '../components/lecture-card'

import styles from '../styles/course-content-display.module.scss'

export default function FrontEndFundementals ({ data, location }) {
  const { allMarkdownRemark } = data

  const lessons = allMarkdownRemark.edges.filter((item) => item.node.frontmatter.type === 'homepage').map(({ node }) =>
    <LectureCard
      key={node.id}
      slug={node.fields.slug}
      title={node.frontmatter.title}
      topics={node.frontmatter.topics}
    />
  )

  return (
    <Layout
      centerContent
      pageTitle='Unit 4'
      location={location}
      crumbLabel='Unit 4'
    >
      <h1>Unit 4</h1>
      <main className={styles.main}>
        {lessons}
        <br />
        <hr />
      </main>
    </Layout>
  )
}

// add pre-reqs to front matter
export const query = graphql`
query {
    allMarkdownRemark (
          filter: {frontmatter: {track: {eq: "Unit 4"},
          type: {eq: "homepage"}}}
            sort: {fields:  [frontmatter___week, frontmatter___day]}
        ){
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            track
            title
            week
            day
            type
            topics
          }
        }
      }
    }
  }
`
