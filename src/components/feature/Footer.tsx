import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-background-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              to="/"
              className="text-xl font-heading font-semibold tracking-wide hover:text-accent-300 transition-colors"
            >
              Nathan Clark
            </Link>
            <p className="text-sm text-background-200 italic max-w-xs text-center md:text-left">
              Professional tenor based in Waco, Texas.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://youtube.com/@nathanclarktenor"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background-50/10 hover:bg-accent-500 hover:text-primary-900 text-background-200 transition-all duration-200 cursor-pointer"
              aria-label="Nathan Clark Tenor YouTube Channel"
              title="Nathan Clark on YouTube"
            >
              <i className="ri-youtube-fill text-lg" />
            </a>
            <a
              href="https://www.instagram.com/nathan.r.clark?igsh=NmtnaXA3M3VzeW9i&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background-50/10 hover:bg-accent-500 hover:text-primary-900 text-background-200 transition-all duration-200 cursor-pointer"
              aria-label="Nathan Clark Tenor Instagram Profile"
              title="Nathan Clark on Instagram"
            >
              <i className="ri-instagram-line text-lg" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background-50/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-xs text-background-400">
              &copy; {new Date().getFullYear()} Nathan Clark. All rights reserved.
            </p>
            <span className="hidden sm:inline text-background-50/20">|</span>
            <p className="text-xs text-background-400">
              Texas-based tenor &mdash; Available for performances in Waco, Houston, and across Texas
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="text-xs text-accent-400 hover:text-accent-300 transition-colors whitespace-nowrap"
            >
              Book a Performance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
