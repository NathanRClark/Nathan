export interface EventData {
  name: string;
  date: string;
  venue: string;
  image?: string;
}

export default function EventsJsonLd({ events }: { events: EventData[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: events.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'MusicEvent',
        name: event.name,
        startDate: event.date,
        location: {
          '@type': 'MusicVenue',
          name: event.venue,
        },
        performer: {
          '@type': 'Person',
          name: 'Nathan Clark',
          jobTitle: 'Tenor',
        },
        ...(event.image ? { image: event.image } : {}),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
