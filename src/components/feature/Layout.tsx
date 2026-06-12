import { useLocation, Outlet } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />
      <main
        key={location.pathname}
        className="flex-1 page-enter"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
