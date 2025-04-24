import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Update localStorage and body class when theme changes
    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};