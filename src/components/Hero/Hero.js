import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { HeroModel } from './HeroModel';
import '../../styles/Hero.css';

const Hero = () => {
    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Staggered container for social links
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.2,
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.9,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        Hi, I'm <span className="highlight">Sudhanshu Shukla</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: 0.4 }}
                    >
                        Computer Science Student specializing in full-stack development,
                        machine learning, and AI/ML technologies.
                    </motion.p>

                    <motion.div
                        className="cta-buttons"
                        variants={ctaVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.a
                            variants={item}
                            href="https://github.com/Sudhanshu-S3"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a
                            variants={item}
                            href="https://www.linkedin.com/in/sudhanshu-shukla-01152528b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                        >
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a
                            variants={item}
                            href="mailto:sudh.anshu.shukla.k@gmail.com"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            <i className="fas fa-envelope"></i>
                        </motion.a>
                        <motion.a
                            variants={item}
                            href="tel:+918293041749"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                        >
                            <i className="fas fa-phone"></i>
                        </motion.a>
                    </motion.div>
                </div>

                <div className="hero-3d-container">
                    <Suspense fallback={<div className="loading-model">Loading 3D Model...</div>}>
                        <Canvas shadows dpr={[1, 2]}>
                            <ambientLight intensity={0.5} />
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                intensity={1}
                                castShadow
                            />
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
                            <HeroModel />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                autoRotate
                                autoRotateSpeed={0.5}
                            />
                        </Canvas>
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Hero;