'use client'

import React from 'react'

//import styles from './EntryList.module.css';
import Entry from '../Entry/Entry.tsx';

interface EntryType{
    id: number;
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

interface EntryListProps {
    category: string; // Accept category as a prop
    num?: number;
    filter?: string[];
    handleFilterClick?: (filter: string) => void; // Add this line
}

const EntryList: React.FC<EntryListProps> = ({ category, num, filter = [], handleFilterClick = () => {} }) => {
    const [entries, setEntries] = React.useState<EntryType[]>([]);
  
    React.useEffect(() => {
      const fetchEntries = async () => {
        const response = await fetch('/data/entries.json'); // Adjust the path to your JSON file
        const data = await response.json();

        if (data.categories && Array.isArray(data.categories[category])) {

            let filteredEntries = data.categories[category];

            if(filter.length > 0){
                filteredEntries = filteredEntries.filter((entry) => 
                    entry.skills && filter.every(skill => entry.skills.includes(skill)) // Check if skills exist and include the required skill
                );
            }


            const sortedEntries = filteredEntries.sort((a, b) => {
              return new Date(b.date_end).getTime() - new Date(a.date_end).getTime(); // Sort in descending order
            });

        setEntries(sortedEntries); // Assuming your JSON structure has a `categories` object

        }
        else {
        setEntries([]);
        }
    };
      fetchEntries();
    }, [filter]);
  
    return (
        <div>
            {entries.slice(0, num).length > 0 ? (
                entries.slice(0, num).map((entry: EntryType) => ( 
                <Entry key={entry.id} 
                entry={entry} 
                filters={filter}
                toggleFilter={handleFilterClick}/>
                ))
            ) : (
                <p></p>
            )}
        </div>
      );
  };

export default EntryList