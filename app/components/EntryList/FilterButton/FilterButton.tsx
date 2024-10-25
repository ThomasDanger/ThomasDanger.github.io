'use client'

import React from 'react'

import styles from './FilterButton.module.css'


interface FilterButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.filterButton} ${isActive ? styles.active : ''}`}
            style={{
                background: isActive ? 'linear-gradient(45deg, #b0f0bb, #86CB92, #71B48D, #4cbb7a)' : '', // Change color based on active state
                color: isActive? '#0B132B': '',
                padding: '0 0.5em',
                border: isActive? '1px solid transparent' : '1px solid #86CB92',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'background 0.3s ease' // Optional smooth transition
            }}
        >
            {label}
        </button>
    );
};

export default FilterButton; // Ensure this line is present