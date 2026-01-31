import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
    src?: string;
    youtubeUrl?: string;
    description?: string;
    // TinaCMS might return other fields, but we only strictly need src and description
    [key: string]: any;
}

interface ProjectLightboxProps {
    images: ProjectImage[];
}

const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle opening via custom event
    useEffect(() => {
        const handleOpen = (event: CustomEvent<{ index: number }>) => {
            const { index } = event.detail;
            if (index >= 0 && index < images.length) {
                setCurrentIndex(index);
                setIsOpen(true);
                // Prevent body scroll when modal is open
                document.body.style.overflow = 'hidden';
            }
        };

        window.addEventListener('open-project-lightbox' as any, handleOpen as any);
        return () => {
            window.removeEventListener('open-project-lightbox' as any, handleOpen as any);
            // Ensure scrolling is restored if component unmounts while open
            document.body.style.overflow = '';
        };
    }, [images.length]);

    const closeLightbox = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = '';
    }, []);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, closeLightbox, goToNext, goToPrev]);

    // Swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: goToNext,
        onSwipedRight: goToPrev,
        preventScrollOnSwipe: true,
        trackMouse: true, // Allow mouse swiping too
    });

    if (!images || images.length === 0) return null;

    if (!isOpen) return null;

    const currentImage = images[currentIndex];
    const videoId = currentImage.youtubeUrl ? getYouTubeId(currentImage.youtubeUrl) : null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox} // Close when clicking backdrop
        >
            {/* Close Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                }}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50 rounded-full hover:bg-white/10"
                aria-label="Close lightbox"
            >
                <X size={32} />
            </button>

            {/* Navigation Buttons (Left) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                }}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50 rounded-full hover:bg-white/10"
                aria-label="Previous image"
            >
                <ChevronLeft size={48} />
            </button>

            {/* Navigation Buttons (Right) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                }}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50 rounded-full hover:bg-white/10"
                aria-label="Next image"
            >
                <ChevronRight size={48} />
            </button>

            {/* Image Container */}
            <div
                {...swipeHandlers}
                className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-12"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area (swipe area)
            >
                <div
                    className="relative w-full max-w-full max-h-full flex flex-col items-center justify-center"
                >
                    {videoId ? (
                        <div className="w-full max-w-5xl aspect-video bg-black rounded shadow-2xl overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img
                            src={currentImage.src}
                            alt={currentImage.description || `Project image ${currentIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                            draggable={false}
                        />
                    )}

                    {/* Description */}
                    {(currentImage.description) && (
                        <div
                            className="mt-4 text-center max-w-prose"
                        >
                            <p className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                                {currentImage.description}
                            </p>
                        </div>
                    )}

                    {/* Counter */}
                    <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            </div>
        </div>
    );
};
