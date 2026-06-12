import { useState, useCallback, useEffect, useRef } from 'react';
import PageMeta from '@/components/feature/PageMeta';

const galleryImages = [
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/03ef876581721b29bb293963a22dc25f.jpeg',
    alt: 'Nathan Clark tenor performing in Baylor Opera production',
    title: 'Nathan Clark Tenor Performance at Baylor Opera',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/c08107141c52d48d497682f5664fbefe.jpeg',
    alt: 'Nathan Clark classical vocalist in concert performance Texas',
    title: 'Nathan Clark Tenor Concert Performance',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/269d617f079d230d4f411c7a2d1d10a7.jpeg',
    alt: 'Nathan Clark tenor in Notes on Viardot opera at Baylor University',
    title: 'Nathan Clark Tenor in Notes on Viardot Opera',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/72ae55d848ed4d6e069c909231d0d727.jpeg',
    alt: 'Nathan Clark choral tenor performing with Baylor ensemble',
    title: 'Nathan Clark Choral Tenor Performance',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/d919af25165676ea3451ddc10ff2e5fb.jpeg',
    alt: 'Nathan Clark tenor cantor sacred music performance Texas',
    title: 'Nathan Clark Tenor Cantor Sacred Performance',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/bddd360e8c557ddb234aaa8a39c0f586.jpeg',
    alt: 'Nathan Clark Baylor tenor on stage during opera production',
    title: 'Nathan Clark Baylor Tenor Stage Performance',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/8d3c387dec8296fb404e5f48a6be9d71.jpeg',
    alt: 'Nathan Clark Texas tenor in formal concert attire',
    title: 'Nathan Clark Texas Tenor Formal Portrait',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/d062031731a8672e2254262a8c3c3505.jpeg',
    alt: 'Nathan Clark classical vocalist performing at Baylor event',
    title: 'Nathan Clark Classical Vocalist at Baylor',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/c7edff364a39e1ebe8753339863b53d5.jpeg',
    alt: 'Nathan Clark opera tenor performing in Waco Texas',
    title: 'Nathan Clark Opera Tenor Waco Texas',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/3867d3431ff87211a985b580eb636b8a.jpeg',
    alt: 'Nathan Clark tenor performing with choir in Houston Texas',
    title: 'Nathan Clark Tenor Choir Performance Houston',
  },
  {
    src: 'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/7e7eae8e0da4f216ebd1e145ebfc0874.jpeg',
    alt: 'Nathan Clark tenor classical music performance at Baylor',
    title: 'Nathan Clark Tenor Classical Music Performance',
  },
];

function GalleryImage({ image, index, onClick }: { image: typeof galleryImages[0]; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="break-inside-avoid rounded-lg overflow-hidden border border-background-200/70 hover:border-accent-300/50 transition-all duration-300 cursor-pointer group reveal"
      style={{ animationDelay: `${(index % 3) * 0.1}s` }}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, goNext, goPrev]);

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

  return (
    <div className="bg-background-50">
      <PageMeta
        title="Gallery | Nathan Clark Tenor | Performance Photos"
        description="Photo gallery of Nathan Clark, a Texas tenor and classical vocalist. Images from opera productions, choral concerts, and sacred music performances at Baylor University and across Texas."
        canonical="/gallery"
      />

      <section className="py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
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
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 md:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-line text-xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <i className="ri-arrow-right-line text-xl" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
