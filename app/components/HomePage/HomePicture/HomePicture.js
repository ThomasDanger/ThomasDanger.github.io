import React from 'react'

import Image from 'next/image'

import styles from './HomePicture.module.css';

const HomePicture = () => {
  return (
    <div className={styles.frame}>
        <Image className={styles.image} width={400} height={400} alt="headshot" src='/photos/Headshot.jpg'/>
    </div>
  )
}

export default HomePicture