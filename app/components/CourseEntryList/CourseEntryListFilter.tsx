'use client'

import React, { useState, useEffect } from 'react';
import CourseEntryList from './CourseEntryList.tsx'; // Adjust the import path as necessary
import FilterButton from './FilterButton/FilterButton.tsx';

import styles from './EntryListFilter.module.css';

interface EntryListFilterProps {
    category: string;
}



const EntryListFilter: React.FC<EntryListFilterProps> = () => {

    const [filters, setFilters] = useState<string[]>([]);
    const [filterOptions, setFilterOptions] = useState<string[]>([]);

    const [entries, setEntries] = useState<any[]>([]); // State to hold the entries


    useEffect(() => {
        const fetchSkillsData = async () => {
            try {
                const response = await fetch('/data/entries.json');
                const data = await response.json();

                // Access the 'experience' category
                const entries = data.categories?.courses;
                
                if (!Array.isArray(entries)) {
                    console.error("Data format error: 'experience' is not an array");
                    return;
                }

                const skillCounts: Record<string, number> = {};

                // Count occurrences of each skill
                entries.forEach((entry) => {
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
                <ul style={{display:'flex', margin:'1em 17vw', flexWrap:'wrap', gap:'0.5em'}}>
                {filterOptions.map((filter) => (
                    <li style={{margin:'0'}}>
                    <FilterButton
                        label={filter}
                        isActive={filters.includes(filter)}
                        onClick={() => handleFilterClick(filter)}
                    />
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <CourseEntryList filter={filters} handleFilterClick={handleFilterClick}/>
            </div>
        </div>
    );
};

export default EntryListFilter;
