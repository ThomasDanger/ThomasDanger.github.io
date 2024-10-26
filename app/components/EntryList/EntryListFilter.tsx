'use client'

import React, { useState, useEffect } from 'react';
import EntryList from './EntryList'; // Adjust the import path as necessary
import FilterButton from './FilterButton/FilterButton.tsx';

//import styles from './EntryListFilter.module.css';

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
interface EntryListFilterProps {
    category: string;
    num?: number;
}



const EntryListFilter: React.FC<EntryListFilterProps> = ({ category, num }) => {
    const [filters, setFilters] = useState<string[]>([]);
    const [filterOptions, setFilterOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchSkillsData = async () => {
            try {
                const response = await fetch('/data/entries.json');
                const data = await response.json();

                // Access the 'experience' category
                const entries = data.categories?.[category];
                
                if (!Array.isArray(entries)) {
                    console.error("Data format error: 'experience' is not an array");
                    return;
                }

                const skillCounts: Record<string, number> = {};

                // Count occurrences of each skill
                entries.forEach((entry:Entry) => {
                    if (Array.isArray(entry.skills)) {
                        entry.skills.forEach((skill) => {
                            skillCounts[skill] = (skillCounts[skill] || 0) + 1;
                        });
                    }
                });

                // Sort skills by count, from most to least prevalent
                const sortedSkills = Object.keys(skillCounts)
                    .sort((a, b) => skillCounts[b] - skillCounts[a])
                    .slice(0,8);

                setFilterOptions(sortedSkills);
            } catch (error) {
                console.error("Failed to fetch or process data:", error);
            }
        };

        fetchSkillsData();
    }, []);

    // Function to handle filter button clicks
    const handleFilterClick = (filter: string) => {
        setFilters((prevFilters) => {
            const newFilters = prevFilters.includes(filter)
                ? prevFilters.filter((f) => f !== filter) // Remove the filter
                : [...prevFilters, filter]; // Add the filter
            
            console.log("Updated Filters: ", newFilters); // Log updated filters
            return newFilters;
        });
    };

    return (
        <div>
            <div>
                <ul style={{display:'flex', margin:'0 17vw', flexWrap:'wrap', gap:'0.5em'}}>
                {filterOptions.map((filter, index) => (
                    <li key={index} style={{margin:'0'}}>
                    <FilterButton
                        key={filter}
                        label={filter}
                        isActive={filters.includes(filter)}
                        onClick={() => handleFilterClick(filter)}
                    />
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <EntryList num={num} category={category} filter={filters} handleFilterClick={handleFilterClick}/>
            </div>
        </div>
    );
};

export default EntryListFilter;
