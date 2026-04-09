import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Users, BookOpen } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Wand2 size={24} />,
            title: 'Creative Focus',
            text: 'Passionate about graphic design, posters, and cohesive digital branding.'
        },
        {
            icon: <Users size={24} />,
            title: 'Community Lead',
            text: 'Experienced in managing outreach and community engagement projects.'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Educational Background',
            text: 'Bringing pedagogical insights into storytelling and communication.'
        }
    ];

    return (
        <section className="section about" id="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>
                <p className="section-subtitle">Student & Creative Professional</p>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I am a Bachelor of Elementary Education student at <strong>Miranda House, University of Delhi</strong>, balancing my academic pursuits with a deep-seated passion for creative design and video editing.
                        </p>
                        <p>
                            My journey is defined by a blend of educational insight and creative execution. I specialize in <strong>Content Creation</strong>, <strong>Video Editing</strong>, and <strong>Visual Storytelling</strong>. From leading creative departments to engaging in community-driven initiatives, I strive to create meaningful digital impacts.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">5</span>
                                <span className="stat-label">Leadership Roles</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100</span><span className="stat-plus">s</span>
                                <span className="stat-label">Creatives Designed</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-highlights"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {highlights.map((item, index) => (
                            <div key={index} className="highlight-card">
                                <div style={{ color: '#c48b9f' }}>{item.icon}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
