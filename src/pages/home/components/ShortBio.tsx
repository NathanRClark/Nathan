import { Link } from 'react-router-dom';

export default function ShortBio() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-6 bg-background-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground-950 font-semibold mb-6">
          About Nathan Clark
        </h2>
        <div className="w-16 h-0.5 bg-accent-500 mx-auto rounded-full mb-8" />
        <blockquote className="font-body text-base md:text-lg text-foreground-700 leading-relaxed italic">
          &ldquo;I am a Texas tenor and classical vocalist studying Vocal Performance at Baylor University in Waco,
          passionate about bringing classical music to life through expressive opera performances, choral music,
          and sacred repertoire. Available for concerts, church services, and events across Texas.&rdquo;
        </blockquote>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-2.5 bg-primary-500 hover:bg-primary-600 text-background-50 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Learn More
            <i className="ri-arrow-right-line" />
          </Link>
          <Link
            to="/media"
            className="inline-flex items-center gap-2 px-7 py-2.5 border border-accent-400 text-accent-600 hover:bg-accent-50 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Watch Performances
            <i className="ri-play-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
