import Image from "next/image";

import Navbar from '../components/Navbar/Navbar.js';
import Entry from '../components/Entry/Entry.js';
import HomePage from '../components/HomePage/HomePage.js';
import EntryList from '../components/EntryList/EntryList.tsx';

import Footer from '../components/Footer/Footer.js'

export default function Home() {
  return (
    <div>
      <Navbar/>

      <h1 style={{'fontSize':'3rem', 'fontWeight':'bold',margin:'1em  17vw 0 17vw'}}>Organizations</h1>
      <EntryList category='organizations'/>

      <Footer/>
    </div>
  );
}
