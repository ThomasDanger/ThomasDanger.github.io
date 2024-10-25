import React from 'react'

import styles from './LinkDock.module.css'

const LinkDock = () => {
  return (
    <div className = {styles.container}>
        <ul className={styles.link_list}>
            <li className = {styles.link_list_element}>
                <a className = {styles.address} href='https://github.com/ThomasDanger'><img className={styles.image}src='/BrandStandards/github-mark-white.svg'></img></a>
            </li>
            <li className = {styles.link_list_element}>
            <a className = {styles.address} href='https://www.linkedin.com/in/thomasconnerse/'><img className={styles.image} src='/BrandStandards/In-White-96@2x.png'></img></a>
            </li>
        </ul>
    </div>
  )
}

export default LinkDock