//import Image from "next/image";

import Navbar from '../components/Navbar/Navbar.js';
//import Entry from '../components/Entry/Entry.js';
//import HomePage from '../components/HomePage/HomePage.js';
import EntryList from '../components/EntryList/EntryList.tsx';
import MobileNavBar from '../components/Navbar/MobileNavBar.tsx';

//import CourseEntry from '../components/CourseEntry/CourseEntry.tsx';
//import CourseEntryListFilter from '../components/CourseEntryList/CourseEntryListFilter.tsx';

import ToggleCourseEntryList from '../components/CourseEntryList/ToggleCourseEntryList.tsx';
import Footer from '../components/Footer/Footer.js'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <MobileNavBar/>

      <h1 style={{'fontSize':'3rem', 'fontWeight':'bold', margin:'1em 17vw 0 17vw'}}>Education</h1>
      <EntryList category='education'/>


      <ToggleCourseEntryList/>

      <Footer/>
      

    </div>
  );
}
