import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            date: '2026 – Present',
            role: 'Brand Marketing Intern',
            company: 'Obleka',
            tasks: [
                'Curated meta ads content, Instagram reels, regular story sets, product posts and meme-style content to promote collections.',
                'Produced reels reaching 8K-57K+ views and designed a meme post with 65 shares, the highest on the page.'
            ]
        },
        {
            date: '2025 – 2026',
            role: 'Design Head',
            company: 'TEDx Miranda House',
            tasks: [
                'Creating high-engagement Instagram reels and social media visuals for TEDx events.',
                'Coordinating with marketing teams to maintain a professional and cohesive brand identity.',
                'Assisting in audience outreach and managing digital promotion for event days.'
            ]
        },
        {
            date: '2025 – 2026',
            role: 'Head of Creative Department',
            company: 'Women in Business Club',
            tasks: [
                'Overseeing cross-departmental design initiatives and team leadership.',
                'Crafting key visuals for major club campaigns and networking events.',
                'Ensuring consistent brand representation across all digital touchpoints.'
            ]
        },
        {
            date: '2025',
            role: 'Graphics Head',
            company: 'Vriksham Foundation',
            tasks: [
                'Leading visual content creation and professional video editing for social media campaigns.',
                'Designing high-impact posters, event creatives, and dynamic Instagram story templates.',
                'Developing creative content strategies that leverage both static design and video.'
            ]
        },
        {
            date: '2024 – 2025',
            role: 'Teaching Intern',
            company: 'Umeed Charitable Trust',
            tasks: [
                'Facilitated curriculum delivery for primary and middle school students.',
                'Designed engaging lesson plans and tracked student performance metrics.',
                'Engineered community engagement and successful fundraising initiatives.'
            ]
        },
        {
            date: '2025',
            role: 'Creative Team Member | Placement Cell',
            company: 'Miranda House',
            tasks: [
                'Designed social media creatives and LinkedIn posts for placement-related initiatives.',
                'Contributed to the design of Guidepost and Profectus (annual magazine and report).',
                'Assisted in creating event posters and merchandise aligned with the cell’s visual identity.'
            ]
        },
        {
            date: '2024 – 2025',
            role: 'Editorial & Social Media Team Member',
            company: 'Unnat Bharat Abhiyan (UBA) Cell',
            tasks: [
                'Managed official Instagram strategy and content production (Posts/Stories).',
                'Contributed professional copywriting for the UBA Coffee Table Book.',
                'Liaised with outreach teams for grassroots community projects.'
            ]
        }
    ];

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional Experience
                </motion.h2>
                <p className="section-subtitle">Roles I’ve excelled in</p>

                <div className="timeline" style={timelineStyle}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={itemStyle}
                        >
                            <div className="timeline-dot" style={dotStyle}></div>
                            <div className="timeline-card" style={cardStyle}>
                                <span className="timeline-date" style={dateStyle}>{exp.date}</span>
                                <h3 style={roleStyle}>{exp.role}</h3>
                                <h4 style={companyStyle}>{exp.company}</h4>
                                <ul style={listStyle}>
                                    {exp.tasks.map((task, i) => (
                                        <li key={i} style={listItemStyle}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const timelineStyle = { position: 'relative', maxWidth: '740px', margin: '0 auto', paddingLeft: '40px' };
const itemStyle = { position: 'relative', marginBottom: '40px' };
const dotStyle = {
    position: 'absolute', left: '-33px', top: '28px', width: '12px', height: '12px',
    borderRadius: '50%', background: '#c48b9f', border: '3px solid #fefbfc',
    boxShadow: '0 0 0 3px #e8c4d4'
};
const cardStyle = { background: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #f0e4ea' };
const dateStyle = {
    display: 'inline-block', fontSize: '0.78rem', fontWeight: 600, color: '#c48b9f',
    background: '#fdf5f8', padding: '4px 14px', borderRadius: '50px', marginBottom: '12px'
};
const roleStyle = { fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px' };
const companyStyle = { fontSize: '0.9rem', color: '#7a6b72', fontWeight: 500, marginBottom: '16px' };
const listStyle = { listStyle: 'none' };
const listItemStyle = {
    fontSize: '0.88rem', color: '#7a6b72', padding: '4px 0', paddingLeft: '20px', position: 'relative'
};

export default Experience;
