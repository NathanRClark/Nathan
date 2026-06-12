import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

export default function PageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
}: PageMetaProps) {
  useEffect(() => {
    const baseUrl = 'https://nathanclarktenor.com';

    // Title
    document.title = title;

    // Description
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', description);

    // Robots
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute('content', noIndex ? 'noindex, follow' : 'index, follow');
    }

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical ? `${baseUrl}${canonical}` : baseUrl;

    // OG
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) ogTypeTag.setAttribute('content', ogType);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical ? `${baseUrl}${canonical}` : baseUrl);

    if (ogImage) {
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) ogImg.setAttribute('content', ogImage);
    }

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    if (ogImage) {
      const twImg = document.querySelector('meta[name="twitter:image"]');
      if (twImg) twImg.setAttribute('content', ogImage);
    }
  }, [title, description, canonical, ogImage, ogType, noIndex]);

  return null;
}
