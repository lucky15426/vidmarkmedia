import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, Palette, Sparkles } from 'lucide-react';
import Aurora from './Aurora';
import logo from '../assets/vidmarkmedia_logo.png';

const loadingTexts = [
    'Preparing edits...',
    'Tuning visuals...',
    'Loading showcase...',
    'Ready to roll...',
];

const loadingChips = [
    { label: 'Design', icon: <Palette size={13} /> },
    { label: 'Video', icon: <Clapperboard size={13} /> },
    { label: 'Identity', icon: <Sparkles size={13} /> },
];

const auroraColorStops = ['#06B6D4', '#d5c8e1', '#EAB308'];

const LoadingScreen = () => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <div className="loading-aurora-wrap">
                <Aurora
                    colorStops={auroraColorStops}
                    blend={0.5}
                    amplitude={0.75}
                    speed={0.55}
                />
            </div>
            <div className="loading-grid" />

            <motion.div
                className="loading-card"
                aria-live="polite"
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <span className="loading-orbit loading-orbit-one" aria-hidden="true" />
                <span className="loading-orbit loading-orbit-two" aria-hidden="true" />

                <div className="loading-card-topline">
                    <span className="loading-live-dot" />
                    Premium creative studio
                </div>

                <motion.div
                    className="loading-logo-wrap"
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.img
                        src={logo}
                        alt="Vidmark Media"
                        className="loading-logo"
                        animate={{
                            filter: [
                                'drop-shadow(0 0 0 rgba(56, 199, 242, 0))',
                                'drop-shadow(0 18px 44px rgba(56, 199, 242, 0.24))',
                                'drop-shadow(0 12px 34px rgba(255, 188, 0, 0.18))',
                            ],
                        }}
                        transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror' }}
                    />
                </motion.div>

                <div className="loading-chips" aria-hidden="true">
                    {loadingChips.map((chip, index) => (
                        <motion.span
                            key={chip.label}
                            className="loading-chip"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28 + index * 0.08, duration: 0.35 }}
                        >
                            {chip.icon}
                            {chip.label}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="loading-divider"
                />

                <div className="loading-progress" aria-hidden="true">
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.3, ease: [0.65, 0, 0.35, 1] }}
                    />
                </div>

                <div className="loading-status">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={textIndex}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            {loadingTexts[textIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
