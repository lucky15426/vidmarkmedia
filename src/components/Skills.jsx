import React from 'react';
import { motion } from 'framer-motion';
import {
    Monitor, Video, Globe, Brain, Instagram, Lightbulb,
    PenTool, TrendingUp, Users, Palette, Layers, Cpu,
    Clapperboard, MousePointer2, Sparkles
} from 'lucide-react';

const tools = [
    { name: 'Canva Pro', icon: <Palette size={22} />, color: '#38c7f2', bg: 'rgba(56,199,242,0.12)' },
    { name: 'Photoshop', icon: <Layers size={22} />, color: '#ffbc00', bg: 'rgba(255,188,0,0.12)' },
    { name: 'Premiere Pro', icon: <Clapperboard size={22} />, color: '#ef4f9a', bg: 'rgba(239,79,154,0.12)' },
    { name: 'After Effects', icon: <Sparkles size={22} />, color: '#38c7f2', bg: 'rgba(56,199,242,0.12)' },
    { name: 'CapCut', icon: <Video size={22} />, color: '#ef4f9a', bg: 'rgba(239,79,154,0.12)' },
    { name: 'Figma', icon: <MousePointer2 size={22} />, color: '#ffbc00', bg: 'rgba(255,188,0,0.12)' },
    { name: 'AI Tools', icon: <Cpu size={22} />, color: '#38c7f2', bg: 'rgba(56,199,242,0.12)' },
    { name: 'Meta Ads', icon: <TrendingUp size={22} />, color: '#ffbc00', bg: 'rgba(255,188,0,0.12)' },
    { name: 'Instagram', icon: <Instagram size={22} />, color: '#ef4f9a', bg: 'rgba(239,79,154,0.12)' },
    { name: 'LinkedIn', icon: <Users size={22} />, color: '#38c7f2', bg: 'rgba(56,199,242,0.12)' },
];

const creativeSkills = [
    { name: 'Content Ideation', icon: <Lightbulb size={14} /> },
    { name: 'Visual Storytelling', icon: <PenTool size={14} /> },
    { name: 'Engagement Strategy', icon: <TrendingUp size={14} /> },
    { name: 'Design Thinking', icon: <Brain size={14} /> },
    { name: 'Brand Identity Systems', icon: <Layers size={14} /> },
    { name: 'AI-Assisted Workflows', icon: <Cpu size={14} /> },
    { name: 'Community Engagement', icon: <Users size={14} /> },
    { name: 'Detail-Oriented Production', icon: <Palette size={14} /> },
];

const technicalSkills = [
    { name: 'Graphic Design', icon: <Palette size={14} /> },
    { name: 'Video Editing', icon: <Video size={14} /> },
    { name: 'Social Media Management', icon: <Instagram size={14} /> },
    { name: 'Reel Strategy & Hooks', icon: <TrendingUp size={14} /> },
    { name: 'UI/UX Fundamentals', icon: <Monitor size={14} /> },
    { name: 'Content Writing & Copy', icon: <PenTool size={14} /> },
    { name: 'Photo Editing', icon: <Palette size={14} /> },
    { name: 'Digital Marketing', icon: <Globe size={14} /> },
];

const Skills = () => {
    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <motion.div
                    className="section-heading-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <div className="section-label">Toolkit</div>
                        <h2 className="section-title">
                            Tools & <span className="gradient-text">Creative Skills</span>
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        A practical stack for design, video, strategy, and fast campaign execution.
                    </p>
                </motion.div>

                <div className="tech-grid">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            className="tech-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.035, duration: 0.35 }}
                            whileHover={{ y: -6, borderColor: `${tool.color}70` }}
                        >
                            <div className="tech-icon" style={{ background: tool.bg, color: tool.color }}>
                                {tool.icon}
                            </div>
                            <span className="tech-name">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="skills-categories">
                    {[
                        ['Technical Skills', technicalSkills],
                        ['Creative Direction', creativeSkills],
                    ].map(([title, skills], index) => (
                        <motion.div
                            key={title}
                            className="skill-panel"
                            initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                        >
                            <h3 className="skill-category-title">{title}</h3>
                            <div className="skill-tags">
                                {skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        className="skill-tag"
                                        whileHover={{ scale: 1.04, y: -2 }}
                                    >
                                        <span className="skill-tag-icon">{skill.icon}</span>
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
