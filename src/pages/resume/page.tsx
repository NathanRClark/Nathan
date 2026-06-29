import PageMeta from '@/components/feature/PageMeta';
import { useReveal } from '@/hooks/useReveal';

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-lg md:text-xl text-foreground-900 font-semibold mb-5 tracking-wide">
      {children}
    </h2>
  );
}

function TimelineDot() {
  return (
    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent-500" />
  );
}

function SectionDivider() {
  return <hr className="border-background-200/70" />;
}

export default function Resume() {
  const headerRef = useReveal();
  const summaryRef = useReveal();
  const skillsRef = useReveal();
  const experienceRef = useReveal();
  const awardsRef = useReveal();
  const educationRef = useReveal();

  const exp1Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  const exp2Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  const exp3Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  const exp4Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  const exp5Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  const exp6Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  const exp7Ref = useReveal({ threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  const skills = [
    'Collaboration',
    'Analytical Thinking',
    'Problem Solving',
    'Reading Sheet Music',
    'Leadership',
    'Confidence',
    'Music Theory Knowledge',
    'Taking Cues and Direction',
  ];

  return (
    <div className="bg-background-50">
      <PageMeta
        title="Resume | Nathan Clark Tenor | Vocal Performance & Experience"
        description="Professional resume of Nathan Clark, a Texas tenor and classical vocalist. Baylor University vocal performance, opera experience, choral work, cantor services, and awards in Waco, Houston, and across Texas."
        canonical="/resume"
      />

      <section className="pt-20 md:pt-28 pb-14 md:pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
          {/* Header */}
          <div ref={headerRef} className="reveal text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground-950 font-semibold">
              Nathan Clark
            </h1>
            <p className="mt-2 text-foreground-500 text-sm">
              Tenor &amp; Classical Vocalist &mdash; Waco, Texas
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
          </div>

          {/* ── SUMMARY ── */}
          <section ref={summaryRef} className="reveal text-center">
            <SectionHeader>SUMMARY</SectionHeader>
            <p className="text-foreground-700 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              Gifted Texas tenor and dedicated undergraduate student. Dedicated classical vocalist
              willing to collaborate with other professionals or perform in solo roles.
              Remains focused and poised in fast-paced settings.
            </p>
          </section>

          <SectionDivider />

          {/* ── KEY SKILLS ── */}
          <section ref={skillsRef} className="reveal">
            <SectionHeader>KEY SKILLS</SectionHeader>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden flex items-center gap-2.5 text-sm text-foreground-700 bg-background-100/70 rounded-lg px-4 py-2.5 cursor-default transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="absolute inset-0 bg-accent-500/85 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg" />
                  <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0 transition-colors duration-300 group-hover:bg-background-50" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-950">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          <SectionDivider />

          {/* ── EXPERIENCE ── */}
          <section ref={experienceRef} className="reveal">
            <SectionHeader>EXPERIENCE</SectionHeader>

            <div className="space-y-10">
              {/* Baylor */}
              <div ref={exp1Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  Vocal Performance Major
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  Baylor University, Waco, Texas &mdash; August 2024 &ndash; Present
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Studying voice under Dr. Mark Diamond, with additional coachings
                    from Dr. Jeffrey Peterson and Prof. Kathleen Kelly
                  </li>
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Member of Baylor A Cappella, Chamber Singers, and Baylor Opera
                  </li>
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-2 flex-shrink-0" />
                    <div className="leading-snug">
                      <div>
                        Performed in Baylor Opera&rsquo;s{' '}
                        <em className="font-medium text-foreground-800 not-italic">Notes on Viardot</em>
                      </div>
                      <div className="text-foreground-500 mt-0.5">
                        as an ensemble member and one of the Bandits
                      </div>
                    </div>
                  </li>
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-2 flex-shrink-0" />
                    <div className="leading-snug">
                      <div>
                        Performed in Baylor Opera&rsquo;s{' '}
                        <em className="font-medium text-foreground-800 not-italic">L&rsquo;Orfeo</em>
                      </div>
                      <div className="text-foreground-500 mt-0.5">
                        as ensemble member and part of the Pastori
                      </div>
                    </div>
                  </li>
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Competed at the finals in the National Opera Association&apos;s
                    Collegiate Opera Scenes Competition and presented a research poster
                    on high school Young Artist Programs (YAPs) and their role in
                    preparing future opera performers
                  </li>
                </ul>
              </div>

              {/* Gilbert & Sullivan */}
              <div ref={exp2Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  Houston Gilbert &amp; Sullivan Society &mdash; <em>The Gondoliers</em>
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  Houston, Texas &mdash; July 2026
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Men&apos;s Chorus; Francesco (Cover)
                  </li>
                </ul>
              </div>

              {/* St Louis */}
              <div ref={exp3Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  Choral Tenor &amp; Cantor
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  St. Louis Catholic Church, Waco, Texas &mdash; 2025 &ndash; Present
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Serve as tenor in the church choir, performing for liturgies and
                    weddings
                  </li>
                </ul>
              </div>

              {/* St Peter */}
              <div ref={exp4Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  Choral Tenor &amp; Section Leader
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  St. Peter&apos;s Catholic Student Center, Waco, Texas &mdash; 2024 &ndash; 2025
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Served as cantor and tenor section leader, performing at liturgies
                    and ministry events
                  </li>
                </ul>
              </div>

              {/* HGO */}
              <div ref={exp5Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  Member of Bauer Family HS Voice Studio
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  Houston Grand Opera, Houston, Texas &mdash; August 2023
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Attended monthly masterclasses with professional musicians to
                    develop skills and prepare for college
                  </li>
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Took private voice lessons twice a month with Mr. Hector Vasquez
                    (University of Houston Voice Faculty)
                  </li>
                </ul>
              </div>

              {/* St Paul UMC */}
              <div ref={exp6Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  Choral Singer
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  St. Paul&apos;s United Methodist Church, Houston, Texas &mdash; 2023 &ndash; 2024
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Maintained a professional attitude while performing for services and
                    concerts
                  </li>
                </ul>
              </div>

              {/* TMEA */}
              <div ref={exp7Ref} className="reveal relative pl-5 sm:pl-6 border-l-2 border-accent-200 rounded-r-lg">
                <TimelineDot />
                <h3 className="font-heading text-sm sm:text-base text-foreground-900 font-semibold">
                  TMEA All-State Member
                </h3>
                <p className="text-xs sm:text-sm text-foreground-600">
                  Texas Music Educators Association &mdash; February 2023, 2024
                </p>
                <ul className="mt-2.5 sm:mt-3 space-y-3">
                  <li className="text-xs sm:text-sm text-foreground-700 flex items-start gap-3 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-400 mt-1.5 flex-shrink-0" />
                    Performed at the All-State level under the direction of Eugene
                    Rogers and Michael Barrett
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* Awards + Education */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <section ref={awardsRef} className="reveal">
                <SectionHeader>AWARDS</SectionHeader>
                <ul className="space-y-3">
                  <li className="text-sm text-foreground-700 flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                    Bay Area Chorus Ralph &amp; Richard Parr Music Excellence Winner (2024)
                  </li>
                  <li className="text-sm text-foreground-700 flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                    2nd Place &ndash; HGO Bauer Family High School Voice Studio Recital
                    (2024)
                  </li>
                  <li className="text-sm text-foreground-700 flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                    2nd Place &ndash; Houston Masterworks Chorus Young Singer Competition
                    (2023)
                  </li>
                </ul>
              </section>
            </div>

            <div className="w-full lg:w-1/2">
              <section ref={educationRef} className="reveal">
                <SectionHeader>EDUCATION</SectionHeader>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-accent-200 rounded-r-lg">
                    <TimelineDot />
                    <h3 className="font-heading text-base text-foreground-900 font-semibold">
                      Baylor University
                    </h3>
                    <p className="text-sm text-foreground-600">Waco, Texas &mdash; Current Student</p>
                    <p className="text-sm text-foreground-700 mt-1">
                      Dean&apos;s List (all semesters)
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-accent-200 rounded-r-lg">
                    <TimelineDot />
                    <h3 className="font-heading text-base text-foreground-900 font-semibold">
                      Clear Creek High School
                    </h3>
                    <p className="text-sm text-foreground-600">League City, Texas</p>
                    <p className="text-sm text-foreground-700 mt-1">
                      4.0 GPA, Top 4% of Class
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
