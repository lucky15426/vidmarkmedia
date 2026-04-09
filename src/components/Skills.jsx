import React from 'react';
import { motion } from 'framer-motion';
import {
    Palette,
    Instagram,
    Linkedin,
    Facebook,
    Video,
    Globe,
    Monitor,
    Lightbulb,
    PenTool,
    TrendingUp,
    Brain,
    Users
} from 'lucide-react';

const Skills = () => {
    const technicalSkills = [
        { name: 'Canva Pro', icon: <Monitor size={16} /> },
        { name: 'Inshot', icon: <Video size={16} /> },
        { name: 'VN Editor', icon: <Video size={16} /> },
        { name: 'Capcut', icon: <Video size={16} /> },
        { name: 'Google Workspace', icon: <Globe size={16} /> },
        { name: 'Microsoft Office', icon: <Monitor size={16} /> },
        { name: 'Instagram Management', icon: <Instagram size={16} /> },
        { name: 'AI Software Adaptability', icon: <Brain size={16} /> }
    ];

    const creativeSkills = [
        { name: 'Content Ideation', icon: <Lightbulb size={16} /> },
        { name: 'Visual Storytelling', icon: <PenTool size={16} /> },
        { name: 'Engagement Strategy', icon: <TrendingUp size={16} /> },
        { name: 'Design Thinking', icon: <Brain size={16} /> },
        { name: 'Creative Collaboration', icon: <Users size={16} /> },
        { name: 'Detail-oriented approach', icon: <Palette size={16} /> }
    ];

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & Expertise
                </motion.h2>

                <div className="skills-split-grid" style={splitGridStyle}>
                    <motion.div
                        className="skill-category"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={categoryHeaderStyle}>Technical Skills</h3>
                        <div className="skill-tags" style={tagsStyle}>
                            {technicalSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="tag"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    style={tagStyle}
                                >
                                    <span style={iconStyle}>{skill.icon}</span> {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skill-category"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={categoryHeaderStyle}>Creative Skills</h3>
                        <div className="skill-tags" style={tagsStyle}>
                            {creativeSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="tag"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    style={tagStyle}
                                >
                                    <span style={iconStyle}>{skill.icon}</span> {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const splitGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' };
const categoryHeaderStyle = {
    fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px',
    paddingLeft: '12px', borderLeft: '4px solid #c48b9f'
};
const tagsStyle = { display: 'flex', flexWrap: 'wrap', gap: '12px' };
const tagStyle = {
    background: '#fff', padding: '10px 18px', borderRadius: '50px',
    border: '1px solid #f0e4ea', fontSize: '0.88rem', fontWeight: 500,
    color: '#7a6b72', display: 'flex', alignItems: 'center', gap: '10px'
};
const iconStyle = { color: '#c48b9f' };

export default Skills;
