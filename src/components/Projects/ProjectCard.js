import React from 'react';
import '../../styles/ProjectCard.css';

const ProjectCard = ({ title, description, tech, icon, githubUrl, demoUrl, date }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <i className={`fas ${icon}`}></i>
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                {date && <p className="project-date">{date}</p>}
                <p>{description}</p>
                <div className="project-tech">
                    {tech.map((item, index) => (
                        <span key={index} className="tech-tag">{item}</span>
                    ))}
                </div>
                <div className="project-links">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> Code
                        </a>
                    )}
                    {demoUrl && (
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;