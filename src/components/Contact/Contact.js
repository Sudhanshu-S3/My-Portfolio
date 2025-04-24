import React, { useState } from 'react';
import '../../styles/Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mzzrbjvk', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
                console.error(result);
            }
        } catch (error) {
            setStatus('error');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Get In Touch</h2>
                <p>I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p><i className="fas fa-envelope"></i> sudh.anshu.shukla.k@gmail.com</p>
                        <p><i className="fas fa-phone"></i> +91 8293041749</p>
                        <p><i className="fas fa-map-marker-alt"></i> Bhopal, India</p>

                        <div className="social-links">
                            <a href="https://github.com/Sudhanshu-S3" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sudhanshu-shukla-01152528b/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' &&
                                <p className="form-message success">Thank you for your message! I'll get back to you soon.</p>
                            }
                            {status === 'error' &&
                                <p className="form-message error">Oops! There was an error sending your message. Please try again.</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;