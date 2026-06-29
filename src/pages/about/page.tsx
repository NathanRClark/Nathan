import { useEffect, useRef } from 'react';
import PageMeta from '@/components/feature/PageMeta';
import PersonJsonLd from '@/components/feature/PersonJsonLd';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const heroRef = useReveal();
  const col1Ref = useReveal();
  const col2Ref = useReveal();

  return (
    <div className="bg-background-50">
      <PageMeta
        title="About Nathan Clark | Tenor & Classical Vocalist | Baylor University"
        description="Learn about Nathan Clark, a Texas-based tenor studying Vocal Performance at Baylor University. Specializing in opera, choral music, and sacred performance in Waco, Houston, and across Texas."
        canonical="/about"
      />
      <PersonJsonLd />

      {/* Page header */}
      <div className="pt-28 md:pt-36 pb-10 md:pb-14 px-4 md:px-6 text-center">
        <div ref={heroRef} className="reveal">
          <p className="text-accent-600 font-label text-xs tracking-[0.22em] uppercase mb-3">
            The Artist
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground-950 font-semibold">
            About Nathan Clark
          </h1>
          <div className="mt-5 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
        </div>
      </div>

      {/* Main two-column layout */}
      <section className="pb-20 md:pb-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">

            {/* LEFT — Profile image */}
            <div ref={col1Ref} className="reveal w-full lg:w-[45%] flex-shrink-0">
              <div className="rounded-lg overflow-hidden border border-background-200/70">
                <img
                  src="https://storage.readdy-site.link/project_files/67959995-f691-4285-a751-b7b6ce6b061a/d95b47a4-ce75-45f9-bf00-5014b69d821e_compressed_A7403629.webp"
                  alt="Nathan Clark classical tenor and vocal performance student at Baylor University in Waco Texas"
                  title="Nathan Clark — Classical Tenor & Vocalist"
                  className="w-full h-auto object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* RIGHT — Narrative bio */}
            <div ref={col2Ref} className="reveal w-full lg:w-[55%] space-y-6 text-foreground-700 leading-relaxed text-sm md:text-base">

              {/* Opening paragraph */}
              <p>
                Nathan Clark is a <strong className="text-foreground-900">Texas tenor</strong> and classical vocalist{' '}
                studying Vocal Performance at{' '}
                <strong className="text-foreground-900">Baylor University</strong> in Waco, Texas.
                Passionate about bringing classical music to life, Nathan specializes in opera, choral music,
                and sacred performance, and is available for concerts, church services, and events across the state.
              </p>

              <p>
                At Baylor, Nathan is a proud member of{' '}
                <strong className="text-foreground-900">Baylor A Cappella</strong>,{' '}
                <strong className="text-foreground-900">Chamber Singers</strong>, and{' '}
                <strong className="text-foreground-900">Baylor Opera</strong>. As a <strong className="text-foreground-900">Baylor tenor</strong>,{' '}
                he performed in the 2025&ndash;2026 season&rsquo;s recent productions of{' '}
                <em>Notes on Viardot</em> as an ensemble member and one of the Bandits, and{' '}
                <em>L&rsquo;Orfeo</em> as an ensemble member and part of the Pastori. Earlier this
                year, he performed with Baylor Opera at the{' '}
                <strong className="text-foreground-900">National Opera Conference in Boston</strong>{' '}
                and presented his research poster, representing the program on a national stage.
              </p>

              <p>
                Nathan studies under{' '}
                <strong className="text-foreground-900">Dr. Mark Diamond</strong> and also receives
                coachings from{' '}
                <strong className="text-foreground-900">Dr. Jeffrey Peterson</strong> and{' '}
                <strong className="text-foreground-900">Prof. Kathleen Kelly</strong>, refining his
                technique and expanding his vocal artistry as a classical vocalist.
              </p>

              <p>
                Beyond the university, Nathan serves in the music ministry at{' '}
                <strong className="text-foreground-900">St. Louis Catholic Church</strong> in Waco, where
                he continues to combine his love for music with his faith as a <strong className="text-foreground-900">choral tenor</strong> and
                cantor. One of his most transformative
                experiences was touring with the{' '}
                <strong className="text-foreground-900">St. Paul Choral Scholars</strong> across
                Austria, performing in historic cathedrals including{' '}
                <strong className="text-foreground-900">Salzburg Cathedral</strong> and{' '}
                <strong className="text-foreground-900">St. Stephen&rsquo;s Cathedral in Vienna</strong>,
                which deepened his appreciation for sacred music and its rich cultural heritage.
              </p>

              <p>
                When Nathan is not performing or practicing, you&rsquo;ll find him pursuing his
                passion for physical fitness, whether that&rsquo;s at the gym, engaging in sports,
                or challenging himself to reach new personal bests. He believes in the strong
                connection between physical wellness and vocal performance.
              </p>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
