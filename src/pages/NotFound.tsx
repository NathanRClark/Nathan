import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PageMeta from '@/components/feature/PageMeta';

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-background-50">
      <PageMeta
        title="Page Not Found | Nathan Clark Tenor"
        description="The page you are looking for could not be found. Navigate back to the homepage of Nathan Clark, professional tenor in Texas."
        noIndex
      />

      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-background-100 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold mt-6 text-foreground-900">Page Not Found</h2>
        <p className="mt-2 text-base text-foreground-500 font-mono">{location.pathname}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-7 py-2.5 bg-primary-500 hover:bg-primary-600 text-background-50 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
        >
          Back to Home
          <i className="ri-arrow-right-line" />
        </Link>
      </div>
    </div>
  );
}
