import React from 'react'

import Layout from '../components/layout';
import LectureCard from '../components/lecture-card';

import styles from '../styles/course-content-display.module.scss';


export default function Mod1 ({ data, location }) {

   const lessons = [
    {
        key: 'Unit 1',
        slug: '/unit1',
        title: 'Unit 1: HTML, CSS, JS, Object Oriented Programming & DOM Manipulation',
        topics: 'Js and CS Basics'
      },
      {
        key: 'Unit 2',
        slug: '/unit2',
        title: 'Unit 2 The MERN Stack and Full Stack Development',
        topics: 'MongoDB, Express, NodeJs, React'
      },
      {
        key: 'Unit 3',
        slug: '/unit3',
        title: 'Unit 3 Portfolio, Professional Development and Learning a Second Development',
        topics: 'Portfolio, Basic Data Structures, Interviews and TripleByte'
      },
      {
        key: 'Unit 4',
        slug: '/unit4',
        title: 'Unit 4 Teamwork, SCRUM, and Capstone',
        topics: 'Teamwork, SCRUM, and Capstone'
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
          pageTitle="Look at this OMAR Its All The Lessons"
          centerContent={true}
          location={location}
          crumbLabel={"All Lessons"}>
            <h1>Look at this OMAR Its All The Lessons</h1>
            <center>
              <div>
                <a href="https://docs.google.com/spreadsheets/d/1QaqwE3QXHiRQJmYGWH3NfJee6RDvNTFjCnzcC3JXOwM/edit?pli=1#gid=874083252">
                  Course Schedule and Important Links
                </a>
              </div>
            </center>
            <main className={styles.main}>
            <LectureCard
                slug={'/cheatsheets'}
                title={'Cheatsheet'}
                topics={'Cheatsheet for all units'}
              />
            <LectureCard
                slug={'/hw'}
                title={'Homework Links'}
                topics={'Homework for all units'}
              />
              <LectureCard
                slug={'/recap1'}
                title={'Core Concept Review'}
                topics={'Core Concept Review of The Web, HTML, CSS & JS'}
              />
              <LectureCard
                slug={'/polyglot'}
                title={'Learning Different Languages'}
                topics={'Core Details of Learning New Languages'}
              />
              {lessons}
            </main>
        </Layout>
    );
}


