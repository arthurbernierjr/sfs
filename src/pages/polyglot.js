import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LectureCard from '../components/lecture-card'

import styles from '../styles/course-content-display.module.scss'

export default function FrontEndFundementals ({ data, location }) {
  const { allMarkdownRemark } = data

  const lessons = allMarkdownRemark.edges.map(({ node }) =>
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
      pageTitle='Post Course'
      location={location}
      crumbLabel='Post Course'
    >
      <h1>Post Course Material on Other Languages</h1>
      <main className={styles.main}>
        {lessons}
        <br />
        <hr />
      </main>
      {/* <center>
        <h2>4 Week Recap</h2>
        <iframe
          title='Recap Week 4'
          src='https://player.cloudinary.com/embed/?public_id=4-week-recap_yhzrfu&cloud_name=seventh-ave-inc&player[posterOptions][transformation][startOffset]=1'
          width='640'
          height='360'
          style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
          allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
          allowfullscreen
          frameborder='0'
        />
      </center> */}
    </Layout>
  )
}

// add pre-reqs to front matter
export const query = graphql`
query {
    allMarkdownRemark (
          filter: {frontmatter: {track: {eq: "Polygot"},
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
