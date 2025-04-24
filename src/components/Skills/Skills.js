import React from 'react';
import '../../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript", "Python", "C++", "SQL", "TypeScript"]
        },
        {
            title: "Backend Technologies",
            skills: ["Node.js", "Express", "JWT Authentication", "RESTful APIs", "GridFS", "WebSockets"]
        },
        {
            title: "Frontend Technologies",
            skills: ["React.js", "HTML/CSS", "Tailwind CSS"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "Mongoose ORM", "MySQL", "PostgreSQL"]
        },
        {
            title: "Machine Learning",
            skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Face Recognition"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "Puppeteer", "Web Scraping", "Axios"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;