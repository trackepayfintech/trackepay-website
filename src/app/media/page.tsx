"use client";

import Image from "next/image";
import { Play, X, Clock, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import CTABanner from "@/components/shared/CTABanner";

const galleryImages = [
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/odisha-police2.webp",
        title: "Khordha Police Mitra",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-1.webp",
        title: "Khordha Police Mitra",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-2.webp",
        title: "Khordha Police Mitra",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-3.webp",
        title: "Khordha Police Mitra",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-4.webp",
        title: "Khordha Police Mitra",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-5.webp",
        title: "Khordha Police Mitra",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp",
        title: "We Care Sathi Review",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review.webp",
        title: "We Care Sathi Review",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review3.webp",
        title: "We Care Sathi Review",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review-4.webp",
        title: "We Care Sathi Review",
    },
    {
        image: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Sarai2.O.webp",
        title: "Sarai2.O",
    },
];

interface VideoItem {
    title: string;
    description: string;
    duration: string;
    views: string;
    thumbnail: string;
    videoId?: string;
    videoUrl?: string;
    type: "youtube" | "mp4";
}

const videos: VideoItem[] = [
    {
        title: "Smart Policing Platform",
        description: "Revolutionizing law enforcement with AI-driven solutions",
        duration: "3:45",
        views: "1.2K",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Khordha-Police-Mitra.webp",
        videoId: "0bZ76LAe1Ds",
        type: "youtube",
    },
    {
        title: "We Care Sathi",
        description: "Next-gen traveler management system",
        duration: "4:20",
        views: "892",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi1.webp",
        videoId: "Rnc32bdJBDI",
        type: "youtube",
    },
    {
        title: "We Care Sathi",
        description: "Key features and capabilities overview",
        duration: "5:15",
        views: "1.5K",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi2.webp",
        videoId: "Rfo29XDRMh0",
        type: "youtube",
    },
    {
        title: "Implementation Success",
        description: "Real-world deployment success stories",
        duration: "6:30",
        views: "2.1K",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi3.webp",
        videoId: "wYnztAu1SlA",
        type: "youtube",
    },
    {
        title: "User Experience",
        description: "How users benefit from our solutions",
        duration: "3:50",
        views: "756",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi4.webp",
        videoId: "apqaUFm2t-w",
        type: "youtube",
    },
    {
        title: "Technical Deep Dive",
        description: "Behind the scenes of Sarai-2.O",
        duration: "8:15",
        views: "623",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi5.webp",
        videoId: "-bJglzuaRDo",
        type: "youtube",
    },
    {
        title: "Client Testimonial",
        description: "What our clients say about us",
        duration: "4:45",
        views: "1.8K",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi6.webp",
        videoId: "ugkS_-zlcX8",
        type: "youtube",
    },
    {
        title: "Integration Guide",
        description: "Step-by-step integration walkthrough",
        duration: "7:20",
        views: "445",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi7.webp",
        videoId: "LiW1QAyPnJY",
        type: "youtube",
    },
    {
        title: "Security Features",
        description: "Enterprise-grade security implementation",
        duration: "5:40",
        views: "967",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi8.webp",
        videoId: "u6YqFlea5jk",
        type: "youtube",
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time analytics and reporting",
        duration: "4:15",
        views: "1.3K",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi9.webp",
        videoId: "H56kGke55PE",
        type: "youtube",
    },
    {
        title: "Mobile App Demo",
        description: "Mobile application features showcase",
        duration: "3:30",
        views: "2.2K",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/we-care-sathi10.webp",
        videoId: "HjyZJbxMs90",
        type: "youtube",
    },
    {
        title: "Sarai-2.O",
        description: "Smart Citizen Support & Emergency Platform",
        duration: "0:8",
        views: "",
        thumbnail: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/Sarai2.O-2.webp",
        videoUrl: "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/video-sarai-2.O.mp4",
        type: "mp4",
    },
];

export default function MediaClient() {
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
    const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageModalRef = useRef<HTMLDivElement>(null);
    const videoModalRef = useRef<HTMLDivElement>(null);

    // Function to handle video click
    const handleVideoClick = (video: VideoItem, index: number) => {
        setCurrentVideoIndex(index);
        setActiveVideo(video);
    };

    // Function to close modal and stop video
    const closeModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setActiveVideo(null);
        setIsImageModalOpen(false);
    };

    // Function to open image modal
    const openImageModal = () => {
        setIsImageModalOpen(true);
    };

    // Function to navigate to next image in main section
    const nextImageMain = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    // Function to navigate to previous image in main section
    const prevImageMain = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Function to navigate to next image in popup
    const nextImagePopup = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    // Function to navigate to previous image in popup
    const prevImagePopup = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Function to navigate to next video
    const nextVideo = () => {
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(nextIndex);
        setActiveVideo(videos[nextIndex]);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    };

    // Function to navigate to previous video
    const prevVideo = () => {
        const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        setCurrentVideoIndex(prevIndex);
        setActiveVideo(videos[prevIndex]);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (activeVideo && !isImageModalOpen) {
                if (e.key === 'ArrowRight') {
                    nextVideo();
                } else if (e.key === 'ArrowLeft') {
                    prevVideo();
                } else if (e.key === 'Escape') {
                    closeModal();
                }
            } else if (isImageModalOpen) {
                if (e.key === 'ArrowRight') {
                    nextImagePopup();
                } else if (e.key === 'ArrowLeft') {
                    prevImagePopup();
                } else if (e.key === 'Escape') {
                    closeModal();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeVideo, isImageModalOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isImageModalOpen || activeVideo !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isImageModalOpen, activeVideo]);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#F8FAFC] py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Gallery
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
                        Media Gallery
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        Explore our project showcases, technology solutions,
                        events, product highlights, and media updates.
                    </p>
                </div>
            </section>

            {/* Image Gallery - Single Image Display with Arrows */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800">
                                Image Gallery
                            </h2>
                            <p className="text-slate-600 mt-2">
                                Click on the image to view fullscreen gallery.
                            </p>
                        </div>
                        <div className="text-sm text-slate-500">
                            {galleryImages.length} images available
                        </div>
                    </div>

                    {/* Single Main Image with Navigation Arrows Container */}
                    {/* Added px-6 sm:px-0 so buttons don't bleed off the actual screen edge on mobile */}
                    <div className="relative max-w-4xl mx-auto px-6 sm:px-0">

                        {/* Left Arrow */}
                        <button
                            onClick={prevImageMain}
                            className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-[40] bg-white hover:bg-orange-500 text-slate-700 hover:text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 group -translate-x-1/2"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextImageMain}
                            className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 z-[40] bg-white hover:bg-orange-500 text-slate-700 hover:text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 group translate-x-1/2"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                        </button>

                        {/* Main Image Trigger Button */}
                        <button
                            onClick={openImageModal}
                            className="group relative block overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer w-full text-left"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <Image
                                    src={galleryImages[currentImageIndex].image}
                                    alt={galleryImages[currentImageIndex].title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                {/* Overlay with click hint */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
                                        Click to view all {galleryImages.length} images →
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-slate-800">
                                    {galleryImages[currentImageIndex].title}
                                </h3>
                                <p className="text-slate-500 text-sm mt-2">
                                    {currentImageIndex + 1} of {galleryImages.length} images
                                </p>
                            </div>
                        </button>

                    </div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="pb-20 mb-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-slate-800">
                            Video Gallery
                        </h2>
                        <p className="text-slate-600 mt-2">
                            Click on any video to watch. Use arrow buttons to navigate between videos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video, index) => (
                            <button
                                type="button"
                                key={index}
                                onClick={() => handleVideoClick(video, index)}
                                onMouseEnter={() => setHoveredVideo(index)}
                                onMouseLeave={() => setHoveredVideo(null)}
                                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer text-left w-full"
                            >
                                {/* Thumbnail Container */}
                                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className={`object-cover transition-all duration-700 ${hoveredVideo === index ? 'scale-110' : 'scale-100'
                                            }`}
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Video Type Badge */}
                                    <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md z-10">
                                        {video.type === 'youtube' ? 'YouTube' : 'MP4'}
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md z-10">
                                        {video.duration}
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredVideo === index ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="w-16 h-16 rounded-full bg-orange-500/90 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                            <Play className="w-7 h-7 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4 flex-1">
                                    <h3 className="font-semibold text-slate-800 text-base mb-1 line-clamp-1">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs mb-3 line-clamp-2">
                                        {video.description}
                                    </p>

                                    {/* Metadata */}
                                    <div className="flex items-center gap-3 text-xs text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            <span>{video.views} views</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{video.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Border Effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal - Popup with All Images Navigation */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
                >
                    <div
                        ref={imageModalRef}
                        className="absolute inset-0 flex items-center justify-center p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                closeModal();
                            }
                        }}
                    >
                        <div className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
                            {/* Close Button (Cross) - Top Right */}
                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute -top-12 right-0 sm:top-0 sm:right-0 z-[60] bg-black/60 hover:bg-red-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-red-500 group"
                                aria-label="Close image viewer"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                            </button>

                            {/* Left Navigation Arrow */}
                            <button
                                type="button"
                                onClick={prevImagePopup}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-[60] bg-black/60 hover:bg-orange-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-orange-500 group"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                            </button>


                            <button
                                type="button"
                                onClick={nextImagePopup}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-[60] bg-black/60 hover:bg-orange-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-orange-500 group"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                            </button>

                            {/* Image Container - Large Size */}
                            <div className="relative flex-1 overflow-hidden rounded-2xl bg-black shadow-2xl">
                                <Image
                                    src={galleryImages[currentImageIndex].image}
                                    alt={galleryImages[currentImageIndex].title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1300px) 90vw, 1500px"
                                    priority
                                    quality={100}
                                />
                            </div>

                            {/* Image Title and Counter */}
                            <div className="mt-6 text-center text-white bg-black/50 py-4 px-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                    {galleryImages[currentImageIndex].title}
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {currentImageIndex + 1} of {galleryImages.length} images
                                </p>
                            </div>

                            {/* Navigation Hint */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs hidden sm:block">
                                ← →  Use arrow keys to navigate
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Video Modal - Supports both YouTube and MP4 with Navigation Arrows and Proper Background */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
                >
                    <div
                        ref={videoModalRef}
                        className="absolute inset-0 flex items-center justify-center p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                closeModal();
                            }
                        }}
                    >
                        <div className="relative w-full max-w-5xl">
                            {/* Close Button (Cross) - Top Right */}
                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute -top-12 right-0 sm:top-0 sm:right-0 z-[60] bg-black/60 hover:bg-red-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-red-500 group"
                                aria-label="Close video"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                            </button>

                            {/* Left Navigation Arrow - Positioned on the left edge */}
                            <button
                                type="button"
                                onClick={prevVideo}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-1/2 z-[60] bg-black/60 hover:bg-orange-500 text-white w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-orange-500 group shadow-xl"
                                aria-label="Previous video"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                            </button>

                            {/* Right Navigation Arrow - Positioned on the right edge */}
                            <button
                                type="button"
                                onClick={nextVideo}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-1/2 z-[60] bg-black/60 hover:bg-orange-500 text-white w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-orange-500 group shadow-xl"
                                aria-label="Next video"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                            </button>

                            {/* Video Container */}
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
                                {/* YouTube Video */}
                                {activeVideo.type === 'youtube' && activeVideo.videoId && (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                )}

                                {/* MP4 Self-Hosted Video */}
                                {activeVideo.type === 'mp4' && activeVideo.videoUrl && (
                                    <video
                                        ref={videoRef}
                                        src={activeVideo.videoUrl}
                                        controls
                                        autoPlay
                                        className="absolute inset-0 w-full h-full"
                                        poster={activeVideo.thumbnail}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>

                            {/* Video Info and Counter */}
                            <div className="mt-6 text-center text-white bg-black/50 py-4 px-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                    {activeVideo.title}
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {currentVideoIndex + 1} of {videos.length} videos
                                </p>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                    {activeVideo.description}
                                </p>
                            </div>

                            {/* Navigation Hint */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs hidden sm:block whitespace-nowrap">
                                ← →  Use arrow keys to navigate between videos
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <CTABanner />
        </>
    );
}