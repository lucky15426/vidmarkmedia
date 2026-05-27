import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#portfolio' },
        { name: 'About', href: '#about' },
        { name: 'Process', href: '#workflow' },
    ];

    const handleLinkClick = () => setIsOpen(false);

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container">
                <a href="#hero" className="nav-logo">
                    Vidmark<span>.</span>
                </a>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.07 }}
                        >
                            <a href={link.href} onClick={handleLinkClick}>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                    <li>
                        <a href="#contact" className="nav-cta" onClick={handleLinkClick}>
                            Hire Us
                        </a>
                    </li>
                </ul>

                <button
                    className="nav-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                    style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="nav-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
