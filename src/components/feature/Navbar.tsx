import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Performances', path: '/performances' },
  { label: 'Media', path: '/media' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-background-50/95 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4 max-w-7xl">
        <a
          href="/"
          onClick={handleLogoClick}
          className={`text-xl md:text-2xl font-heading font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 cursor-pointer ${
            isTransparent ? 'text-white' : 'text-foreground-950'
          }`}
        >
          Nathan Clark
        </a>

        <ul className={`hidden md:flex items-center gap-1`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                    isTransparent
                      ? isActive
                        ? 'text-accent-300'
                        : 'text-white/80 hover:text-white'
                      : isActive
                        ? 'text-primary-600'
                        : 'text-foreground-700 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                  {isActive && !isTransparent && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent-500 rounded-full" />
                  )}
                  {isActive && isTransparent && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent-400 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
            isTransparent ? 'text-white' : 'text-foreground-800'
          }`}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-foreground-700 hover:bg-background-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
