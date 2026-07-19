import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Play } from 'lucide-react';

const imageGlob = {
    ayudra: import.meta.glob('../assets/ayudra design*/**/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
    drOrg: import.meta.glob('../assets/DR.ORG SOCIAL POST 1/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
    storyDesign: import.meta.glob('../assets/card4/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
    brandCreatives: import.meta.glob('../assets/design *.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
    slideDesigns: import.meta.glob('../assets/slide*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }),
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
        .sort(([a], [b]) => {
            if (a.toLowerCase().includes('slide') && b.toLowerCase().includes('slide')) {
                const matchA = a.match(/slide\s*(\d+)/i);
                const matchB = b.match(/slide\s*(\d+)/i);
                if (matchA && matchB) {
                    const numA = parseInt(matchA[1], 10);
                    const numB = parseInt(matchB[1], 10);
                    if (numA !== numB) {
                        return numA - numB;
                    }
                }
            }
            return a.localeCompare(b);
        })
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
const drOrgImages = toImages(imageGlob.drOrg, {
    limit: 8,
    exclude: ['DR.ORG SOCIAL POST 14', 'DR.ORG SOCIAL POST 12', 'DR.org reels creative', 'DR.org facebook ad creative']
});
const storyImages = toImages(imageGlob.storyDesign, { limit: 6 });
const brandCreativeImages = toImages(imageGlob.brandCreatives);
const slideImages = toImages(imageGlob.slideDesigns, {
    exclude: ['slide 2 for behance', 'slide 3 for behance']
});


const ALL_PROJECTS = [
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
        id: 4,
        title: 'Social Poster & Brand Creatives',
        category: 'Graphic Design',
        client: 'Featured Campaign',
        desc: 'Premium visual design and promotional graphics crafted for advertising and brand engagement.',
        thumbnail: brandCreativeImages[0] || '',
        images: brandCreativeImages,
        color: '#ffbc00',
        tag: `${brandCreativeImages.length} Designs`,
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
    {
        id: 6,
        title: 'Behance Case Studies & Presentations',
        category: 'Graphic Design',
        client: 'Vidmark Agency Showcase',
        desc: 'Sleek Behance presentation designs, brand case studies, and creative slides built to pitch visual strategies.',
        thumbnail: slideImages[0] || '',
        images: slideImages,
        color: '#ef4f9a',
        tag: `${slideImages.length} Slides`,
    },
];

const FILTERS = ['All', 'Graphic Design', 'Social Media'];

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
