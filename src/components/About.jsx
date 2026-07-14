import { motion } from 'framer-motion';
import { Wand2, Users, TrendingUp, Award, Zap } from 'lucide-react';
import PdfLogo from './PdfLogo';

const highlights = [
    { icon: <Wand2 size={18} />, title: 'Creative Vision', text: 'Transforming complex ideas into compelling visual narratives that resonate.' },
    { icon: <TrendingUp size={18} />, title: 'Results-Driven', text: 'Marketing strategy, content direction, and creative systems that move attention into action.' },
    { icon: <Users size={18} />, title: 'Brand Architects', text: 'Leading creative direction and managing cohesive multi-channel brand identities.' },
    { icon: <Zap size={18} />, title: 'Premium Quality', text: 'State-of-the-art designs and smooth production delivered on time.' },
];

const About = () => {
    return (
        <section className="section about" id="about" style={{ background: 'var(--bg-base)' }}>
            <div className="container">
                <div className="about-layout">
                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="about-img-frame">
                            <PdfLogo />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="section-label">Our Story</div>
                        <h2 className="section-title">
                            Creative Excellence<br />
                            <span className="gradient-text">Meets Growth Strategy</span>
                        </h2>
                        <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                            We are <strong style={{ color: 'var(--text-primary)' }}>Vidmark Brand</strong>, a
                            full-scale creative agency and production house dedicated to building outstanding brand identities,
                            producing viral-ready video content, and designing high-converting digital experiences.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '36px' }}>
                            Our work sits at the intersection of professional aesthetics, cutting-edge creative tools, and strategy.
                            We create immersive systems, write scroll-stopping narratives, and build engaging digital presences
                            that turn attention into loyal customers.
                        </p>

                        <div className="about-highlights">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="about-highlight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ borderColor: 'rgba(56,199,242,0.35)', y: -4 }}
                                >
                                    <div className="about-highlight-icon">{item.icon}</div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="about-value-card">
                            <div className="about-value-icon">
                                <Award size={20} />
                            </div>
                            <div>
                                <div className="about-value-title">
                                    Vidmark Brand Identity & Production House
                                </div>
                                <div className="about-value-copy">
                                    Delivering high-end graphic design, premium video editing, and complete digital growth frameworks.
                                </div>
                            </div>
                        </div>

                        <div className="about-actions">
                            <a href="#contact" className="btn btn-primary">
                                Let&apos;s Work Together
                            </a>
                            <a href="#portfolio" className="btn btn-outline">
                                View Showcase
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
