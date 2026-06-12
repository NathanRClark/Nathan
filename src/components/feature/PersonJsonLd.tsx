interface PersonSchemaProps {
  name?: string;
  jobTitle?: string;
  affiliation?: string;
  sameAs?: string[];
  image?: string;
}

export default function PersonJsonLd({
  name = 'Nathan Clark',
  jobTitle = 'Tenor / Classical Vocalist',
  affiliation = 'Baylor University',
  sameAs = [
    'https://youtube.com/@nathanclarktenor',
    'https://www.instagram.com/nathan.r.clark',
  ],
  image = 'https://storage.readdy-site.link/project_files/67959995-f691-4285-a751-b7b6ce6b061a/d948e9b2-c26c-4b9b-a5ba-bcbf6d2b1d4e_correct-image.jpeg',
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    affiliation: {
      '@type': 'Organization',
      name: affiliation,
    },
    sameAs,
    image,
    description:
      'Professional tenor specializing in opera, choral music, and sacred performance. Baylor University vocal performance student based in Waco, Texas, serving Houston and across Texas.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
