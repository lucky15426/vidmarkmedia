import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CurvedLoop from './CurvedLoop';

import logo1 from '../assets/brand-logos/brand-logo-1.png';
import logo2 from '../assets/brand-logos/brand-logo-2.png';
import logo3 from '../assets/brand-logos/brand-logo-3.png';
import logo4 from '../assets/brand-logos/brand-logo-4.png';
import logo5 from '../assets/brand-logos/brand-logo-5.png';
import logo6 from '../assets/brand-logos/brand-logo-6.png';
import logo7 from '../assets/brand-logos/brand-logo-7.png';
import logo8 from '../assets/brand-logos/brand-logo-8.png';
import logo9 from '../assets/brand-logos/brand-logo-9.png';
import logo10 from '../assets/brand-logos/brand-logo-10.png';
import logo11 from '../assets/brand-logos/brand-logo-11.png';

const logos = [
    { name: 'Homliv', src: logo1 },
    { name: 'Archmentor', src: logo2 },
    { name: 'SDBM Public School', src: logo3 },
    { name: 'Madonna Salon', src: logo4 },
    { name: 'Bellance Salon', src: logo5 },
    { name: 'Chulha Charcoal', src: logo6 },
    { name: 'Ayudra', src: logo7 },
    { name: 'Cut & Style Salon', src: logo8 },
    { name: 'The Blue Moon', src: logo9 },
    { name: 'Global Event Service', src: logo10 },
    { name: 'Affordpill', src: logo11 },
];

const BrandLogos = () => {
    const marqueeLogos = [...logos, ...logos];

    return (
        <section className="section brand-logos-section" id="brand-logos">
            <CurvedLoop
                marqueeText="Logos Built For Brands * Identity Systems * Visual Marks * "
                speed={1.4}
                curveAmount={96}
                direction="left"
                interactive
                className="brand-loop-text"
            />

            <div className="container brand-logos-inner">
                <motion.div
                    className="brand-logos-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Logo Systems</div>
                    <h2 className="section-title">
                        Brand Marks <span className="gradient-text">Built To Travel</span>
                    </h2>
                    <p className="section-subtitle">
                        A clean run of logos and identity marks designed for salons, schools, wellness brands,
                        event services, product platforms, and growing businesses.
                    </p>
                </motion.div>
            </div>

            <div className="brand-logo-marquee" aria-label="Brand logo showcase">
                <div className="brand-logo-track">
                    {marqueeLogos.map((logo, index) => (
                        <div className="brand-logo-tile" key={`${logo.name}-${index}`}>
                            <img src={logo.src} alt={`${logo.name} logo`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <motion.div
                    className="brand-logo-grid"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            className="brand-logo-card"
                            key={logo.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                        >
                            <img src={logo.src} alt={`${logo.name} logo`} />
                            <span>{logo.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="brand-logos-note">
                    <Sparkles size={14} />
                    <span>Logo exploration, refinement, layout, typography, and brand-ready export work.</span>
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
