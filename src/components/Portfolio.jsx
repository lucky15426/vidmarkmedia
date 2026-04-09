import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Megaphone, Film, Play, X, PlayCircle, Image as ImageIcon } from 'lucide-react';

// Video Imports
import vid1 from '../assets/InShot_20260311_205236077.mp4';
import vid3 from '../assets/lv_0_20260128183635.mp4';
import vid6 from '../assets/lv_7584067748934798645_20260116183941.mp4';
import vid5 from '../assets/Video Project 5.mp4';
import vid7 from '../assets/dimpe1.mp4';
import vid8 from '../assets/dimple2.mp4';

// Image Imports - Card 1
import showreelThumb from '../assets/WhatsApp Image 2026-04-09 at 3.11.29 PM.jpeg';

// Image Imports - Card 2
import card2Img1 from '../assets/card2/Ananya Babu (2).png';
import card2Img2 from '../assets/card2/DHRUV SANGARI (BILAL CHISHTY) and ROOH ENSEMBLE (A4).png';
import card2Img3 from '../assets/card2/WhatsApp Image 2026-03-11 at 10.41.04 PM.jpeg';
import card2Img4 from '../assets/card2/WhatsApp Image 2026-03-11 at 10.41.05 PM.jpeg';
import card2Img5 from '../assets/card2/WhatsApp Image 2026-03-11 at 10.52.09 PM.jpeg';
import card2Thumb from '../assets/card2/whp.jpeg';

// Image Imports - Card 3
import card3Thumb from '../assets/card3/Screenshot_2026-03-11-22-50-45-20_99c04817c0de5652397fc8b56c3b3817.jpg.jpeg';

// Video Imports - Card 3
import card3Vid1 from '../assets/card3/InShot_20251124_140148226.mp4';
import card3Vid2 from '../assets/card3/InShot_20260117_133939198.mp4';
import card3Vid3 from '../assets/card3/InShot_20260123_022744126.mp4';
import card3Vid4 from '../assets/card3/Pinterest_11.mp4';
import card3Vid5 from '../assets/card3/lv_7525805262867844413_20251121232005.mp4';
import card3Vid6 from '../assets/card3/lv_7542715251540741437_20251118212416.mp4';
import card3Vid7 from '../assets/card3/lv_7552898488187489597_20260207111441.mp4';

// Image Imports - Card 4
import card4Img1 from '../assets/card4/Jan 14.png';
import card4Img2 from '../assets/card4/Jan 27.png';
import card4Img3 from '../assets/card4/Sunday Story Sets.png';
import card4Img4 from '../assets/card4/Thursday story sets.png';
import card4Img5 from '../assets/card4/UNO +4.png';
import card4Img6 from '../assets/card4/Wednesday story sets.png';
import card4Img7 from '../assets/card4/verify .png';

// Image Imports - Card 5
import card5Img1 from '../assets/card5/1.png';
import card5Img2 from '../assets/card5/2.png';
import card5Img3 from '../assets/card5/3.png';
import card5Img4 from '../assets/card5/4.png';
import card5Img5 from '../assets/card5/6.png';
import card5Img6 from '../assets/card5/16.png';
import card5Img7 from '../assets/card5/19.png';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Video Editing Showreel',
            category: 'video',
            desc: 'A compilation of my best video edits and transitions using Premiere Pro and After Effects.',
            icon: <Play size={24} />,
            gradient: 'linear-gradient(135deg, #3a2d35, #c48b9f)',
            thumbnail: showreelThumb,
            videoUrl: vid1,
            videos: [vid1, vid3, vid6, vid5, vid7, vid8]
        },
        {
            id: 2,
            title: 'Brand Identity Design',
            category: 'design',
            desc: 'Complete visual identity systems including logos, color palettes, and typography.',
            icon: <Palette size={24} />,
            gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
            thumbnail: card2Img3,
            images: [card2Thumb, card2Img1, card2Img2, card2Img3, card2Img4, card2Img5]
        },
        {
            id: 3,
            title: 'Social Media Reels',
            category: 'video',
            desc: 'Dynamic, high-retention reels optimized for Instagram and TikTok growth.',
            icon: <Film size={24} />,
            gradient: 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
            thumbnail: card3Thumb,
            videoUrl: card3Vid1,
            videos: [card3Vid1, card3Vid2, card3Vid3, card3Vid4, card3Vid5, card3Vid6, card3Vid7]
        },
        {
            id: 4,
            title: 'Interactive Story sets',
            category: 'design',
            desc: 'Engaging and interactive Instagram story designs created to boost audience participation.',
            icon: <Megaphone size={24} />,
            gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
            thumbnail: card4Img5,
            images: [card4Img5, card4Img1, card4Img2, card4Img3, card4Img4, card4Img6, card4Img7]
        },
        {
            id: 5,
            title: 'Merchandise designs',
            category: 'design',
            desc: 'Custom apparel and merchandise designs, from conceptual graphics to wearable brand assets.',
            icon: <Palette size={24} />,
            gradient: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
            thumbnail: card5Img1,
            images: [card5Img1, card5Img2, card5Img3, card5Img4, card5Img5, card5Img6, card5Img7]
        }
    ];

    return (
        <section className="section portfolio" id="portfolio">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    My Creative Work
                </motion.h2>
                <p className="section-subtitle">A showcase of my video editing and graphic design projects</p>

                <div className="portfolio-grid" style={gridStyle}>
                    {projects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            className="portfolio-item"
                            onMouseEnter={() => setHoveredId(proj.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(proj)}
                            style={itemStyle}
                        >
                            <div className="portfolio-thumb" style={{ ...thumbStyle, background: proj.gradient }}>
                                {proj.videoUrl && hoveredId === proj.id ? (
                                    <video
                                        src={proj.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={videoStyle}
                                    />
                                ) : proj.thumbnail ? (
                                    <img src={proj.thumbnail} alt={proj.title} style={thumbImgStyle} />
                                ) : (
                                    <div style={placeholderIconStyle}>{proj.icon}</div>
                                )}
                            </div>
                            <div className="portfolio-overlay" style={overlayStyle}>
                                <h4>{proj.title}</h4>
                                <p>{proj.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal Logic */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="modal active"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={modalOverlayStyle}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                style={modalContentStyle}
                            >
                                <button className="modal-close" onClick={() => setSelectedProject(null)} style={closeBtnStyle}>
                                    <X size={24} />
                                </button>

                                <div className="modal-body" style={modalBodyStyle}>
                                    <h3 style={modalTitleStyle}>{selectedProject.title}</h3>
                                    <p style={modalDescStyle}>{selectedProject.desc}</p>

                                    <div className="modal-media-container" style={modalMediaContainerStyle}>
                                        {selectedProject.videos ? (
                                            <div className="video-gallery" style={galleryGridStyle}>
                                                {selectedProject.videos.map((vid, index) => (
                                                    <div key={index} className="gallery-item" style={galleryItemStyle}>
                                                        <video
                                                            src={vid}
                                                            controls
                                                            playsInline
                                                            style={galleryVideoStyle}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : selectedProject.images ? (
                                            <div className="image-gallery" style={imageGalleryGridStyle}>
                                                {selectedProject.images.map((img, index) => (
                                                    <div key={index} className="gallery-item" style={imageGalleryItemStyle}>
                                                        <img
                                                            src={img}
                                                            alt={`Project ${index + 1}`}
                                                            style={galleryImgStyle}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : selectedProject.videoUrl ? (
                                            <div style={{ ...modalImgStyle, background: selectedProject.gradient }}>
                                                <video
                                                    src={selectedProject.videoUrl}
                                                    controls
                                                    autoPlay
                                                    playsInline
                                                    style={{ ...videoStyle, borderRadius: '16px' }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ ...modalImgStyle, background: selectedProject.gradient }}>
                                                <div style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.8)' }}>
                                                    {selectedProject.icon}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div style={modalMetaStyle}>
                                        <p>
                                            Category: <span style={{ textTransform: 'capitalize', color: '#c48b9f', fontWeight: 'bold' }}>{selectedProject.category}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '60px' };
const itemStyle = {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    aspectRatio: '4/5',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
};
const thumbStyle = { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.5s ease' };
const thumbImgStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const videoStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const placeholderIconStyle = { color: 'rgba(255,255,255,0.8)', fontSize: '3.5rem' };
const overlayStyle = {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(180deg, rgba(60, 35, 45, 0) 40%, rgba(60, 35, 45, 0.95) 100%)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px',
    transition: '0.4s ease'
};

const modalOverlayStyle = {
    position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(30, 20, 25, 0.8)', backdropFilter: 'blur(12px)', padding: '20px'
};
const modalContentStyle = {
    background: '#fff', borderRadius: '32px', padding: '40px', maxWidth: '1000px', width: '100%', maxHeight: '90vh', position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)', overflowY: 'auto'
};
const modalBodyStyle = { display: 'flex', flexDirection: 'column' };
const modalTitleStyle = { fontSize: '2rem', fontWeight: 700, marginBottom: '8px', color: '#3a2d35' };
const modalDescStyle = { fontSize: '1.05rem', color: '#7a6b72', marginBottom: '32px', maxWidth: '600px' };
const modalMediaContainerStyle = { width: '100%', marginBottom: '24px' };
const modalImgStyle = { width: '100%', height: 'auto', minHeight: '320px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' };
const modalMetaStyle = { marginTop: '8px', fontSize: '0.9rem', color: '#a89da2' };
const closeBtnStyle = { position: 'absolute', top: '24px', right: '24px', border: 'none', background: 'rgba(0,0,0,0.05)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#7a6b72', transition: '0.3s', zIndex: 10 };

const galleryGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' };
const galleryItemStyle = { borderRadius: '16px', overflow: 'hidden', background: '#f8f0f4', aspectRatio: '9/16' };
const galleryVideoStyle = { width: '100%', height: '100%', objectFit: 'cover' };

const imageGalleryGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' };
const imageGalleryItemStyle = { borderRadius: '20px', overflow: 'hidden', background: '#fefbfc', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' };
const galleryImgStyle = { width: '100%', height: 'auto', display: 'block' };

export default Portfolio;
