import React from 'react'

import HomePicture from './HomePicture/HomePicture.js';
import HomeText from './HomeText/HomeText.js';
import LinkDock from './LinkDock/LinkDock.js';


import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className = {styles.container}>
        <div className = {styles.name_picture}>
            <ul className={styles.name_picture_list}>
                <li className={styles.name_picture_list_element}><HomeText/></li>
                <li className={styles.name_picture_list_element}><HomePicture/></li>
            </ul>
            
        </div>

        <LinkDock/>
        
        <div className={styles.text_container}>
            <p className={styles.text_body}>

                Hello, I am a software engineering student at The University of Texas at Dallas anticipating to graduate in May 2025.
                I have a professional background in Python development and an educational background in embedded systems and artificial intelligence. Outside of
                coding, I enjoy reading and doing community service with friends.

            </p>
        </div>


    </div>
  )
}

export default HomePage