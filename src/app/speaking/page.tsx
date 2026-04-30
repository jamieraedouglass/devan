import Image from 'next/image';
import type { Metadata } from 'next';
import { blurDataURL } from '@/lib/blur';

export const metadata: Metadata = {
  title: 'Speaking & Engagements — Devan Patel',
  description:
    'Speaking on artificial intelligence, Catholic ethics, constitutional law, and national security. Available for conferences, podcasts, and academic programs.',
};

export default function Speaking() {
  return (
    <>
      {/* Header */}
      <section className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] pt-[80px] pb-[48px] border-b border-brand-rule'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[900px]'>
          <div>
            <h1 className='font-serif text-52px md:text-76px font-light leading-0.95 tracking-tightest text-brand-charcoal mb-6'>
              Speaking &amp;
              <br />
              Engagements
            </h1>
            <p className='font-serif text-19px text-brand-mid max-w-[420px]'>
              I speak on the intersection of artificial intelligence, Catholic
              ethics, constitutional law, and national security. My approach to
              translation: taking ideas that live in one world and making them
              legible to another.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2 border-t lg:border-t-0 lg:border-l border-brand-rule pt-8 lg:pt-0 lg:pl-16'>
            <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-3'>
              To Book an Engagement
            </p>

            <a
              href='mailto:Booking@DevanPatel.com'
              className='font-serif text-[22px] text-brand-charcoal hover:text-brand-forest transition-colors'
            >
              Booking@DevanPatel.com
            </a>
            <p className='font-serif text-15px italic text-brand-mid mt-2'>
              For conferences, academic programs, podcasts, or workshops where
              the intersection of law, faith, and technology is relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Areas */}
      <section className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] py-[60px] border-b border-brand-rule'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-[900px]'>
          <div>
            <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-3'>
              01
            </p>
            <h3 className='font-serif text-[20px] font-light text-brand-charcoal mb-3'>
              Artificial Intelligence &amp; Catholic Ethics
            </h3>
            <p className='font-serif text-15px leading-1.8 text-brand-mid'>
              What the Church actually says — and means — about AI, human
              dignity, and the moral responsibilities of those who build
              powerful systems.
            </p>
          </div>
          <div>
            <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-3'>
              02
            </p>
            <h3 className='font-serif text-[20px] font-light text-brand-charcoal mb-3'>
              AI, National Security &amp; the Chinese Communist Party
            </h3>
            <p className='font-serif text-15px leading-1.8 text-brand-mid'>
              How America's adversaries are weaponizing technology against
              children, families, and democratic institutions — and what
              policymakers can do.
            </p>
          </div>
          <div>
            <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-3'>
              03
            </p>
            <h3 className='font-serif text-[20px] font-light text-brand-charcoal mb-3'>
              Religious Liberty in a Post-303 Creative World
            </h3>
            <p className='font-serif text-15px leading-1.8 text-brand-mid'>
              Building cross-confessional coalitions for religious freedom in an
              era of accelerating cultural conflict — including in the age of
              AI.
            </p>
          </div>
          <div>
            <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-3'>
              04
            </p>
            <h3 className='font-serif text-[20px] font-light text-brand-charcoal mb-3'>
              Translating the Pope for Washington — and Washington for Rome
            </h3>
            <p className='font-serif text-15px leading-1.8 text-brand-mid'>
              The political, doctrinal, and diplomatic dimensions of the Holy
              See's emerging role in global AI governance and what it means for
              American policy.
            </p>
          </div>
        </div>
      </section>

      {/* First image */}
      <div className='mx-8 md:mx-16 my-12'>
        <div className='relative h-[500px] overflow-hidden'>
          <Image
            src='/images/IMG_5673.jpeg'
            alt='Devan Patel speaking'
            fill
            placeholder='blur'
            blurDataURL={blurDataURL()}
            className='object-cover object-center'
            sizes='100vw'
          />
        </div>
        <div className='py-3 border-b border-brand-rule'>
          <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
            Keynote Address · CEPROME-Vatican Latin American Congress · Lima,
            Peru · February 2025
          </p>
        </div>
      </div>

      {/* Past Engagements */}
      <section className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] py-[60px] border-t border-brand-rule'>
        <div className='max-w-[900px]'>
          <div className='flex items-center gap-4 mb-[36px]'>
            <h2 className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light whitespace-nowrap'>
              Past Engagements
            </h2>
            <div className='h-[1px] w-full bg-brand-rule' />
          </div>
          <div className='flex flex-col'>
            {[
              {
                title: 'AI: Should We Be Concerned?',
                meta: 'The Mortification of Spin Podcast',
                date: 'Jan 2026',
              },
              {
                title:
                  "Implications of Pope Leo XIV's Election in an Age of AI — Moderator",
                meta: 'American Security Foundation & University of Notre Dame',
                date: 'May 2025',
              },
              {
                title:
                  'Transhumanism, Effective Altruism, and Silicon Valley Ideology in the Age of AI',
                meta: 'Center for Christian Virtual Immersion Summit',
                date: 'Oct 2024',
              },
              {
                title:
                  'Protecting the Most Vulnerable: AI Policy Lessons from the US — Keynote',
                meta: 'CEPROME-Vatican Latin American Congress · Lima, Peru',
                date: 'Feb 2025',
              },
              {
                title:
                  'Family Security as a Matter of (Inter)National Security — Keynote',
                meta: 'CEPROME-Vatican Latin American Congress · Lima, Peru',
                date: 'Feb 2025',
              },
              {
                title: 'Ethics in AI Award Dinner — Convener',
                meta: 'Washington, D.C. · Bipartisan Supreme Court justices, appellate judges, lawmakers',
                date: '2024',
              },
              {
                title: 'Vatican Ethics in AI Summit — Convener',
                meta: 'Rome, Italy · 40+ Global Faith Leaders, Military Officials, Industry Figures',
                date: '2024',
              },
              {
                title: 'Federalist Society AI & Law Symposium — Organizer',
                meta: 'National Society for Law and Public Policy',
                date: '2020–21',
              },
            ].map(({ title, meta, date }) => (
              <div
                key={title}
                className='flex items-start justify-between py-5 border-b border-brand-rule gap-8'
              >
                <div>
                  <p className='font-serif text-[17px] text-brand-charcoal mb-1'>
                    {title}
                  </p>
                  <p className='font-sans text-[11px] tracking-wider uppercase text-brand-light'>
                    {meta}
                  </p>
                </div>
                <p className='font-sans text-[11px] tracking-wider uppercase text-brand-light whitespace-nowrap shrink-0'>
                  {date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second image */}
      <div className='mx-8 md:mx-16 mb-16'>
        <div className='relative h-[500px] overflow-hidden'>
          <Image
            src='/images/IMG_4214.jpeg'
            alt='Devan Patel at event'
            fill
            placeholder='blur'
            blurDataURL={blurDataURL()}
            className='object-cover object-[center_32%]'
            sizes='100vw'
          />
        </div>
        <div className='py-3 border-b border-brand-rule'>
          <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
            With Carl TrueMan & Aaron Baer (CCV President) · Center For
            Christian Virtue Essential Summit · October 2025
          </p>
        </div>
      </div>
    </>
  );
}
