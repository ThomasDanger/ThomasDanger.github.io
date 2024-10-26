import Navbar from './components/Navbar/Navbar.js';
import EntryList from './components/EntryList/EntryList';
import HomePage from './components/HomePage/HomePage.js';

import MobileNavBar from './components/NavBar/MobileNavBar';

import styles from './page.module.css';


import Footer from './components/Footer/Footer.js'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <MobileNavBar/>
      <HomePage/>

      
      <h2 className={styles.header}>Education</h2>
      <EntryList category='education' num={3}/>

      <h2 className={styles.header}> Recent Experience</h2>
      <EntryList category='experience' num={3}/>

      <h2 className={styles.header}>Recent Projects</h2>
      <EntryList category='projects' num={3}/>

      <h2 className={styles.header}>Organizations</h2>
      <EntryList category='organizations' num={3}/>

      <Footer/>

    </div>
  );
}
