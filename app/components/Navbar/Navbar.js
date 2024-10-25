import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.home_container}>
            <a className={styles.nav_link_home} href='./' alt='home'>
                <img className={styles.home_img} src='./connerse_logo.png'></img>
                <h1 className={styles.home_text} styles={{'margin': '0 1rem 0 0'}}>Conner<span styles className={styles.home_span}>SE</span></h1>
            </a>
            
        </div>

        <div className={styles.nav_link_container}>
            <ul className={styles.nav_link_list}>

                <a className={styles.nav_link} href='./About'>
                    <li className={styles.nav_link_list_element}>
                        <h1>About</h1>
                    </li>
                </a>

                <a className={styles.nav_link} href='./Experience'>
                    <li className={styles.nav_link_list_element}>
                        <h1>Experience</h1>
                    </li>
                </a>

                <a className={styles.nav_link} href='./Projects'>
                    <li className={styles.nav_link_list_element}>
                        <h1>Projects</h1>
                    </li>
                </a>

                <a className={styles.nav_link} href='./Organizations'>
                    <li className={styles.nav_link_list_element}>
                        <h1>Organizations</h1>
                    </li>
                </a>
                

            </ul>
        </div>

    </div>
  )
}

export default Navbar