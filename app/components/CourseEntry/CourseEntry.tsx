'use client'

import React from 'react'

import styles from './CourseEntry.module.css';
import FilterButton from '../CourseEntryList/FilterButton/FilterButton.tsx';

interface EntryProps {
  id: number;
}

const CourseEntry = ({entry, filters =[], toggleFilter}) => {

  if(!entry){
    return <div>Entry not found</div>;
  }


  let course = entry.course_name;
  let skills = entry.skills;
  let distinctions = entry.distinction;
  let semester = entry.semester;


  const sortedSkills = Array.isArray(skills)
        ? skills.sort((a, b) => {
              const aInFilter = filters.includes(a);
              const bInFilter = filters.includes(b);
              return (bInFilter ? 1 : 0) - (aInFilter ? 1 : 0);
          })
        : [];



  return (
    <div className={styles.container}>
        <div className={styles.header_container}>
            <h1 className={styles.header}>{course}</h1>
            <h1 className={styles.date}>{semester}</h1>
        </div>
        <div className={styles.skill_container}>
            <ul className={styles.skill_list}>
                {/*Array.isArray(distinctions) && distinctions.length > 0 ? (
                  distinctions.map((distinction, index) => (
                    <li key={index}>
                      <div className={styles.award_bubble}>
                        <h1 className={styles.skill_text}>{distinction}</h1>
                      </div>
                    </li>
                  ))
                  ) : (
                    <li></li> // Optional: Handle the case where there are no awards
                    )*/}

                {Array.isArray(skills) && skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <li key={index}>
                      <FilterButton 
                        label={skill}
                        isActive={filters.includes(skill)} // Check if skill is active
                        onClick={() => toggleFilter(skill)} // Toggle filter on click
                      />
                    </li>
                  ))
                  ) : (
                    <li></li> // Optional: Handle the case where there are no awards
                    )}
            </ul>
        </div>
    </div>
  )
}

export default CourseEntry