import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../shared/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../shared/StaggeredAnimation';
import '../../styles/About.css';

const About = () => {
    return (
        <AnimatedSection id="about" className="about-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <div className="about-content">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/flower.jpg`} alt="Sudhanshu Shukla" />
                    </motion.div>
                    <div className="about-text">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning
                            at Rajiv Gandhi Technological University in Bhopal, India.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            As a passionate developer, I enjoy building innovative web applications, implementing machine
                            learning models, and solving complex algorithmic problems. My experience spans across
                            full-stack development with the MERN stack, computer vision applications, and data processing
                            systems.
                        </motion.p>

                        <StaggerContainer className="about-details">
                            <StaggerItem className="detail">
                                <span className="detail-title">Name:</span>
                                <span className="detail-value">Sudhanshu Shukla</span>
                            </StaggerItem>
                            <StaggerItem className="detail">
                                <span className="detail-title">Email:</span>
                                <span className="detail-value">sudh.anshu.shukla.k@gmail.com</span>
                            </StaggerItem>
                            <StaggerItem className="detail">
                                <span className="detail-title">Phone:</span>
                                <span className="detail-value">+91 8293041749</span>
                            </StaggerItem>
                            <StaggerItem className="detail">
                                <span className="detail-title">Location:</span>
                                <span className="detail-value">Bhopal, India</span>
                            </StaggerItem>
                        </StaggerContainer>

                        <motion.div
                            className="about-buttons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <a href={`${process.env.PUBLIC_URL}/resume.pdf`} className="btn" target="_blank" rel="noopener noreferrer">
                                Download Resume <i className="fas fa-download"></i>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;