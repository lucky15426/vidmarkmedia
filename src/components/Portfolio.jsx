import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Play } from 'lucide-react';

import vid1 from '../assets/InShot_20260311_205236077.mp4';
import vid2 from '../assets/dimpe1.mp4';
import vid3 from '../assets/card3/InShot_20251124_140148226.mp4';
import vid4 from '../assets/card3/Pinterest_11.mp4';
import videoThumb from '../assets/WhatsApp Image 2026-04-09 at 3.11.29 PM.jpeg';

const imageGlob = {
    ayudra: import.meta.glob('../assets/ayudra design*/**/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
    drOrg: import.meta.glob('../assets/DR.ORG SOCIAL POST 1/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
    storyDesign: import.meta.glob('../assets/card4/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
};

const normalizeImageName = (path) => path
    .split('/')
    .pop()
    .replace(/\.(jpe?g|png)$/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*-\s*\d+$/g, '')
    .trim()
    .toLowerCase();

const toImages = (modules, { limit = Infinity, exclude = [] } = {}) => {
    const seen = new Set();

    return Object.entries(modules)
        .sort(([a], [b]) => a.localeCompare(b))
        .filter(([path]) => !exclude.some((pattern) => path.toLowerCase().includes(pattern.toLowerCase())))
        .filter(([path]) => {
            const key = normalizeImageName(path);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .slice(0, limit)
        .map(([, src]) => src);
};

const ayudraImages = toImages(imageGlob.ayudra, {
    limit: 8,
    exclude: ['14th april  crausal'],
});
const drOrgImages = toImages(imageGlob.drOrg, { limit: 8 });
const storyImages = toImages(imageGlob.storyDesign, { limit: 6 });

const ALL_PROJECTS = [
    {
        id: 1,
        title: 'Video Editing & Reels',
        category: 'Video Editing',
        client: 'Personal Brands + Social Campaigns',
        desc: 'A combined showcase of short-form edits, reels, transitions, pacing, captions, and scroll-stopping video storytelling.',
        thumbnail: videoThumb,
        videos: [vid1, vid2, vid3, vid4],
        color: '#38c7f2',
        tag: '4 Videos',
    },
    {
        id: 2,
        title: 'Ayudra Social Creatives',
        category: 'Graphic Design',
        client: 'Ayudra',
        desc: 'Carousel posts, social media graphics, product creatives, and campaign visuals made for a polished brand feed.',
        thumbnail: ayudraImages[0],
        images: ayudraImages,
        color: '#ffbc00',
        tag: `${ayudraImages.length} Designs`,
    },
    {
        id: 3,
        title: 'DR.ORG Campaign Creatives',
        category: 'Graphic Design',
        client: 'DR.ORG',
        desc: 'Awareness creatives, ad layouts, reels covers, and campaign posts designed for strong digital communication.',
        thumbnail: drOrgImages[0],
        images: drOrgImages,
        color: '#ef4f9a',
        tag: `${drOrgImages.length} Designs`,
    },
    {
        id: 5,
        title: 'Story & Engagement Sets',
        category: 'Social Media',
        client: 'Instagram Brands',
        desc: 'Interactive social assets, story layouts, and engagement-led designs built for daily audience interaction.',
        thumbnail: storyImages[0],
        images: storyImages,
        color: '#38c7f2',
        tag: `${storyImages.length} Designs`,
    },
];

const FILTERS = ['All', 'Video Editing', 'Graphic Design', 'Social Media'];

const Portfolio = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    const filtered = active === 'All'
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((project) => project.category === active);

    return (
        <section className="section" id="portfolio" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Case Studies</div>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Work</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated archive of video edits, social campaigns, ad creatives, event visuals, and brand-ready graphics.
                    </p>
                </motion.div>

                <motion.div
                    className="portfolio-filters"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ marginTop: '40px' }}
                >
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${active === filter ? 'active' : ''}`}
                            onClick={() => setActive(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                <motion.div className="portfolio-grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="portfolio-card"
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -6 }}
                                onClick={() => setSelected(project)}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="portfolio-thumb">
                                    {project.videos && hoveredId === project.id ? (
                                        <video src={project.videos[0]} autoPlay muted loop playsInline />
                                    ) : (
                                        <img src={project.thumbnail} alt={project.title} />
                                    )}

                                    <div className="portfolio-overlay">
                                        <div className="portfolio-overlay-label">
                                            {project.videos ? <Play size={14} /> : <Eye size={14} />}
                                            <span>{project.videos ? 'Watch Showcase' : 'View Gallery'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-card-body">
                                    <div className="portfolio-card-meta">
                                        <span className="portfolio-card-category">{project.category}</span>
                                        <span
                                            className="portfolio-card-tag"
                                            style={{
                                                background: `${project.color}18`,
                                                color: project.color,
                                                borderColor: `${project.color}30`
                                            }}
                                        >
                                            {project.tag}
                                        </span>
                                    </div>
                                    <h3 className="portfolio-card-title">{project.title}</h3>
                                    <p className="portfolio-card-desc">
                                        <strong>Client:</strong> {project.client}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="modal-box"
                            initial={{ scale: 0.88, y: 40, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.88, y: 40, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close gallery">
                                <X size={18} />
                            </button>

                            <div className="modal-header">
                                <div className="modal-category">{selected.category} - {selected.client}</div>
                                <h3 className="modal-title">{selected.title}</h3>
                                <p className="modal-desc">{selected.desc}</p>
                            </div>

                            <div className="modal-body">
                                {selected.videos ? (
                                    <div className="modal-gallery-grid">
                                        {selected.videos.map((video, index) => (
                                            <div key={index} className="modal-gallery-item">
                                                <video src={video} controls playsInline />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="modal-image-grid">
                                        {selected.images.map((image, index) => (
                                            <div key={index} className="modal-image-item">
                                                <img src={image} alt={`${selected.title} ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
