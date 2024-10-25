import React from 'react'

import styles from './HomeText.module.css'

const HomeText = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.name}>Thomas Conner</h1>
        <div className={styles.contact_box}>
            <ul className={styles.contact_list}>
                <h1 className={styles.contact}>thomasconnerse@gmail.com</h1>
                <h1 className={styles.contact}>+1 (210) 232-0938</h1>
            </ul>
        </div>
    </div>
  )
}

export default HomeText