// import { VerticalCard } from '@/components/VerticalCard';
// import { RecentItem } from '@/components/RecentItem';
// import Image from 'next/image';
// import Link from 'next/link';
// import { blurDataURL } from '@/lib/blur';

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className='relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] overflow-hidden border-b border-brand-rule'>
//         <div className='flex flex-col justify-center p-8 md:p-16 lg:p-[80px] lg:px-[60px] z-10'>
//           <div className='text-[11px] font-semibold tracking-ultra-wide uppercase text-brand-light mb-[22px]'>
//             Washington, D.C.
//           </div>
//           <h1 className='font-serif text-52px md:text-76px font-light leading-0.95 mb-[28px] tracking-tightest text-brand-charcoal'>
//             Devan
//             <br />
//             Patel
//           </h1>
//           <p className='font-serif text-20px md:text-28px font-normal leading-1.1 text-brand-mid mb-[44px] max-w-460px'>
//             Lawyer. Strategist.
//             <br />
//             <span className='not-italic text-brand-charcoal font-medium tracking-tight'>
//               The bridge between Washington,
//               <br />
//               Rome, and Silicon Valley.
//             </span>
//           </p>
//           <div className='border-t border-brand-rule pt-[28px] flex flex-col gap-2'>
//             <div className='text-[11px] tracking-wider uppercase text-brand-light'>
//               <strong className='text-brand-mid font-medium'>Counsel</strong> ·
//               Allegiance Strategies
//             </div>
//             <div className='text-[11px] tracking-wider uppercase text-brand-light'>
//               <strong className='text-brand-mid font-medium'>Professor</strong>{' '}
//               · Notre Dame Law School
//             </div>
//             <div className='text-[11px] tracking-wider uppercase text-brand-light'>
//               <strong className='text-brand-mid font-medium'>AI Ethics</strong>{' '}
//               · American Security Fund
//             </div>
//           </div>
//         </div>

//         <div className='relative min-h-[500px] lg:min-h-full'>
//           <Image
//             src='/images/Allegiance Strategies Headshots-038-ReEdit.jpeg'
//             alt='Devan Patel'
//             fill
//             priority
//             placeholder='blur'
//             blurDataURL={blurDataURL()}
//             className='object-cover object-[center_15%]'
//             sizes='(max-width: 1024px) 100vw, 50vw'
//           />
//           <div className='absolute inset-0 bg-gradient-to-r from-brand-beige via-brand-beige/40 to-transparent z-10 hidden lg:block' />
//         </div>

//         <div className='absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-[60px] lg:translate-x-0 flex items-center gap-2.5 z-10'>
//           <div className='w-[1px] h-10 bg-gradient-to-b from-transparent to-[#AAAAAA] animate-pulse' />
//         </div>

//         {/* Global Noise Overlay moved to cover whole Hero for texture consistency */}
//         <div className="absolute inset-0 opacity-0.032 pointer-events-none z-30 mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
//       </section>

//       {/* Statement Section */}
//       <section className='px-8 md:px-16 py-[100px] max-w-780px mx-auto text-center'>
//         <div className='relative mb-10'>
//           <p className='relative z-10 font-serif text-28px md:text-[32px] italic leading-snug text-brand-charcoal px-4'>
//             <span className='font-serif text-[48px] leading-none text-brand-forest opacity-30 mr-1 align-bottom'>
//               &ldquo;
//             </span>
//             Artificial intelligence is not primarily a technology problem. It is
//             a question about what it means to be human.
//             <span className='font-serif text-[48px] leading-none text-brand-forest opacity-30 ml-1 align-bottom'>
//               &rdquo;
//             </span>
//           </p>
//         </div>
//         <p className='text-19px leading-1.8 text-brand-mid max-w-620px mx-auto'>
//           I work at the place where law, faith, and technology converge.
//           I&apos;ve drafted legislation adopted into federal law, convened faith
//           leaders and industry figures at the Vatican to forge international AI
//           ethics principles, and spent a decade building the relationships in
//           Washington that turn ideas into outcomes.
//         </p>
//       </section>

//       {/* ── VERTICALS SECTION ───────────────────────────────────────── */}
//       <section className='grid grid-cols-1 md:grid-cols-3 border-t border-brand-rule'>
//         <VerticalCard
//           label='Policy & Law'
//           headline='Constitutional law, religious liberty, and the machinery of Washington.'
//           links={[
//             'Electoral Count Reform Act co-drafting',
//             'Respect for Marriage Act amendments',
//             '303 Creative — SCOTUS Amicus Brief',
//           ]}
//         />
//         <VerticalCard
//           label='Faith & Ethics'
//           headline='Catholic doctrine, human dignity, and the moral architecture of technology.'
//           links={[
//             'Vatican Ethics in AI Summit',
//             'Lima CEPROME-Vatican Keynotes',
//             'Dialogue with the Holy See',
//           ]}
//         />
//         <VerticalCard
//           label='Technology & AI'
//           headline='The policy, security, and civilizational dimensions of artificial intelligence.'
//           links={[
//             'TikTok / CCP op-eds, RealClear',
//             'Kids Online Safety Act coalition',
//             'Joint AI Ethics Declaration',
//           ]}
//           isLast
//         />
//       </section>

//       {/* ── RECENT WORK SECTION ─────────────────────────────────────── */}
//       <section className='px-8 md:px-16 py-[80px] border-t border-brand-rule'>
//         <div className='flex items-center gap-4 mb-[36px]'>
//           <h2 className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light whitespace-nowrap'>
//             Recent Work
//           </h2>
//           <div className='h-[1px] w-full bg-brand-rule' />
//         </div>

//         <div className='flex flex-col'>
//           <RecentItem
//             type='Podcast'
//             title='AI: Should We Be Concerned?'
//             meta='Mortification of Spin · Jan 2026'
//           />
//           <RecentItem
//             type='Panel'
//             title="Implications of Pope Leo XIV's Election in an Age of AI"
//             meta='ASF & Notre Dame · May 2025'
//           />
//           <RecentItem
//             type='Op-Ed'
//             title="Why Trump and Harris Must Abandon the CCP's Digital Playground"
//             meta='RealClearPolitics · Oct 2024'
//           />
//           <RecentItem
//             type='Keynote'
//             title='Protecting the Most Vulnerable: AI Policy Lessons from the US'
//             meta='CEPROME-Vatican, Lima · Feb 2025'
//           />
//         </div>

//         <Link
//           href='/writing'
//           className='font-sans mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-brand-forest hover:text-brand-forest-hover transition-colors group'
//         >
//           View all writing{' '}
//           <span className='transition-transform group-hover:translate-x-1'>
//             →
//           </span>
//         </Link>
//       </section>
//     </>
//   );
// }

import { VerticalCard } from '@/components/VerticalCard';
import { RecentItem } from '@/components/RecentItem';
import Image from 'next/image';
import Link from 'next/link';
import { blurDataURL } from '@/lib/blur';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] overflow-hidden border-b border-brand-rule'>
        <div className='flex flex-col justify-center p-8 md:p-16 lg:p-[80px] lg:px-[60px] z-10'>
          <div className='text-[11px] font-semibold tracking-ultra-wide uppercase text-brand-light mb-[22px]'>
            Washington, D.C.
          </div>
          <h1 className='font-serif text-52px md:text-76px font-light leading-0.95 mb-[28px] tracking-tightest text-brand-charcoal'>
            Devan
            <br />
            Patel
          </h1>
          <p className='font-serif text-20px md:text-28px font-normal leading-1.1 text-brand-mid mb-[44px] max-w-460px'>
            Lawyer. Strategist.
            <br />
            <span className='not-italic text-brand-charcoal font-medium tracking-tight'>
              The bridge between Washington,
              <br />
              Rome, and Silicon Valley.
            </span>
          </p>
          <div className='border-t border-brand-rule pt-[28px] flex flex-col gap-2'>
            <div className='text-[11px] tracking-wider uppercase text-brand-light'>
              <strong className='text-brand-mid font-medium'>Counsel</strong> ·
              Allegiance Strategies
            </div>
            <div className='text-[11px] tracking-wider uppercase text-brand-light'>
              <strong className='text-brand-mid font-medium'>Professor</strong>{' '}
              · Notre Dame Law School
            </div>
            <div className='text-[11px] tracking-wider uppercase text-brand-light'>
              <strong className='text-brand-mid font-medium'>AI Ethics</strong>{' '}
              · American Security Fund
            </div>
          </div>
        </div>

        <div className='relative min-h-[500px] lg:min-h-full'>
          <Image
            src='/images/Allegiance Strategies Headshots-038-ReEdit.jpeg'
            alt='Devan Patel'
            fill
            priority
            placeholder='blur'
            blurDataURL={blurDataURL()}
            className='object-cover object-[center_15%]'
            sizes='(max-width: 1024px) 100vw, 50vw'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-brand-beige via-brand-beige/40 to-transparent z-10 hidden lg:block' />
        </div>

        <div className='absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-[60px] lg:translate-x-0 flex items-center gap-2.5 z-10'>
          <div className='w-[1px] h-10 bg-gradient-to-b from-transparent to-[#AAAAAA] animate-pulse' />
        </div>

        <div className="absolute inset-0 opacity-0.032 pointer-events-none z-30 mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      </section>

      {/* Statement Section */}
      <section className='px-8 md:px-16 py-[100px] max-w-780px mx-auto text-center'>
        <div className='relative mb-10'>
          <p className='relative z-10 font-serif text-28px md:text-[32px] italic leading-snug text-brand-charcoal px-4'>
            <span className='font-serif text-[48px] leading-none text-brand-forest opacity-30 mr-1 align-bottom'>
              &ldquo;
            </span>
            Artificial intelligence is not primarily a technology problem. It is
            a question about what it means to be human.
            <span className='font-serif text-[48px] leading-none text-brand-forest opacity-30 ml-1 align-bottom'>
              &rdquo;
            </span>
          </p>
        </div>
        <p className='text-19px leading-1.8 text-brand-mid max-w-620px mx-auto'>
          I work at the place where law, faith, and technology converge.
          I&apos;ve drafted legislation adopted into federal law, convened faith
          leaders and industry figures at the Vatican to forge international AI
          ethics principles, and spent a decade building the relationships in
          Washington that turn ideas into outcomes.
        </p>
      </section>

      {/* Verticals Section */}
      <section className='grid grid-cols-1 md:grid-cols-3 border-t border-brand-rule'>
        <VerticalCard
          label='Policy & Law'
          headline='Constitutional law, religious liberty, and the machinery of Washington.'
          links={[
            'Electoral Count Reform Act co-drafting',
            'Respect for Marriage Act amendments',
            '303 Creative — SCOTUS Amicus Brief',
          ]}
        />
        <VerticalCard
          label='Faith & Ethics'
          headline='Catholic doctrine, human dignity, and the moral architecture of technology.'
          links={[
            'Vatican Ethics in AI Summit',
            'Lima CEPROME-Vatican Keynotes',
            'Dialogue with the Holy See',
          ]}
        />
        <VerticalCard
          label='Technology & AI'
          headline='The policy, security, and civilizational dimensions of artificial intelligence.'
          links={[
            'TikTok / CCP op-eds, RealClear',
            'Kids Online Safety Act coalition',
            'Joint AI Ethics Declaration',
          ]}
          isLast
        />
      </section>

      {/* Recent Work Section */}
      <section className='px-8 md:px-16 py-[80px] border-t border-brand-rule'>
        <div className='flex items-center gap-4 mb-[36px]'>
          <h2 className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light whitespace-nowrap'>
            Recent Work
          </h2>
          <div className='h-[1px] w-full bg-brand-rule' />
        </div>

        <div className='flex flex-col'>
          <RecentItem
            type='Podcast'
            title='AI: Should We Be Concerned?'
            meta='Mortification of Spin · Jan 2026'
            href='https://mortificationofspin.podbean.com/e/ai-should-we-be-concerned/'
          />
          <RecentItem
            type='Panel'
            title="Implications of Pope Leo XIV's Election in an Age of AI"
            meta='ASF & Notre Dame · May 2025'
          />
          <RecentItem
            type='Op-Ed'
            title="Why Trump and Harris Must Abandon the CCP's Digital Playground"
            meta='RealClearPolitics · Oct 2024'
            href='https://www.realclearpolitics.com/2024/10/23/trump_and_harris_must_abandon_the_ccps_digital_playground_634114.html'
          />
          <RecentItem
            type='Keynote'
            title='Protecting the Most Vulnerable: AI Policy Lessons from the US'
            meta='CEPROME-Vatican, Lima · Feb 2025'
          />
        </div>

        <Link
          href='/writing'
          className='font-sans mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-brand-forest hover:text-brand-forest-hover transition-colors group'
        >
          View all writing{' '}
          <span className='transition-transform group-hover:translate-x-1'>
            →
          </span>
        </Link>
      </section>
    </>
  );
}