import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import LectureCard from '../components/lecture-card';

import styles from '../styles/course-content-display.module.scss';


export default function Mod1 ({ data, location }) {
   const lessons = [
    {
        key: 'Orientation',
        slug: '/orientation',
        title: 'Orientation',
        topics: 'What is the InternXL Innovation Challenge?'
      },
      {
        key: 'Session 1',
        slug: '/session1',
        title: 'Session 1',
        topics: 'From Idea to Product'
      },
      {
        key: 'Session 2',
        slug: '/session2',
        title: 'Session 2',
        topics: 'Making Your AI Outputs Reliable'
      },
      {
        key: 'Session 3',
        slug: '/session3',
        title: 'Session 3',
        topics: 'Data Sourcing, Cleaning & Evaluation?'
      },
      {
        key: 'Session 4',
        slug: '/session4',
        title: 'Session 4',
        topics: 'Rapid Prototyping and Software Development'
      },
      {
        key: 'Session 5',
        slug: '/session5',
        title: 'Session 5',
        topics: 'Introducing AI Agents in Your Workflow'
      }
   ].map((node, id) => (
     <LectureCard
       key={node.key}
       slug={node.slug}
       title={node.title}
       topics={node.topics}
     />
   ))
    return (
        <Layout
          pageTitle="InternXL Innovation Challenge Lessons"
          centerContent={true}
          location={location}
          crumbLabel={"All Lessons"}>
            <h1>InternXL Innovation Challenge Lessons</h1>
            <center>
              <div>
                 <h2><a href="/course-details" className='underline'>Course Details Here</a></h2>
              </div>
            </center>
            <main className={styles.main}>
              {lessons}
            </main>
        </Layout>
    );
}

