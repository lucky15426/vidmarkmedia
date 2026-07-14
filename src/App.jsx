import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BrandLogos from './components/BrandLogos';
import Portfolio from './components/Portfolio';
import VideoEditing from './components/VideoEditing';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced to 2.5s for a better balance between UX and "wow" factor
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            <AnimatePresence mode="wait">
                {loading ? (
                    <LoadingScreen key="loader" />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Navbar />
                        <Hero />
                        <Services />
                        <About />
                        <BrandLogos />
                        <Portfolio />
                        <VideoEditing />
                        <Skills />
                        <Workflow />
                        <Contact />
                        <Footer />
                        <BackToTop />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
