import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Process', href: '#workflow' },
];

const socials = [
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/vidmarkmedia', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/vidmark-media-b43a753a5/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:Vidmarkmedia@gmail.com', label: 'Email' },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand-name">Vidmark<span>.</span></div>
                        <p className="footer-brand-desc">
                            Graphic design, video editing, brand identity, and social creative systems for digital-first brands.
                        </p>
                        <div className="footer-socials">
                            {socials.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social"
                                    aria-label={item.label}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Explore</div>
                        <div className="footer-links">
                            {footerLinks.map((link) => (
                                <a key={link.href} href={link.href} className="footer-link">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Start</div>
                        <a href="#contact" className="footer-project-link">
                            Discuss a project <ArrowUpRight size={16} />
                        </a>
                        <p className="footer-brand-desc" style={{ marginTop: '14px' }}>
                            Available for select design, video, and campaign work.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">Copyright 2026 Vidmark Brand. All rights reserved.</p>
                    <p className="footer-made">Built for brands that move fast.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
