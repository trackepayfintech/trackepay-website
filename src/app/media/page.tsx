"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";
import CTABanner from "@/components/shared/CTABanner";

const galleryImages = [
    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/odisha-police2.webp",
        title: "Khordha Police Mitra",
    },

    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-1.webp",
        title: "Khordha Police Mitra",
    },

    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-2.webp",
        title: "Khordha Police Mitra",
    },

    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-3.webp",
        title: "Khordha Police Mitra",
    },

    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-4.webp",
        title: "Khordha Police Mitra",
    },

    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/image-5.webp",
        title: "Khordha Police Mitra",
    },
    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp",
        title: "Sarai-2.O Review",
    },
    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review.webp",
        title: "Sarai-2.O Review",
    },
    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review3.webp",
        title: "Sarai-2.O Review",
    },
    {
        image:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review-4.webp",
        title: "Sarai-2.O Review",
    },
];

const videos = [
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/odisha-police.webp",
        videoId: "0bZ76LAe1Ds",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review.webp",
        videoId: "Rnc32bdJBDI",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp",
        videoId: "Rfo29XDRMh0",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review-4.webp",
        videoId: "wYnztAu1SlA",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review3.webp",
        videoId: "apqaUFm2t-w",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp",
        videoId: "bJglzuaRDo",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review-4.webp",
        videoId: "ugkS_-zlcX8",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp",
        videoId: "LiW1QAyPnJY",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review3.webp",
        videoId: "u6YqFlea5jk",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review-4.webp",
        videoId: "H56kGke55PE",
    },
    {
        title: "Smart Policing Platform",
        thumbnail:
            "https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/sarai-2.O-review2.webp",
        videoId: "HjyZJbxMs90",
    },
];

export default function MediaClient() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

            {/* Image Gallery */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800">
                                Image Gallery
                            </h2>

                            <p className="text-slate-600 mt-2">
                                Project images and media highlights.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-white"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-slate-800">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-slate-800">
                            Video Gallery
                        </h2>

                        <p className="text-slate-600 mt-2">
                            Watch our featured product and project videos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {videos.map((video, index) => (
                            <button
                                type="button"
                                key={index}
                                onClick={() => setActiveVideo(video.videoId)}
                                className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-white text-left !cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center ">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ">
                                            <Play className="w-7 h-7 text-orange-500 fill-orange-500 ml-1  " />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-slate-800">
                                        {video.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                    
                    {/* Modal Container */}
                    <div className="relative w-full max-w-5xl">

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 z-[60] bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 "
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video */}
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}

            <CTABanner />
        </>
    );
}