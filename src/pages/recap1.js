import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LectureCard from '../components/lecture-card'

import styles from '../styles/course-content-display.module.scss'

export default function FrontEndFundementals ({ data, location }) {
  return (
    <Layout
      centerContent
      pageTitle='Previous Class JS Recap'
      location={location}
      crumbLabel='Previous Class JS Recap'
    >
    <center>
        <h1>Previous Class JS Recap</h1>
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
      </center> 
    </Layout>
  )
}

// add pre-reqs to front matter
