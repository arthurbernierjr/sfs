import React from 'react'
import { Link } from 'gatsby'

import styles from './lecture-card.module.scss'

export default function LectureCard (props) {
  return (
    <Link to={props.slug}>
      <section className={styles.card}>
        <h2>{props.title}</h2>
        <h4>{props.topics}</h4>
        <p>{props.prereqs ? `Pre-Reqs: ${props.prereqs}` : ''}</p>
      </section>
    </Link>
  )
}
