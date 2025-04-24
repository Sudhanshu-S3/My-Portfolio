import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/ThemeToggle.css';

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const [animating, setAnimating] = useState(false);

    const handleToggle = () => {
        setAnimating(true);
        toggleDarkMode();
    };

    useEffect(() => {
        if (animating) {
            const timer = setTimeout(() => setAnimating(false), 500);
            return () => clearTimeout(timer);
        }
    }, [animating]);

    return (
        <button
            className={`theme-toggle ${animating ? 'animate' : ''}`}
            onClick={handleToggle}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
            {darkMode ? (
                <i className="fas fa-sun"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
        </button>
    );
};

export default ThemeToggle;