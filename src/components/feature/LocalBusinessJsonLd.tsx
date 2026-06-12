export default function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Nathan Clark — Tenor',
    description:
      'Professional tenor based in Waco, Texas, offering vocal performance services for concerts, church services, opera productions, and special events across Texas including Houston and surrounding areas.',
    url: 'https://nathanclarktenor.com',
    areaServed: [
      {
        '@type': 'City',
        name: 'Waco',
      },
      {
        '@type': 'City',
        name: 'Houston',
      },
      {
        '@type': 'State',
        name: 'Texas',
      },
    ],
    serviceType: 'Vocal Performance / Tenor',
    priceRange: '$$',
    provider: {
      '@type': 'Person',
      name: 'Nathan Clark',
      affiliation: {
        '@type': 'Organization',
        name: 'Baylor University',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
