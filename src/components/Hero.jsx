import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react';
import PdfLogo from './PdfLogo';
import frontpageVideo from '../assets/frontpage.mp4';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <video
                className="hero-bg-video"
                src={frontpageVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            />
            <div className="hero-video-overlay" />
            <div className="hero-grid-lines" />

            <div className="hero-socials">
                {[
                    { icon: <Instagram size={16} />, href: 'https://www.instagram.com/vidmarkmedia', label: 'Instagram' },
                    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/vidmark-media-b43a753a5/', label: 'LinkedIn' },
                    { icon: <Mail size={16} />, href: 'mailto:Vidmarkmedia@gmail.com', label: 'Email' },
                ].map(({ icon, href, label }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="hero-social-link"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        {icon}
                    </motion.a>
                ))}
            </div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <div className="hero-badge">
                        <div className="hero-badge-dot" />
                        <Sparkles size={12} />
                        Available for Premium Design & Video Projects
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.div
                        className="hero-logo-card"
                        whileHover={{ scale: 1.025, y: -4 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    >
                        <PdfLogo />
                    </motion.div>
                </motion.div>

                <motion.p className="hero-kicker" variants={itemVariants}>
                    Graphic Designing / Video Editing / Brand Identity / 3D Designing
                </motion.p>

                <motion.p className="hero-tagline" variants={itemVariants}>
                    We transform brands into outstanding visual stories. From scroll-stopping video edits
                    and premium graphic designs to complete brand identities, Vidmark delivers premium creative work that gets results.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.a
                        href="#contact"
                        className="btn btn-primary btn-lg"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Hire Us <ArrowRight size={18} />
                    </motion.a>
                    <motion.a
                        href="#portfolio"
                        className="btn btn-outline btn-lg"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Play size={16} /> View Work
                    </motion.a>
                </motion.div>

            </motion.div>

        </section>
    );
};

export default Hero;
