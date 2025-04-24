import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export const StaggerContainer = ({ children, className }) => (
    <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className }) => (
    <motion.div className={className} variants={itemVariants}>
        {children}
    </motion.div>
);