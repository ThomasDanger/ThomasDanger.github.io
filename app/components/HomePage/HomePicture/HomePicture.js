import React from 'react'

import styles from './HomePicture.module.css';

const HomePicture = () => {
  return (
    <div className={styles.frame}>
        <img className={styles.image} src='photos/Headshot.jpg'></img>
    </div>
  )
}

export default HomePicture