import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HERO_IMAGE_DESKTOP =
  'https://storage.readdy-site.link/project_files/67959995-f691-4285-a751-b7b6ce6b061a/d948e9b2-c26c-4b9b-a5ba-bcbf6d2b1d4e_correct-image.jpeg';

const HERO_IMAGE_MOBILE =
  'https://storage.readdy-site.link/project_files/67959995-f691-4285-a751-b7b6ce6b061a/4ac5817d-530a-4620-8465-53aaf2756ff7_A7404065.jpeg';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      className="relative w-full"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={
          isMobile
            ? {
                backgroundImage: `url(${HERO_IMAGE_MOBILE})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
              }
            : {
                backgroundImage: `url(${HERO_IMAGE_DESKTOP})`,
                backgroundAttachment: 'fixed',
                backgroundSize: '155% auto',
                backgroundPosition: '22% 8%',
                backgroundRepeat: 'no-repeat',
              }
        }
        aria-hidden="true"
      />

      {/* Dark overlay — uniform so text pops consistently */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4 md:px-6">
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-semibold tracking-wide leading-tight animate-fade-up delay-200"
          style={{ opacity: 0 }}
        >
          Nathan Clark
        </h1>
        <p
          className="mt-4 md:mt-5 text-base md:text-xl text-white/70 font-semibold tracking-widest uppercase max-w-lg mx-auto animate-fade-up delay-300"
          style={{ opacity: 0 }}
        >
          Tenor&nbsp;&nbsp;|&nbsp;&nbsp;Classical Vocalist&nbsp;&nbsp;|&nbsp;&nbsp;Performer
        </p>
        <div className="mt-10 animate-fade-up delay-400" style={{ opacity: 0 }}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-3.5 bg-accent-500 hover:bg-accent-400 text-primary-950 font-medium text-sm md:text-base rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Book Now
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>

      {/* Subtle fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background-50 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
    </section>
  );
}
