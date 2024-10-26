'use client'

import React, { useState } from 'react';

import styles from './MobileNavBar.module.css'


const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleNav} className={styles.toggleNav}>
        <div className={styles.toggle_nav_div}>
          <img className={styles.home_img} src='./connerse_logo.png'></img>
          <h1 className={styles.home_text}>Conner<span className={styles.home_span}>SE</span></h1>
        </div>
        

      </button>
      {isOpen && (
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_link}>
              <a href="./">Home</a>
            </li>
            <li className={styles.nav_link}>
              <a href="./About">About</a>
            </li>
            <li className={styles.nav_link}>
              <a href="./Experience">Experience</a>
            </li>
            <li className={styles.nav_link}>
              <a href="./Projects">Projects</a>
            </li>
            <li className={styles.nav_link}>
              <a href="./Organizations">Organizations</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNavBar;