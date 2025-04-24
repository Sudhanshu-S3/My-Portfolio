import React from 'react';
import '../../styles/TimelineItem.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ title, organization, period, description, position }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <motion.div
            ref={ref}
            className={`timeline-item ${position}`}
            initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: position === 'left' ? -50 : 50 }}
            transition={{ duration: 0.7 }}
        >
            <div className="timeline-content">
                <h3>{title}</h3>
                <h4>{organization}</h4>
                <span className="date">{period}</span>
                {Array.isArray(description) ? (
                    <ul className="timeline-description">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </motion.div>
    );
};

export default TimelineItem;