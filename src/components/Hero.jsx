import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero" id="hero" style={sectionStyle}>
            <div className="hero-bg-shapes">
                <motion.div
                    className="shape shape-1"
                    animate={{ x: [-20, 20, -20], y: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={shapeStyle('#e8c4d4', '500px', '-120px', '-120px')}
                />
                <motion.div
                    className="shape shape-2"
                    animate={{ x: [0, 20, 0], y: [-15, 0, -15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={shapeStyle('#d4a0b0', '350px', 'auto', '-80px', '-80px')}
                />
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={contentStyle}
            >
                <div className="hero-photo" style={photoContainerStyle}>
                    <div className="photo-ring" style={ringStyle}>
                        <img
                            src="dimple.jpeg"
                            alt="Dimple"
                            className="profile-img"
                            style={imgStyle}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="photo-placeholder" style={placeholderStyle}>
                            <span style={{ fontSize: '3rem' }}>D</span>
                        </div>
                    </div>
                </div>

                <h1 className="hero-name" style={nameStyle}>Dimple</h1>
                <p className="hero-title" style={titleStyle}>Graphic Designer & Video Editor</p>
                <p className="hero-subtitle" style={subtitleStyle}>B.El.Ed Student at Miranda House, University of Delhi</p>
                <p className="hero-tagline" style={taglineStyle}>
                    Creative designer and social media enthusiast passionate about visual storytelling, digital engagement, and impactful campaigns.
                </p>

                <div className="hero-buttons" style={btnGroupStyle}>
                    <a href="#portfolio" className="btn btn-outline">See My Work</a>
                    <a 
                        href="https://drive.google.com/file/d/1KYYYj0tsjcwHDBwHXX0TeYJ89M5WHukO/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline"
                    >
                        <FileText size={18} /> View Resume
                    </a>
                    <a href="#contact" className="btn btn-outline">Let's Talk</a>
                </div>

                <div className="hero-socials" style={socialsStyle}>
                    <a href="https://www.instagram.com/dimple_1685?igsh=anoxams5djBheTls" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="https://www.linkedin.com/in/dimple9119/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="mailto:dimple1682005@gmail.com" aria-label="Email"><Mail size={20} /></a>
                </div>
            </motion.div>

            <div className="scroll-indicator" style={indicatorStyle}>
                <span>Scroll Down</span>
                <ChevronDown size={16} />
            </div>
        </section>
    );
};

const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '120px 24px 80px',
    background: 'linear-gradient(180deg, #fdf5f8 0%, #fefbfc 60%, #f8f0f4 100%)'
};

const shapeStyle = (bg, size, top, right, bottom, left) => ({
    position: 'absolute',
    width: size, height: size,
    background: bg,
    borderRadius: '50%',
    opacity: 0.12,
    top, right, bottom, left
});

const contentStyle = { position: 'relative', zIndex: 1 };
const photoContainerStyle = { marginBottom: '28px' };
const ringStyle = {
    width: '280px', height: '280px', margin: '0 auto',
    borderRadius: '50%', padding: '4px',
    background: 'linear-gradient(135deg, #c48b9f, #e8c4d4, #d4a0b0)'
};
const imgStyle = { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid #fefbfc' };
const placeholderStyle = {
    display: 'none', width: '100%', height: '100%', borderRadius: '50%',
    background: 'linear-gradient(135deg, #fdf5f8, #e8c4d4)',
    alignItems: 'center', justifyContent: 'center', border: '4px solid #fefbfc'
};

const nameStyle = { fontSize: '3.2rem', fontWeight: 700, marginBottom: '8px' };
const titleStyle = { fontSize: '1.15rem', fontWeight: 500, color: '#c48b9f', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' };
const subtitleStyle = { fontSize: '1.1rem', color: '#7a6b72', fontWeight: 500, marginBottom: '20px' };
const taglineStyle = { fontSize: '1.05rem', color: '#7a6b72', maxWidth: '520px', margin: '0 auto 32px' };
const btnGroupStyle = { display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px' };
const socialsStyle = { display: 'flex', gap: '16px', justifyContent: 'center' };
const indicatorStyle = { position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#a89da2', fontSize: '0.75rem' };

export default Hero;
