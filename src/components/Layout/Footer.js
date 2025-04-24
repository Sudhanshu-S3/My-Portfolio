import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <p>&copy; {currentYear} Sudhanshu Shukla. All rights reserved.</p>
                <p>Designed and built with ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;