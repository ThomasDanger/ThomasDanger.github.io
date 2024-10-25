import Image from "next/image";

import Navbar from './components/Navbar/Navbar.js';
import Entry from './components/Entry/Entry.tsx';
import EntryList from './components/EntryList/EntryList.tsx';
import EntryListFilter from './components/EntryList/EntryListFilter.tsx';
import HomePage from './components/HomePage/HomePage.js';


import Footer from './components/Footer/Footer.js'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>

      
      <h2 style={{'margin':'2rem 17vw 0 17vw', 'fontWeight':'bold', 'fontSize':'3rem'}}>Education</h2>
      <EntryList category='education' num={3}/>

      <h2 style={{'margin':'2rem 17vw 0 17vw', 'fontWeight':'bold', 'fontSize':'3rem'}}> Recent Experience</h2>
      <EntryList category='experience' num={3}/>

      <h2 style={{'margin':'2rem 17vw 0 17vw', 'fontWeight':'bold', 'fontSize':'3rem'}}>Recent Projects</h2>
      <EntryList category='projects' num={3}/>

      <h2 style={{'margin':'2rem 17vw 0 17vw', 'fontWeight':'bold', 'fontSize':'3rem'}}>Organizations</h2>
      <EntryList category='organizations' num={3}/>

      <Footer/>

    </div>
  );
}
