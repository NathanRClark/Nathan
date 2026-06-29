import { useState, useCallback, useEffect, useRef } from 'react';
import PageMeta from '@/components/feature/PageMeta';
import { useReveal } from '@/hooks/useReveal';

const galleryImages = [
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/03ef876581721b29bb293963a22dc25f.jpeg',
    alt: 'Nathan Clark tenor performing in Baylor Opera production',
    title: 'Nathan Clark Tenor Performance at Baylor Opera',
    orientation: 'landscape' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/c08107141c52d48d497682f5664fbefe.jpeg',
    alt: 'Nathan Clark classical vocalist in concert performance Texas',
    title: 'Nathan Clark Tenor Concert Performance',
    orientation: 'landscape' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/269d617f079d230d4f411c7a2d1d10a7.jpeg',
    alt: 'Nathan Clark tenor in Notes on Viardot opera at Baylor University',
    title: 'Nathan Clark Tenor in Notes on Viardot Opera',
    orientation: 'portrait' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/72ae55d848ed4d6e069c909231d0d727.jpeg',
    alt: 'Nathan Clark choral tenor performing with Baylor ensemble',
    title: 'Nathan Clark Choral Tenor Performance',
    orientation: 'landscape' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/d919af25165676ea3451ddc10ff2e5fb.jpeg',
    alt: 'Nathan Clark tenor cantor sacred music performance Texas',
    title: 'Nathan Clark Tenor Cantor Sacred Performance',
    orientation: 'landscape' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/bddd360e8c557ddb234aaa8a39c0f586.jpeg',
    alt: 'Nathan Clark Baylor tenor on stage during opera production',
    title: 'Nathan Clark Baylor Tenor Stage Performance',
    orientation: 'portrait' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/8d3c387dec8296fb404e5f48a6be9d71.jpeg',
    alt: 'Nathan Clark Texas tenor in formal concert attire',
    title: 'Nathan Clark Texas Tenor Formal Portrait',
    orientation: 'portrait' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/d062031731a8672e2254262a8c3c3505.jpeg',
    alt: 'Nathan Clark classical vocalist performing at Baylor event',
    title: 'Nathan Clark Classical Vocalist at Baylor',
    orientation: 'landscape' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/c7edff364a39e1ebe8753339863b53d5.jpeg',
    alt: 'Nathan Clark opera tenor performing in Waco Texas',
    title: 'Nathan Clark Opera Tenor Waco Texas',
    orientation: 'landscape' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/3867d3431ff87211a985b580eb636b8a.jpeg',
    alt: 'Nathan Clark tenor performing with choir in Houston Texas',
    title: 'Nathan Clark Tenor Choir Performance Houston',
    orientation: 'portrait' as const,
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/7e7eae8e0da4f216ebd1e145ebfc0874.jpeg',
    alt: 'Nathan Clark tenor classical music performance at Baylor',
    title: 'Nathan Clark Tenor Classical Music Performance',
    orientation: 'landscape' as const,
  },
];

function GalleryImage({ image, index, eager, onClick }: { image: typeof galleryImages[0]; index: number; eager: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const isPortrait = image.orientation === 'portrait';

  useEffect(() => {
    const el = ref.current;
    if (!el || revealedRef.current) return;

    const rect = el.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight + 40 && rect.bottom > 0;

    if (isInView) {
      el.classList.add('visible');
      revealedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealedRef.current) {
            entry.target.classList.add('visible');
            revealedRef.current = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="break-inside-avoid rounded-lg overflow-hidden border border-background-200/70 hover:border-accent-300/50 transition-all duration-300 cursor-pointer group reveal"
      style={{ animationDelay: `${(index % 3) * 0.08}s` }}
      onClick={onClick}
    >
      <div className={`relative ${isPortrait ? 'aspect-[4/5]' : 'aspect-[3/2]'} bg-background-200/50`}>
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-background-200/60" />
        )}
        <img
          src={image.src}
          alt={image.alt}
          title={image.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState<number | null>(null);
  const displayIndexRef = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const headerRef = useReveal();

  // Keep ref in sync so the preload effect can read it without being a dep
  displayIndexRef.current = displayIndex;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setDisplayIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % galleryImages.length;
    });
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setDisplayIndex(null);
  }, []);

  // Preload the next image before swapping displayIndex → no skeleton flash
  useEffect(() => {
    if (lightboxIndex === null || lightboxIndex === displayIndexRef.current) return;

    const img = new Image();
    img.src = galleryImages[lightboxIndex].src;

    const handleLoad = () => {
      setDisplayIndex(lightboxIndex);
    };

    const handleError = () => {
      // Even on error, show the slot so the user isn't stuck
      setDisplayIndex(lightboxIndex);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, goNext, goPrev, closeLightbox]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartX.current === null) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (deltaY > 80 && absDeltaY > absDeltaX) {
      closeLightbox();
    } else if (deltaX < -60 && absDeltaX > absDeltaY) {
      goNext();
    } else if (deltaX > 60 && absDeltaX > absDeltaY) {
      goPrev();
    }

    touchStartY.current = null;
    touchStartX.current = null;
  }, [closeLightbox, goNext, goPrev]);

  return (
    <div className="bg-background-50">
      <PageMeta
        title="Gallery | Nathan Clark Tenor | Performance Photos"
        description="Photo gallery of Nathan Clark, a Texas tenor and classical vocalist. Images from opera productions, choral concerts, and sacred music performances at Baylor University and across Texas."
        canonical="/gallery"
      />

      <section className="pt-20 md:pt-28 pb-14 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
            <p className="text-accent-600 font-label text-xs tracking-[0.22em] uppercase mb-3">
              Moments
            </p>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground-950 font-semibold">
              Gallery
            </h1>
            <div className="mt-4 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
            <p className="mt-5 text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Moments from the stage, studio, and beyond — Nathan Clark&rsquo;s journey as a Texas tenor and classical vocalist at Baylor University.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                image={image}
                index={index}
                eager={index < 6}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 touch-none"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop exit button — large, ringed, hard to miss */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 ring-1 ring-white/25 hover:ring-white/40 text-white transition-all cursor-pointer z-20"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-xl md:text-2xl" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 md:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-line text-xl" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <i className="ri-arrow-right-line text-xl" />
          </button>

          {/* Image — fades in when displayIndex updates after preload */}
          {displayIndex !== null && (
            <div
              key={`lightbox-${displayIndex}`}
              className="relative max-w-5xl max-h-[80vh] w-full h-full animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[displayIndex].src}
                alt={galleryImages[displayIndex].alt}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </div>
          )}

          {/* Counter + mobile close */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-white/70 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
            <span className="text-white/40 text-xs md:hidden">
              Swipe down to close
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="md:hidden px-5 py-2 bg-white/15 hover:bg-white/30 text-white text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
