import { useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Dynamically fetch all MP4, WebM, OGG, and MOV files under the src/assets directory (including subfolders)
const videoGlob = import.meta.glob([
    '../assets/**/*.mp4',
    '../assets/**/*.webm',
    '../assets/**/*.ogg',
    '../assets/**/*.mov'
], { eager: true, query: '?url', import: 'default' });

const ALL_VIDEOS = Object.entries(videoGlob)
    .filter(([path]) => {
        const filename = path.split('/').pop().replace(/\.[^/.]+$/, "");
        return filename.toLowerCase() !== 'frontpage';
    })
    .map(([path, src], index) => {
        const filename = path.split('/').pop().replace(/\.[^/.]+$/, "");
        
        // Clean up filename to a professional title
        let title = filename
            .replace(/[_-]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        title = title.replace(/\b\w/g, c => c.toUpperCase());

        return {
            id: index + 1,
            title,
            src
        };
    });

console.log("Dynamically loaded video assets:", ALL_VIDEOS);

// Card Component with hover autoplay preview & play/pause controls
const VideoCard = ({ video }) => {
    const videoRef = useRef(null);

    // Set muted property on DOM mount and update to ensure browser autoplay policy is satisfied
    const setMutedProperty = () => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.defaultMuted = true;
        }
    };

    const handleMouseEnter = () => {
        setMutedProperty();
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.warn(`Autoplay blocked on hover for video: ${video.title}`, err);
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            setMutedProperty();
            if (videoRef.current.paused) {
                videoRef.current.play().catch((err) => {
                    console.error(`Click playback failed for video: ${video.title}`, err);
                });
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <motion.div
            className="video-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            {/* Click-to-Play Overlay (Covers the top portion above native controls) */}
            <div 
                className="video-click-overlay"
                onClick={handleOverlayClick}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'calc(100% - 50px)',
                    zIndex: 1,
                    cursor: 'pointer'
                }}
            />

            <video
                ref={videoRef}
                onLoadedMetadata={setMutedProperty}
                muted
                loop
                playsInline
                controls
                preload="metadata"
                onError={(e) => console.error(`Video element error for: ${video.title}`, e)}
                style={{ 
                    pointerEvents: 'auto', 
                    display: 'block', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 0
                }}
            >
                <source 
                    src={video.src} 
                    type="video/mp4" 
                    onError={(e) => console.error(`Failed to load video source for: ${video.title}. Source URL: ${video.src}`, e)} 
                />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
};

const VideoEditing = () => {
    const handleClose = () => {
        const portfolioSec = document.getElementById('portfolio');
        if (portfolioSec) {
            portfolioSec.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="video-editing-section-outer" id="video-editing">
            <div className="container">
                <motion.div
                    className="video-editing-glass-container"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                    {/* Close Button in Top Right */}
                    <button 
                        className="video-close-btn" 
                        onClick={handleClose} 
                        aria-label="Back to portfolio"
                    >
                        <X size={20} />
                    </button>

                    {/* Section Header Label */}
                    <div className="video-section-header">
                        VIDEO EDITING • PERSONAL BRANDS • SOCIAL CAMPAIGNS
                    </div>

                    {/* Main Title */}
                    <h2 className="video-section-title">
                        Video Editing & Reels
                    </h2>

                    {/* Subtitle */}
                    <p className="video-section-subtitle">
                        A showcase of short-form edits, reels, advertisements, cinematic edits, transitions, captions, pacing, and social media storytelling.
                    </p>

                    {/* Dynamic Video Grid */}
                    {ALL_VIDEOS.length === 0 ? (
                        <div className="video-empty-state">
                            <p>No video files found in the assets folder.</p>
                        </div>
                    ) : (
                        <div className="video-editing-grid">
                            {ALL_VIDEOS.map((video) => (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default VideoEditing;
