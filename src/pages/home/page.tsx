import HeroSection from './components/HeroSection';
import FeaturedVideos from './components/FeaturedVideos';
import ShortBio from './components/ShortBio';
import PageMeta from '@/components/feature/PageMeta';
import PersonJsonLd from '@/components/feature/PersonJsonLd';
import LocalBusinessJsonLd from '@/components/feature/LocalBusinessJsonLd';

export default function Home() {
  return (
    <>
      <PageMeta
        title="Nathan Clark | Tenor in Texas | Baylor University Vocal Performance"
        description="Nathan Clark is a professional tenor based in Texas, specializing in opera, choral music, and sacred performance. A Baylor University vocalist available for concerts, church services, and events in Waco, Houston, and across Texas."
        ogImage="https://storage.readdy-site.link/project_files/67959995-f691-4285-a751-b7b6ce6b061a/d948e9b2-c26c-4b9b-a5ba-bcbf6d2b1d4e_correct-image.jpeg"
      />
      <PersonJsonLd />
      <LocalBusinessJsonLd />
      <HeroSection />
      <FeaturedVideos />
      <ShortBio />
    </>
  );
}
