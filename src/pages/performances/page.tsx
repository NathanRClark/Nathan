import PageMeta from '@/components/feature/PageMeta';
import EventsJsonLd from '@/components/feature/EventsJsonLd';
import type { EventData } from '@/components/feature/EventsJsonLd';

interface Performance {
  image: string;
  title: string;
  role?: string;
  date: string;
  venue: string;
  imagePosition?: string;
}

const performances: Performance[] = [
  {
    image:
      'https://storage.readdy-site.link/project_files/67959995-f691-4285-a751-b7b6ce6b061a/de0492a9-92fd-451d-989e-e0b1d8672d77_ED3BAD18-3D3A-4300-9EF4-8F63D33506FE.jpeg',
    title: "L'Orfeo",
    date: '2026-04',
    venue: 'Roxy Grove Hall, Baylor University, Waco, Texas',
    imagePosition: '50% 18%',
  },
  {
    image:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/269d617f079d230d4f411c7a2d1d10a7.jpeg',
    title: 'Notes on Viardot Opera',
    date: '2024-11-07',
    venue: 'Jones Theatre, Baylor University, Waco, Texas',
  },
  {
    image:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/13b71d7dba9f0d0dfbde09cb0ad1e4bf.jpeg',
    title: 'Earth Symphony at National ACDA',
    date: '2024-03-22',
    venue: 'Meyerson Concert Hall, Dallas, Texas',
  },
  {
    image:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/4da89f4d41e0d5c9c5ca4c2b4d834327.jpeg',
    title: 'Good Friday Passion Narrative of St. John Cantor',
    date: '2024-04-18',
    venue: "St. Peter's Catholic Student Center, Waco, Texas",
  },
  {
    image:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/26607961b38f84f0878643ea24ae2a33.jpeg',
    title: 'Armonía Christmas Concert',
    date: '2024-12-21',
    venue: "St. Paul's Methodist Church, Houston, Texas",
  },
  {
    image:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/cc22d16473b6b8b38904d6a6bcf6ba27.jpeg',
    title: 'A Baylor Christmas',
    date: '2024-12',
    venue: 'Jones Concert Hall, Baylor University, Waco, Texas',
  },
  {
    image:
      'https://static.readdy.ai/image/353737c481bf505afea377ed11fab8ca/e4c2a131d5f9facc9246b45e8dbf26e9.jpeg',
    title: 'St. Paul Choral Scholars Concert',
    date: '2024-07-16',
    venue: "St. Stephen's Cathedral, Vienna, Austria",
  },
];

const eventData: EventData[] = performances.map((p) => ({
  name: p.title,
  date: p.date,
  venue: p.venue,
  image: p.image,
}));

function displayDate(date: string) {
  if (date === '2026-04') return 'April 2026';
  if (date === '2024-11-07') return 'November 7, 2024';
  if (date === '2024-03-22') return 'March 22, 2024';
  if (date === '2024-04-18') return 'April 18, 2024';
  if (date === '2024-12-21') return 'December 21, 2024';
  if (date === '2024-12') return 'December 2024 and 2025';
  if (date === '2024-07-16') return 'July 16, 2024';
  return date;
}

export default function Performances() {
  return (
    <div className="bg-background-50">
      <PageMeta
        title="Performances | Nathan Clark Tenor | Opera, Sacred Music & Choral"
        description="Explore performances by Nathan Clark, a Texas tenor and classical vocalist. Opera productions, sacred music, choral concerts, and cantor services in Waco, Houston, and across Texas."
        canonical="/performances"
      />
      <EventsJsonLd events={eventData} />

      <section className="py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent-600 font-label text-xs tracking-[0.22em] uppercase mb-3">
              Past &amp; Recent
            </p>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground-950 font-semibold">
              Performances
            </h1>
            <div className="mt-4 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
            <p className="mt-5 text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A selection of performances by Nathan Clark across opera, sacred music, choral works, and concert repertoire — in Waco, Houston, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {performances.map((item, index) => (
              <article
                key={index}
                className="group bg-background-50 rounded-lg overflow-hidden border border-background-200/70 hover:border-accent-300/50 transition-all duration-300"
              >
                {item.image ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Nathan Clark tenor performing in ${item.title} at ${item.venue}`}
                      title={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={item.imagePosition ? { objectPosition: item.imagePosition } : { objectPosition: 'top' }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-background-100 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-100">
                      <i className="ri-music-2-line text-2xl text-accent-600" />
                    </div>
                    <span className="text-xs text-foreground-400 tracking-wide uppercase">Photo Coming Soon</span>
                  </div>
                )}
                <div className="p-4 md:p-5">
                  <h2 className="font-heading text-base md:text-lg text-foreground-900 font-medium leading-snug">
                    {item.title}
                  </h2>
                  {item.role && (
                    <p className="mt-1 text-xs text-accent-600 font-medium tracking-wide">{item.role}</p>
                  )}
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-foreground-500">
                    <span className="flex items-center gap-1.5">
                      <i className="ri-calendar-line text-accent-500" />
                      {displayDate(item.date)}
                    </span>
                    {item.venue && (
                      <span className="flex items-center gap-1.5">
                        <i className="ri-map-pin-line text-accent-500" />
                        {item.venue}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
