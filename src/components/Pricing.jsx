import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
    {
        plan: 'Starter',
        price: '5,000',
        period: 'per project',
        desc: 'For brands that need a focused creative push.',
        features: [
            '5 social media creatives',
            '1 reel or short video edit',
            '2 poster or ad designs',
            'Basic visual consistency',
            '2 revision rounds',
            '5-day turnaround',
        ],
        popular: false,
        cta: 'Get Started',
    },
    {
        plan: 'Growth',
        price: '15,000',
        period: 'per month',
        desc: 'For growing brands that need consistent content.',
        features: [
            '20 posts or story creatives',
            '4 high-quality reels',
            '5 campaign graphics',
            'Content calendar and strategy',
            'Meta ad creative support',
            'Priority revisions',
        ],
        popular: true,
        cta: "Let's Grow",
    },
    {
        plan: 'Agency',
        price: '35,000',
        period: 'per month',
        desc: 'For brands that want full creative partnership.',
        features: [
            'Everything in Growth',
            '8 premium reels plus thumbnails',
            'Brand identity system support',
            'Landing page visual direction',
            'Long-form video editing',
            'Dedicated WhatsApp support',
        ],
        popular: false,
        cta: 'Go Full Scale',
    },
];

const Pricing = () => {
    return (
        <section className="section pricing-section" id="pricing">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}
                >
                    <div className="section-label centered-label">Investment</div>
                    <h2 className="section-title">
                        Simple <span className="gradient-text">Packages</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Clear starting points for common brand needs. Custom retainers are available for larger scopes.
                    </p>
                </motion.div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.plan}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="pricing-plan">
                                {plan.popular && <Zap size={12} style={{ display: 'inline', marginRight: '4px' }} />}
                                {plan.plan}
                            </div>

                            <div className="pricing-price">
                                <span className="pricing-currency">INR</span>
                                {plan.price}
                            </div>
                            <div className="pricing-period">{plan.period}</div>
                            <p className="pricing-desc">{plan.desc}</p>

                            <ul className="pricing-features">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="pricing-feature">
                                        <span className="pricing-feature-check">
                                            <Check size={10} strokeWidth={3} />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                                style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pricing-note"
                >
                    Need a custom scope? <a href="#contact">Build a bespoke package</a>
                </motion.p>
            </div>
        </section>
    );
};

export default Pricing;
