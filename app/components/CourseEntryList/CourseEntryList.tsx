'use client'

import React from 'react'

import Entry from '../CourseEntry/CourseEntry.tsx';

interface EntryListProps {
    num?: number;
    filter: string[];
}

const CourseEntryList: React.FC<EntryListProps> = ({ num, filter = [], handleFilterClick }) => {
    const [entries, setEntries] = React.useState<any>([]);
  
    React.useEffect(() => {
      const fetchEntries = async () => {
        const response = await fetch('/data/entries.json'); // Adjust the path to your JSON file
        const data = await response.json();

        if (data.categories && Array.isArray(data.categories.courses)) {

            let filteredEntries = data.categories.courses;

            if(filter.length > 0){
                filteredEntries = filteredEntries.filter((entry: any) => 
                    entry.skills && filter.every(skill => entry.skills.includes(skill)) // Check if skills exist and include the required skill
                );
            }


            const sortedEntries = filteredEntries.sort((a: any, b: any) => {
              return new Date(b.date_start).getTime() - new Date(a.date_start).getTime(); // Sort in descending order
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
                entries.slice(0, num).map((entry) => ( 
                <Entry key={entry.id} 
                entry={entry}
                filters={filter}
                toggleFilter={handleFilterClick} />
                ))
            ) : (
                <p></p>
            )}
        </div>
      );
  };

export default CourseEntryList