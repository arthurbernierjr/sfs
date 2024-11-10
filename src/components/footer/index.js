import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './footer.module.scss'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Big Poppa Code & Progress and Fortune LLC {new Date().getFullYear()}</p>
    </footer>
  )
};
