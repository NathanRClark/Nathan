import { useState, useEffect, useRef } from 'react';
import PageMeta from '@/components/feature/PageMeta';

const mediaVideos = [
  {
    title: 'Der Neugierige — Franz Schubert',
    videoUrl: 'https://www.youtube.com/embed/WOFWArLhsqw',
    thumbnail:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/19861938e4efe38ddb42b7582a390bc4.jpeg',
  },
  {
    title: "The Boatmen\u2019s Dance — Copland",
    videoUrl: 'https://www.youtube.com/embed/kuN4cj0SwRM',
    thumbnail:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/25dbc016cad206d2b60e03f1f86823ba.jpeg',
  },
  {
    title: "Madrigal — Vincent d\u2019Indy",
    videoUrl: 'https://www.youtube.com/embed/nLmLhSt8wxc',
    thumbnail:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/e4abad67dd853b440211b1caec6fc340.jpeg',
  },
  {
    title: 'Keep the Whole World Singing',
    videoUrl: 'https://www.youtube.com/embed/bsxaqCL4txc',
    thumbnail:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/70f51b0b0bb14b1083220b7660a90b46.png',
  },
  {
    title: "I Don\u2019t Want to Set the World on Fire",
    videoUrl: 'https://www.youtube.com/embed/x6fc3Fq4ZE4',
    thumbnail:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/d1e42ba73acc630142cb9b2b16aef2da.png',
  },
];

// Split into rows of 3; last row gets centred if < 3 items
const COLS = 3;
function chunkVideos<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); }
      },
      { threshold: 0.10 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

interface VideoCardProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
  delay?: number;
}

function VideoCard({ title, thumbnail, onClick, delay = 0 }: VideoCardProps) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <article
        className="group bg-background-50 rounded-lg overflow-hidden border border-background-200/70 hover:border-accent-300/50 transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={`Nathan Clark tenor performing ${title}`}
            title={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-accent-500/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <i className="ri-play-fill text-2xl text-white ml-1" />
            </div>
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h2 className="font-heading text-base md:text-lg text-foreground-900 font-medium leading-snug">
            {title}
          </h2>
        </div>
      </article>
    </div>
  );
}

export default function Media() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const headerRef = useReveal();
  const rows = chunkVideos(mediaVideos, COLS);

  return (
    <div className="bg-background-50">
      <PageMeta
        title="Media | Nathan Clark Tenor | Performances & Recordings"
        description="Watch video performances by Nathan Clark, a Texas tenor and classical vocalist. Schubert lieder, Copland, French mélodies, and choral works recorded in Waco, Texas."
        canonical="/media"
      />

      <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
            <p className="text-accent-600 font-label text-xs tracking-[0.22em] uppercase mb-3">
              Recordings &amp; Performances
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground-950 font-semibold">
              Media
            </h1>
            <div className="mt-5 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
            <p className="mt-5 text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              Watch Nathan Clark&rsquo;s recorded performances — from Schubert lieder to contemporary choral works.
            </p>
          </div>

          {/* Grid: rows of 3 / last row centred */}
          <div className="space-y-6 md:space-y-8">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid gap-6 md:gap-8 ${
                  row.length === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : row.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto'
                    : 'grid-cols-1 max-w-md mx-auto'
                }`}
              >
                {row.map((video, colIdx) => (
                  <VideoCard
                    key={rowIdx * COLS + colIdx}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    onClick={() => setActiveVideo(video.videoUrl)}
                    delay={(colIdx) * 100}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Nathan Clark Tenor Performance Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
