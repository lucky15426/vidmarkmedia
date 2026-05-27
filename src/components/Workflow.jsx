import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Wand2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
    {
        num: '01',
        icon: <Search size={22} />,
        title: 'Discover',
        desc: 'We clarify your brand, audience, goals, references, deliverables, and timeline before production begins.',
    },
    {
        num: '02',
        icon: <Palette size={22} />,
        title: 'Direction',
        desc: 'Moodboards, visual routes, copy angles, and content structure turn the brief into a clear creative path.',
    },
    {
        num: '03',
        icon: <Wand2 size={22} />,
        title: 'Produce',
        desc: 'Design, edit, refine, and package the work with fast feedback loops and consistent quality checks.',
    },
    {
        num: '04',
        icon: <Rocket size={22} />,
        title: 'Deliver',
        desc: 'Final assets are exported, organized, and ready for posting, campaign launch, or brand handoff.',
    },
];

const Workflow = () => {
    return (
        <section className="section workflow-section" id="workflow">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}
                >
                    <div className="section-label centered-label">Process</div>
                    <h2 className="section-title">
                        A Clear Creative <span className="gradient-text">Workflow</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Built to keep projects simple, fast, and easy to approve without losing polish.
                    </p>
                </motion.div>

                <div className="workflow-steps">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            className="workflow-step"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <motion.div
                                className="workflow-num"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {step.num}
                            </motion.div>
                            <div className="workflow-icon">{step.icon}</div>
                            <h3 className="workflow-step-title">{step.title}</h3>
                            <p className="workflow-step-desc">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="workflow-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div>
                        <h3>Ready to start your project?</h3>
                        <p>Send your brief today and get a clear creative direction before production begins.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary btn-lg">
                        Book a Discovery Call <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Workflow;
