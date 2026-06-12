import { useState, useEffect, useRef } from 'react';

const featuredVideos = [
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
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const headerRef = useReveal();
  const card0 = useReveal();
  const card1 = useReveal();
  const card2 = useReveal();
  const cardRefs = [card0, card1, card2];

  return (
    <section className="py-14 md:py-20 px-4 md:px-6 bg-background-50">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 md:mb-14">
          <p className="text-accent-600 font-label text-xs tracking-[0.22em] uppercase mb-3">
            Recordings
          </p>
          <h2 className="font-heading text-2xl md:text-4xl text-foreground-950 font-semibold">
            Featured Performances
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredVideos.map((video, index) => (
            <div
              key={index}
              ref={cardRefs[index]}
              className="reveal"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <article
                className="group bg-background-50 rounded-lg overflow-hidden border border-background-200/70 hover:border-accent-300/50 transition-all duration-300 cursor-pointer h-full"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={`Nathan Clark tenor performing ${video.title}`}
                    title={video.title}
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
                  <h3 className="font-heading text-base md:text-lg text-foreground-900 font-medium leading-snug">
                    {video.title}
                  </h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
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
    </section>
  );
}
