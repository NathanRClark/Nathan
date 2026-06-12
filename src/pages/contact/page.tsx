import PageMeta from '@/components/feature/PageMeta';

export default function Contact() {
  return (
    <div className="bg-background-50">
      <PageMeta
        title="Contact | Nathan Clark Tenor | Book a Performance in Texas"
        description="Book Nathan Clark, a professional tenor in Texas. Available for opera performances, church services, choral concerts, and events in Waco, Houston, and across Texas. Contact for bookings and inquiries."
        canonical="/contact"
      />

      <section className="pt-28 md:pt-36 pb-24 md:pb-32 px-4 md:px-6 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          {/* Top accent line — fades in first */}
          <div className="w-12 h-0.5 bg-accent-500 mx-auto mb-10 rounded-full animate-fade-in" />

          {/* Main heading — slides up */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-foreground-950 font-semibold leading-tight mb-6 animate-fade-up">
            Let&rsquo;s Collaborate
          </h1>

          {/* Subtext — slides up with slight delay */}
          <p className="font-body text-base sm:text-lg text-foreground-600 leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up delay-150">
            Available for operatic performances, concert bookings, church services,
            and collaborations across Texas.
          </p>

          {/* Divider — fades in */}
          <div className="w-full max-w-xs mx-auto h-px bg-background-200 mb-10 animate-fade-in delay-300" />

          {/* Email section — slides up */}
          <div className="animate-fade-up delay-400">
            <p className="font-label text-xs tracking-[0.18em] uppercase text-foreground-400 mb-3">
              Get in touch
            </p>
            <a
              href="mailto:nrossclark@gmail.com"
              className="inline-flex items-center gap-3 font-heading text-xl sm:text-2xl md:text-3xl hover:opacity-80 transition-all duration-300 cursor-pointer group"
              style={{ color: '#c9a55c' }}
            >
              <i className="ri-mail-line text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110" />
              nrossclark@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
