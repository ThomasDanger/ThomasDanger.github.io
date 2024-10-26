import React from 'react'

import styles from './Entry.module.css';

import FilterButton from '../CourseEntryList/FilterButton/FilterButton.tsx';

//import entries from '/public/data/entries.json';


interface Entry{
    heading: string;
    subheading?: string;
    body?: string;
    date_start: string;
    date_end: string;
    location?: string;
    thumbnail_src?: string;
    awards?: string[];
    skills?: string[];
    link?: string;
}
interface EntryProps {
    entry: Entry;
    filters?: string[];
    toggleFilter: (skill: string) => void;
}

function formatDate(dateString: string) {
    const [year, month, day] = dateString.split('-').map(Number);
    
    // Create a date object in UTC
    const date = new Date(Date.UTC(year, month - 1, day, 6)); // Adjust for Central Time (UTC-6)

    // Format the date to "Month Day, Year"
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long'
    }).format(date);
}

const Entry: React.FC<EntryProps> = ({entry, filters=[], toggleFilter}) => {


    if(!entry){
        return <div>Entry not found</div>;
    }
    



    const heading = entry.heading;
    const subheading = entry.subheading;
    const body = entry.body;
    const date_start = formatDate(entry.date_start);
    const date_end = formatDate(entry.date_end);
    const location = entry.location;
    const thumbnail_src = (entry.thumbnail_src)? entry.thumbnail_src : '/photos/PhotoWithFriends.jpg';
    const awards = entry.awards;
    const skills = entry.skills;
    //const link = ['./'];

    /*
    const sortedSkills = Array.isArray(skills)
    ? skills.sort((a, b) => {
          const aInFilter = filters.includes(a);
          const bInFilter = filters.includes(b);
          return (bInFilter ? 1 : 0) - (aInFilter ? 1 : 0);
      })
    : [];

    */

  return (



    <div className={styles.container}>

        <div className={styles.date_location_container}>
            <h1 className={styles.date_text}>{date_start} - {date_end}</h1>
            <h1 className = {styles.location_text}>{location}</h1>
        </div>


        <div className={styles.content_container}>
        
            <div className={styles.thumbnail_container}>
                <img src={thumbnail_src}></img>
            </div>

            <div className={styles.text_skill_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.heading}>{heading}</h1>
                    <h1 className={styles.subheading}>{subheading}</h1>
                    <p className={styles.body}>{body}</p>
                </div>

                <div className={styles.skill_container}>
                    {
                        (
                            <ul className={styles.skill_list}>
                                {Array.isArray(awards) && awards.length > 0 ? (
                                  awards.map((award, index) => (
                                    <li key={index} className={styles.skill_list_element}>
                                      <div className={styles.award_bubble}>
                                        <h1 className={styles.skill_text}>{award}</h1>
                                      </div>
                                    </li>
                                  ))
                                ) : (
                                  <li></li> // Optional: Handle the case where there are no awards
                                )}
                            </ul>
                        )
                    }
                </div>

                <div className={styles.skill_container}>
                    {
                        (
                            <ul className={styles.skill_list}>
                                {Array.isArray(skills) && skills.length > 0 ? (
                                skills.map((skill, index) => (
                                    <li key={index} className={styles.skill_list_element}>
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
                        )
                    }
                </div>

            </div>

        </div>
    </div>
  )
}

export default Entry