//import Image from "next/image";

import Navbar from '../components/Navbar/Navbar.js';
//import Entry from '../components/Entry/Entry.js';
//import HomePage from '../components/HomePage/HomePage.js';
//import EntryList from '../components/EntryList/EntryList.tsx';

import EntryListFilter from '../components/EntryList/EntryListFilter.tsx';

import styles from './Experience.module.css';

import Footer from '../components/Footer/Footer.js'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className={styles.header}>Experience</h1>
      <EntryListFilter category='experience'/>

      <Footer/>



    </div>
  );
}
