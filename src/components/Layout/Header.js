import React, { useState, useEffect, useContext } from 'react';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkMode } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark-header' : ''}`}>
            <div className="container">
                <div className="logo">Sudhanshu Shukla</div>
                <div className="header-right">
                    <nav className={isMenuOpen ? 'active' : ''}>
                        <button className="close-button" onClick={toggleMenu}>
                            <i className="fas fa-times"></i>
                        </button>
                        <ul>
                            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                            <li><a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
                            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                    <div className="theme-toggle-wrapper">
                        <ThemeToggle />
                    </div>
                    <button className="menu-button" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;