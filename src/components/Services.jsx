import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Video, Palette, Cpu, Film, Brush, Megaphone } from 'lucide-react';

const services = [
    {
        lucide: <Palette size={28} />,
        title: 'Graphic Design',
        desc: 'Campaign creatives, social posts, ads, carousels, and print-ready artwork that gives a brand a sharper presence.',
        tags: ['Social Posts', 'Carousels', 'Ads', 'Print'],
        color: '#38c7f2',
        bg: 'rgba(56,199,242,0.12)',
    },
    {
        lucide: <Video size={28} />,
        title: 'Video Editing',
        desc: 'Short-form edits, showreels, launch videos, and branded cuts with tight pacing, captions, and clean transitions.',
        tags: ['Reels', 'Showreels', 'Captions', 'Pacing'],
        color: '#ffbc00',
        bg: 'rgba(255,188,0,0.12)',
    },
    {
        lucide: <Megaphone size={28} />,
        title: 'Social Media Management',
        desc: 'Content calendars, campaign planning, creative direction, and posting systems that keep brands consistent.',
        tags: ['Instagram', 'Strategy', 'Content Calendar', 'Growth'],
        color: '#ef4f9a',
        bg: 'rgba(239,79,154,0.12)',
    },
    {
        lucide: <Layout size={28} />,
        title: 'UI/UX Design',
        desc: 'Clean web and app interfaces, landing page layouts, wireframes, and user journeys built for clarity.',
        tags: ['Figma', 'Wireframes', 'Landing Pages', 'UX'],
        color: '#38c7f2',
        bg: 'rgba(56,199,242,0.12)',
    },
    {
        lucide: <Brush size={28} />,
        title: 'Branding & Identity',
        desc: 'Logo refinement, color systems, typography, layout rules, and reusable visual assets for brand consistency.',
        tags: ['Logo Design', 'Brand Kit', 'Typography', 'Identity'],
        color: '#ffbc00',
        bg: 'rgba(255,188,0,0.12)',
    },
    {
        lucide: <Film size={28} />,
        title: 'Reels & Story Editing',
        desc: 'High-retention Instagram Reels and Stories engineered around hooks, rhythm, captions, and shareability.',
        tags: ['Hooks', 'Trending Audio', 'Stories', 'Thumbnails'],
        color: '#ef4f9a',
        bg: 'rgba(239,79,154,0.12)',
    },
    {
        lucide: <Cpu size={28} />,
        title: 'AI-Assisted Creative',
        desc: 'AI-supported concepting, image generation direction, content ideation, and workflow acceleration.',
        tags: ['AI Concepts', 'Automation', 'Ideation', 'Mockups'],
        color: '#38c7f2',
        bg: 'rgba(56,199,242,0.12)',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 34 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }
    })
};

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <motion.div
                    className="section-heading-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <div className="section-label">Services</div>
                        <h2 className="section-title">
                            Creative Systems<br />
                            <span className="gradient-text">For Bold Brands</span>
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        End-to-end creative support for brands that need scroll-stopping visuals, consistent identity,
                        and content that feels built with intent.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="service-card"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="service-card-accent" style={{ background: service.color }} />
                            <div
                                className="service-icon"
                                style={{ background: service.bg, color: service.color }}
                            >
                                {service.lucide}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <div className="service-tags">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="service-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
