import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../../styles/Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            title: "Rubik's Cube Solver",
            description: "Engineered a web application that solves Rubik's cube from user-uploaded images with a custom image processing pipeline, featuring ML-based color detection across different lighting conditions and an interactive 3D cube model.",
            tech: ["MERN Stack", "Image Processing", "JWT Auth", "RESTful API"],
            icon: "fa-cube",
            githubUrl: "#",
            demoUrl: "#",
            date: "March 2025",
            category: "web"
        },
        {
            title: "Job Aggregator",
            description: "Built a full-stack job aggregation platform with parallel web scraping from LinkedIn, Wellfound, and Unstop using Puppeteer, implementing intelligent caching and browser pooling techniques with multiple filtering options and data export capabilities.",
            tech: ["MERN Stack", "Puppeteer", "Web Scraping", "Browser Automation"],
            icon: "fa-briefcase",
            githubUrl: "#",
            demoUrl: "#",
            date: "January 2025",
            category: "web"
        },
        {
            title: "VisualRoll - Facial Recognition Attendance",
            description: "Built an attendance tracking solution using facial recognition with secure face data storage using MongoDB's GridFS, implementing a Python microservice for real-time face detection with secure data compression and encryption for privacy compliance.",
            tech: ["Node.js", "Express", "MongoDB", "GridFS", "Python", "TensorFlow", "OpenCV"],
            icon: "fa-id-badge",
            githubUrl: "#",
            demoUrl: "#",
            date: "May 2024 - June 2024",
            category: "ml"
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2>Featured Projects</h2>

                <div className="project-filter">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={filter === 'web' ? 'active' : ''}
                        onClick={() => setFilter('web')}
                    >
                        Web Apps
                    </button>
                    <button
                        className={filter === 'ml' ? 'active' : ''}
                        onClick={() => setFilter('ml')}
                    >
                        ML Projects
                    </button>
                </div>

                <div className="project-grid">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="view-more">
                    <a href="https://github.com/Sudhanshu-S3" className="btn" target="_blank" rel="noopener noreferrer">
                        View More Projects <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;