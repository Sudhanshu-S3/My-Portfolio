import React from 'react';
import '../../styles/Blog.css';

const Blog = () => {
    const achievements = [
        {
            title: "Machine Learning Specialization",
            description: "Completed Machine Learning Specialization course by Andrew Ng.",
            date: "2023"
        },
        {
            title: "ICPC 2024",
            description: "Achieved a top 1130 rank in the ICPC 2024, demonstrating advanced problem-solving and coding capability.",
            date: "2024"
        },
        {
            title: "META Hacker Cup",
            description: "Secured the 5445 rank out of 25,000 participants in the 2024 META Hacker Cup.",
            date: "2024"
        },
        {
            title: "Competitive Programming",
            description: "Solved 500+ Data Structure and Algorithm questions across platforms like LeetCode, Codeforces, and others.",
            date: "Ongoing"
        }
    ];

    return (
        <section id="achievements" className="blog-section">
            <div className="container">
                <h2>Achievements</h2>
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card">
                            <h3>{achievement.title}</h3>
                            <p className="achievement-date">{achievement.date}</p>
                            <p>{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;