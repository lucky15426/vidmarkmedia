import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Phone, Linkedin, Instagram, Send, Check,
    MessageCircle, ExternalLink
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactItems = [
    {
        label: 'Email',
        val: 'Vidmarkmedia@gmail.com',
        href: 'mailto:Vidmarkmedia@gmail.com',
        icon: <Mail size={20} />,
    },
    {
        label: 'Phone / WhatsApp',
        val: '+91 7549304087',
        href: 'https://wa.me/917549304087',
        icon: <Phone size={20} />,
    },
    {
        label: 'LinkedIn',
        val: 'linkedin.com/company/vidmarkmedia',
        href: 'https://www.linkedin.com/in/vidmark-media-b43a753a5/',
        icon: <Linkedin size={20} />,
    },
];

const Contact = () => {
    const formRef = useRef(null);
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formRef.current || isSending) return;
        setIsSending(true);

        const templateParams = {
            name: formRef.current.user_name.value,
            from_name: formRef.current.user_name.value,
            email: formRef.current.user_email.value,
            reply_to: formRef.current.user_email.value,
            message: formRef.current.message.value,
            service: formRef.current.service.value,
            title: 'Freelance Inquiry',
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            )
            .then(() => {
                setIsSent(true);
                e.target.reset();
                setService('');
                setTimeout(() => setIsSent(false), 4000);
            })
            .catch((err) => {
                console.error('EmailJS error:', err);
                alert('Something went wrong. Please email us directly at Vidmarkmedia@gmail.com');
            })
            .finally(() => setIsSending(false));
    };

    return (
        <section className="section" id="contact" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">Get In Touch</div>
                    <h2 className="section-title">
                        Let&apos;s Build Something <span className="gradient-text">Great</span>
                    </h2>
                </motion.div>

                <div className="contact-layout">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="contact-info-desc">
                            Have a project in mind? Looking for a creative partner who delivers premium results?
                            Let&apos;s talk. We are available for brand projects, campaigns, and long-term collaborations.
                        </p>

                        <div className="contact-items">
                            {contactItems.map((item) => (
                                <motion.div
                                    key={item.label}
                                    className="contact-item"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="contact-icon-box">{item.icon}</div>
                                    <div>
                                        <div className="contact-label">{item.label}</div>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-val"
                                            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                        >
                                            {item.val}
                                            <ExternalLink size={12} style={{ opacity: 0.5 }} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="contact-cta-btns" style={{ marginBottom: '40px' }}>
                            <a
                                href="https://wa.me/917549304087"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-sm"
                                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                            >
                                <MessageCircle size={16} /> WhatsApp Us
                            </a>
                            <a
                                href="mailto:Vidmarkmedia@gmail.com"
                                className="btn btn-outline btn-sm"
                            >
                                <Mail size={16} /> Email Directly
                            </a>
                        </div>

                        <div>
                            <div className="contact-social-label">Find Us Online</div>
                            <div className="contact-socials">
                                {[
                                    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/vidmarkmedia', label: 'Instagram' },
                                    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/vidmark-media-b43a753a5/', label: 'LinkedIn' },
                                    { icon: <Mail size={18} />, href: 'mailto:Vidmarkmedia@gmail.com', label: 'Email' },
                                ].map(({ icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="contact-social-link"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="availability-badge">
                            <span className="availability-dot" />
                            <span>Available for new projects, responding within 24hrs</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="contact-form-header">
                                <h3>Send a Message</h3>
                                <p>We will get back to you within 24 hours.</p>
                            </div>

                            <div className="form-row">
                                <div className="form-group" style={{ margin: 0 }}>
                                    <label className="form-label">Your Name</label>
                                    <input
                                        name="user_name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group" style={{ margin: 0 }}>
                                    <label className="form-label">Email Address</label>
                                    <input
                                        name="user_email"
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Service Interested In</label>
                                <select
                                    name="service"
                                    required
                                    className="form-input"
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <option value="" disabled>Select a service...</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="video-editing">Video Editing</option>
                                    <option value="social-media">Social Media Management</option>
                                    <option value="branding">Branding & Identity</option>
                                    <option value="ui-ux">UI/UX Design</option>
                                    <option value="reels">Reels & Story Editing</option>
                                    <option value="full-package">Full Creative Package</option>
                                    <option value="other">Other / Let&apos;s Discuss</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project, goals, timeline, and budget..."
                                    required
                                    className="form-textarea"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`form-submit ${isSent ? 'success' : ''}`}
                                disabled={isSending}
                            >
                                {isSent ? (
                                    <><Check size={18} /> Message sent. We will reply soon.</>
                                ) : (
                                    <><Send size={18} /> {isSending ? 'Sending...' : 'Send Message'}</>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
