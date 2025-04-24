import React from 'react';
import TimelineItem from './TimelineItem';
import '../../styles/Experience.css';

const Experience = () => {
    const experienceData = [
        {
            title: "Machine Learning Developer",
            organization: "Amazon ML Challenge",
            period: "2024",
            description: [
                "Developed and implemented a machine learning model for image text detection and data extraction using OpenCV and TensorFlow, achieving an accuracy of over 60%.",
                "Integrated the EasyOCR model and performed data augmentation to enhance transaction processing capabilities, collaborating with a multidisciplinary team."
            ],
            position: "left"
        },
        {
            title: "Backend Developer",
            organization: "Smart India National Hackathon",
            period: "2023",
            description: [
                "Developed and implemented robust backend solutions using JWT for secure authentication and CRUD operations for data management.",
                "Designed and documented RESTful APIs following industry best practices with comprehensive error handling strategies."
            ],
            position: "right"
        }
    ];

    const educationData = [
        {
            title: "B.Tech in Computer Science (AI/ML)",
            organization: "Rajiv Gandhi Technological University",
            period: "Jun 2022 - May 2026",
            description: "CGPA: 7.8",
            position: "left"
        },
        {
            title: "Class 12th",
            organization: "Kendriya Vidyalaya",
            period: "2021",
            description: "",
            position: "right"
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2>Experience</h2>
                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>

                <h2 className="education-title">Education</h2>
                <div className="timeline">
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;