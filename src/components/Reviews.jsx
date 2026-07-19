import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    ThumbsUp,
    ShieldCheck,
    Upload,
    Sparkles,
    Search,
    Filter,
    ArrowUpDown,
    CheckCircle2,
    MessageSquarePlus,
    AlertCircle,
    X,
    User,
    Trash2,
    RotateCcw
} from 'lucide-react';

const INITIAL_REVIEWS = [
    {
        id: 'rev-1',
        name: 'Aarav Sharma',
        company: 'Homliv Interiors',
        service: 'Video Editing',
        rating: 5,
        review: 'Vidmark Media transformed our product showcase reels completely. The motion transitions, color grading, and speed-ramping gave our brand a 10x more premium look on Instagram!',
        date: '2026-07-10',
        verified: true,
        helpfulCount: 24,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 'rev-2',
        name: 'Priya Verma',
        company: 'Ayudra Wellness',
        service: 'Graphic Design',
        rating: 5,
        review: 'The social media graphic creatives designed for Ayudra were top-tier. Clean typography, vibrant colors, and instant turnarounds. Highly recommended for growing D2C brands!',
        date: '2026-07-04',
        verified: true,
        helpfulCount: 19,
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 'rev-3',
        name: 'Vikramaditya Roy',
        company: 'Archmentor Academy',
        service: 'Branding',
        rating: 5,
        review: 'Complete identity system overhaul! From our brand logo refinement to presentation decks and campaign visual assets, the Vidmark team delivered beyond expectations.',
        date: '2026-06-28',
        verified: true,
        helpfulCount: 31,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 'rev-4',
        name: 'Neha Gupta',
        company: 'Madonna Luxury Salon',
        service: 'Social Media',
        rating: 5,
        review: 'Our salon promotional reels and story sets generated over 150+ direct client inquiries in the first 2 weeks. Vidmark understands viral visual pacing better than anyone.',
        date: '2026-06-18',
        verified: true,
        helpfulCount: 15,
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 'rev-5',
        name: 'Rohan Mehta',
        company: 'The Blue Moon Resort',
        service: 'Motion Graphics',
        rating: 5,
        review: 'Extremely professional 3D video editing and motion graphic logos. The attention to detail, lighting, and audio design made our resort teaser feel like a cinema commercial.',
        date: '2026-06-05',
        verified: true,
        helpfulCount: 12,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 'rev-6',
        name: 'Siddharth Nair',
        company: 'AffordPill Platform',
        service: 'Branding',
        rating: 5,
        review: 'Sleek UI assets, social ad creatives, and vector logo systems exported flawlessly. The brand guidelines deck was super thorough and ready for multi-channel launch.',
        date: '2026-05-22',
        verified: true,
        helpfulCount: 18,
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200'
    }
];

const SERVICES = ['All', 'Video Editing', 'Graphic Design', 'Branding', 'Social Media', 'Motion Graphics', 'Other'];

const RATING_DISTRIBUTION = [
    { stars: 5, percentage: 92, count: 142 },
    { stars: 4, percentage: 6, count: 9 },
    { stars: 3, percentage: 2, count: 3 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 }
];

const Reviews = () => {
    // Persistent state in localStorage
    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem('vidmark_reviews');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Failed to parse saved reviews', e);
            }
        }
        return INITIAL_REVIEWS;
    });

    useEffect(() => {
        localStorage.setItem('vidmark_reviews', JSON.stringify(reviews));
    }, [reviews]);

    // Filtering & Sorting
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('latest');

    // Helpful & Report state tracking
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [toastMessage, setToastMessage] = useState(null);

    // Form state
    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        service: 'Video Editing',
        rating: 5,
        hoverRating: 0,
        reviewText: '',
        avatar: null,
        avatarPreview: '',
        confirmed: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [formError, setFormError] = useState('');

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3500);
    };

    const handleHelpfulClick = (id) => {
        if (helpfulVotes[id]) {
            showToast('You have already marked this review as helpful.');
            return;
        }

        setHelpfulVotes((prev) => ({ ...prev, [id]: true }));
        setReviews((prevReviews) =>
            prevReviews.map((rev) =>
                rev.id === id ? { ...rev, helpfulCount: rev.helpfulCount + 1 } : rev
            )
        );
        showToast('Thanks for your feedback! 👍');
    };

    const handleReportClick = () => {
        showToast('Review reported. Our team will verify this submission.');
    };

    const handleDeleteReview = (id) => {
        setReviews((prev) => prev.filter((rev) => rev.id !== id));
        showToast('Review deleted successfully.');
    };

    const handleResetReviews = () => {
        setReviews(INITIAL_REVIEWS);
        localStorage.removeItem('vidmark_reviews');
        showToast('All reviews reset to default dataset.');
    };

    const handleAvatarUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 3 * 1024 * 1024) {
            setFormError('Image size must be under 3MB.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormState((prev) => ({
                ...prev,
                avatar: file,
                avatarPreview: reader.result
            }));
            setFormError('');
        };
        reader.readAsDataURL(file);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormError('');

        if (!formState.name.trim()) {
            setFormError('Please enter your full name.');
            return;
        }
        if (!formState.reviewText.trim() || formState.reviewText.trim().length < 10) {
            setFormError('Please write a review of at least 10 characters.');
            return;
        }
        if (!formState.confirmed) {
            setFormError('Please confirm that your review is based on a real experience.');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            const newReview = {
                id: `rev-${Date.now()}`,
                name: formState.name.trim(),
                company: formState.company.trim() || 'Client',
                service: formState.service,
                rating: formState.rating,
                review: formState.reviewText.trim(),
                date: new Date().toISOString().split('T')[0],
                verified: true,
                helpfulCount: 0,
                avatar: formState.avatarPreview || null
            };

            setReviews((prev) => [newReview, ...prev]);
            setIsSubmitting(false);
            setShowSuccessToast(true);

            // Reset form
            setFormState({
                name: '',
                company: '',
                email: '',
                service: 'Video Editing',
                rating: 5,
                hoverRating: 0,
                reviewText: '',
                avatar: null,
                avatarPreview: '',
                confirmed: false
            });

            setTimeout(() => setShowSuccessToast(false), 5000);
        }, 800);
    };

    // Filter & Sort logic
    const filteredReviews = reviews
        .filter((rev) => {
            const matchesCategory = selectedCategory === 'All' || rev.service === selectedCategory;
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                !q ||
                rev.name.toLowerCase().includes(q) ||
                rev.company.toLowerCase().includes(q) ||
                rev.review.toLowerCase().includes(q) ||
                rev.service.toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'highest') return b.rating - a.rating;
            if (sortBy === 'helpful') return b.helpfulCount - a.helpfulCount;
            return new Date(b.date) - new Date(a.date); // 'latest'
        });

    return (
        <section className="section reviews-section" id="reviews">
            {/* Background Light Glows */}
            <div className="glow-dot glow-dot-cyan" style={{ top: '10%', left: '-5%', width: '400px', height: '400px', opacity: 0.15 }} />
            <div className="glow-dot glow-dot-yellow" style={{ bottom: '15%', right: '-5%', width: '450px', height: '450px', opacity: 0.12 }} />

            <div className="container">
                {/* Header Title */}
                <motion.div
                    className="reviews-heading"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">
                        <Star size={14} fill="var(--brand-secondary)" color="var(--brand-secondary)" />
                        Client Feedback
                    </div>
                    <h2 className="section-title">
                        What Our Clients <span className="gradient-text">Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Trusted by brands, creators, and businesses across India. Share your experience working with Vidmark Media.
                    </p>
                </motion.div>

                {/* Rating Summary Bar */}
                <motion.div
                    className="reviews-summary-card glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="summary-score-box">
                        <div className="score-num">4.9</div>
                        <div className="score-stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={20} fill="#ffbc00" color="#ffbc00" />
                            ))}
                        </div>
                        <div className="score-subtext">Based on 150+ Verified Reviews</div>
                        <div className="score-badge">
                            <ShieldCheck size={14} color="#38c7f2" /> 99.4% Satisfaction Rate
                        </div>
                    </div>

                    <div className="summary-bars-grid">
                        {RATING_DISTRIBUTION.map((dist) => (
                            <div className="rating-bar-item" key={dist.stars}>
                                <span className="bar-label">{dist.stars} ★</span>
                                <div className="bar-track">
                                    <motion.div
                                        className="bar-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${dist.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                    />
                                </div>
                                <span className="bar-percentage">{dist.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Layout Grid: Left Reviews & Right Form */}
                <div className="reviews-layout-grid">
                    {/* Left: Reviews Feed */}
                    <div className="reviews-feed-column">
                        {/* Search, Filter & Sort Controls */}
                        <div className="reviews-controls-bar">
                            <div className="controls-search">
                                <Search size={16} className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search reviews or brands..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    aria-label="Search reviews"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        className="clear-search-btn"
                                        onClick={() => setSearchQuery('')}
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>

                            <div className="controls-sort">
                                <ArrowUpDown size={15} color="var(--brand-primary)" />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    aria-label="Sort reviews"
                                >
                                    <option value="latest">Latest First</option>
                                    <option value="highest">Highest Rating</option>
                                    <option value="helpful">Most Helpful</option>
                                </select>
                            </div>

                            <button
                                type="button"
                                className="btn-reset-reviews"
                                onClick={handleResetReviews}
                                title="Reset reviews to default dataset"
                            >
                                <RotateCcw size={14} />
                                <span>Reset</span>
                            </button>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="reviews-category-pills" role="tablist">
                            {SERVICES.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Reviews Grid */}
                        <AnimatePresence mode="popLayout">
                            {filteredReviews.length > 0 ? (
                                <div className="reviews-cards-grid">
                                    {filteredReviews.map((item, idx) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                                            className="review-card glass-card"
                                        >
                                            <div className="review-card-header">
                                                <div className="review-stars">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={15}
                                                            fill={i < item.rating ? '#ffbc00' : 'rgba(255,255,255,0.15)'}
                                                            color={i < item.rating ? '#ffbc00' : 'transparent'}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="review-service-tag">{item.service}</span>
                                            </div>

                                            <p className="review-card-text">"{item.review}"</p>

                                            <div className="review-card-footer">
                                                <div className="client-info">
                                                    {item.avatar ? (
                                                        <img src={item.avatar} alt={item.name} className="client-avatar" />
                                                    ) : (
                                                        <div className="client-avatar-fallback">
                                                            {item.name.charAt(0)}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="client-name">
                                                            {item.name}
                                                            {item.verified && (
                                                                <span className="verified-badge" title="Verified Client">
                                                                    <ShieldCheck size={13} />
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="client-company">{item.company}</div>
                                                    </div>
                                                </div>

                                                <div className="review-meta-actions">
                                                    <span className="review-date">{item.date}</span>
                                                    <div className="action-buttons">
                                                        <button
                                                            type="button"
                                                            className={`btn-helpful ${helpfulVotes[item.id] ? 'voted' : ''}`}
                                                            onClick={() => handleHelpfulClick(item.id)}
                                                            title="Helpful review"
                                                        >
                                                            <ThumbsUp size={13} />
                                                            <span>{item.helpfulCount}</span>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-report"
                                                            onClick={handleReportClick}
                                                            title="Report issue"
                                                        >
                                                            <AlertCircle size={13} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn-delete"
                                                            onClick={() => handleDeleteReview(item.id)}
                                                            title="Delete review"
                                                        >
                                                            <Trash2 size={13} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <motion.div
                                    className="no-reviews-state glass-card"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <Sparkles size={32} color="var(--brand-primary)" />
                                    <h3>No reviews found</h3>
                                    <p>Try clearing your search query or selecting another service filter.</p>
                                    <button
                                        type="button"
                                        className="btn btn-outline btn-sm"
                                        onClick={() => {
                                            setSelectedCategory('All');
                                            setSearchQuery('');
                                        }}
                                    >
                                        Reset Filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right: Review Submission Form */}
                    <div className="reviews-form-column">
                        <motion.div
                            className="review-form-card glass-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="form-card-header">
                                <div className="form-icon-glow">
                                    <MessageSquarePlus size={22} color="var(--brand-primary)" />
                                </div>
                                <div>
                                    <h3 className="form-title">Leave a Review</h3>
                                    <p className="form-subtitle">Share your experience working with Vidmark Media</p>
                                </div>
                            </div>

                            {showSuccessToast && (
                                <motion.div
                                    className="success-banner"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <CheckCircle2 size={18} />
                                    <span>Thank you! Your review has been submitted & published successfully.</span>
                                </motion.div>
                            )}

                            {formError && (
                                <div className="error-banner">
                                    <AlertCircle size={16} />
                                    <span>{formError}</span>
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="review-form">
                                {/* Rating Picker */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Rating <span className="req">*</span>
                                    </label>
                                    <div className="star-rating-selector">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                className="star-btn"
                                                onClick={() => setFormState((prev) => ({ ...prev, rating: star }))}
                                                onMouseEnter={() => setFormState((prev) => ({ ...prev, hoverRating: star }))}
                                                onMouseLeave={() => setFormState((prev) => ({ ...prev, hoverRating: 0 }))}
                                                aria-label={`Rate ${star} star`}
                                            >
                                                <Star
                                                    size={24}
                                                    fill={
                                                        star <= (formState.hoverRating || formState.rating)
                                                            ? '#ffbc00'
                                                            : 'rgba(255,255,255,0.1)'
                                                    }
                                                    color={
                                                        star <= (formState.hoverRating || formState.rating)
                                                            ? '#ffbc00'
                                                            : 'transparent'
                                                    }
                                                />
                                            </button>
                                        ))}
                                        <span className="rating-val-text">
                                            {formState.rating} of 5 Stars
                                        </span>
                                    </div>
                                </div>

                                {/* Full Name */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="rev-name">
                                        Full Name <span className="req">*</span>
                                    </label>
                                    <input
                                        id="rev-name"
                                        type="text"
                                        placeholder="e.g. Aarav Sharma"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                {/* Company / Role */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="rev-company">
                                        Company / Role <span className="opt">(Optional)</span>
                                    </label>
                                    <input
                                        id="rev-company"
                                        type="text"
                                        placeholder="e.g. Founder at Homliv"
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        className="form-input"
                                    />
                                </div>

                                {/* Email & Service Row */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="rev-email">
                                            Email <span className="opt">(Optional)</span>
                                        </label>
                                        <input
                                            id="rev-email"
                                            type="email"
                                            placeholder="you@company.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="rev-service">
                                            Service Used <span className="req">*</span>
                                        </label>
                                        <select
                                            id="rev-service"
                                            value={formState.service}
                                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                            className="form-input form-select"
                                        >
                                            {SERVICES.filter((s) => s !== 'All').map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Review Textarea */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="rev-text">
                                        Your Review <span className="req">*</span>
                                    </label>
                                    <textarea
                                        id="rev-text"
                                        rows={4}
                                        placeholder="Tell us about your experience working with Vidmark Media..."
                                        value={formState.reviewText}
                                        onChange={(e) => setFormState({ ...formState, reviewText: e.target.value })}
                                        className="form-input form-textarea"
                                        required
                                    />
                                </div>

                                {/* Upload Profile Image */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Profile Photo <span className="opt">(Optional)</span>
                                    </label>
                                    <div className="upload-box-wrapper">
                                        <label htmlFor="rev-avatar-upload" className="upload-box">
                                            {formState.avatarPreview ? (
                                                <div className="upload-preview-wrap">
                                                    <img src={formState.avatarPreview} alt="Preview" />
                                                    <span>Change Image</span>
                                                </div>
                                            ) : (
                                                <div className="upload-prompt">
                                                    <Upload size={18} color="var(--brand-primary)" />
                                                    <span>Upload Profile Photo (PNG, JPG)</span>
                                                </div>
                                            )}
                                        </label>
                                        <input
                                            id="rev-avatar-upload"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleAvatarUpload}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                </div>

                                {/* Confirmation Checkbox */}
                                <div className="form-checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formState.confirmed}
                                            onChange={(e) => setFormState({ ...formState, confirmed: e.target.checked })}
                                        />
                                        <span>I confirm this review is based on my real experience.</span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg submit-review-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span>Submitting...</span>
                                    ) : (
                                        <>
                                            Submit Review <Sparkles size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Global Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        className="reviews-toast"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    >
                        <span>{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Reviews;
