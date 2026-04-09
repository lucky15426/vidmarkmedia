import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

// Certificate Imports
import canvaForWorkImg from '../assets/WhatsApp Image 2026-04-09 at 5.52.33 PM.jpeg';
import canvaEssentialsImg from '../assets/WhatsApp Image 2026-04-09 at 5.52.34 PM (1).jpeg';
import aiClassroomImg from '../assets/WhatsApp Image 2026-04-09 at 5.52.34 PM.jpeg';
import ncertCertPdf from '../assets/Dimple_NCERT_Certificate.pdf';

const Certifications = () => {
    const certs = [
        {
            title: 'Canva for Work',
            issuer: 'Canva Design School • July 2025',
            link: canvaForWorkImg
        },
        {
            title: 'Canva Essentials',
            issuer: 'Canva Design School • July 2025',
            link: canvaEssentialsImg
        },
        {
            title: 'AI in the classroom',
            issuer: 'Canva Design School • July 2025',
            link: aiClassroomImg
        },
        {
            title: 'NCERT Certificate',
            issuer: 'National Council of Educational Research and Training • 2025',
            link: ncertCertPdf
        }
    ];

    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>

                <div className="cert-grid" style={gridStyle}>
                    {certs.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, backgroundColor: '#fdf5f8' }}
                            style={cardStyle}
                        >
                            <div style={iconStyle}><Award size={24} /></div>
                            <div className="cert-body" style={{ flex: 1 }}>
                                <h4 style={titleStyle}>{cert.title}</h4>
                                <p style={issuerStyle}>{cert.issuer}</p>
                            </div>
                            <div style={{ color: '#c48b9f', opacity: 0.5 }}>
                                <ExternalLink size={18} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '900px', margin: '0 auto' };
const cardStyle = {
    background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #f0e4ea',
    display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit',
    transition: '0.3s ease'
};
const iconStyle = {
    width: '50px', height: '50px', borderRadius: '12px', background: '#fdf5f8',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c48b9f'
};
const titleStyle = { fontSize: '1rem', fontWeight: 600, marginBottom: '2px' };
const issuerStyle = { fontSize: '0.85rem', color: '#7a6b72' };

export default Certifications;
