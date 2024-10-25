'use client'

import React, { useState } from 'react';

import CourseEntryListFilter from './CourseEntryListFilter.tsx';

import styles from './ToggleCourseEntryList.module.css';

// Main component that includes the toggle button
const ToggleComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <div className={styles.bubble}>
                <button 
                className = {styles.button} 
                onClick={toggleVisibility}>
                    {isVisible ? 'Hide Relevant Coursework' : 'Show Relevant Coursework'}
                </button>
            </div>

            {isVisible && <CourseEntryListFilter />} {/* Conditionally render the HiddenComponent */}
        </div>
    );
};

export default ToggleComponent;
