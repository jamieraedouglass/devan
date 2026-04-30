import Image from 'next/image';
import type { Metadata } from 'next';
import { blurDataURL } from '@/lib/blur';

export const metadata: Metadata = {
  title: 'About — Devan Patel',
  description:
    'Lawyer and political strategist in Washington, D.C. Visiting Fellow for Tech Ethics & Democracy at the Joseph Rainey Center for Public Policy.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className='relative min-h-[60vh] overflow-hidden border-b border-brand-rule'>
        <Image
          src='/images/IMG_2849.jpeg'
          alt='Devan Patel'
          fill
          priority
          placeholder='blur'
          blurDataURL={blurDataURL()}
          className='object-cover object-[center_30%]'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent' />
        <div className='absolute bottom-0 left-0 px-8 md:px-16 pb-12 z-10'>
          <h1 className='font-serif text-[42px] md:text-[56px] font-light leading-0.95 tracking-tightest text-white mb-4'>
            Devan N. Patel
          </h1>
          <div className='flex flex-wrap gap-6'>
            {['Lawyer', 'Strategist', 'Educator', 'Washington, D.C.'].map(
              (tag) => (
                <span
                  key={tag}
                  className='font-sans text-[10px] tracking-widest uppercase text-white/60'
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className='py-[80px] px-8 md:px-16 lg:pl-[22%] lg:pr-[8%]'>
        <div className='max-w-[780px]'>
          <p className='font-serif text-19px leading-1.8 text-brand-mid mb-8'>
            Devan Patel grew up in the Tenderloin neighborhood of San Francisco,
            the son and grandson of Indian immigrants and the first in his
            family to graduate from college.
          </p>
          <p className='font-serif text-19px leading-1.8 text-brand-mid mb-8'>
            That background — navigating between worlds, translating across
            communities, building trust across lines of difference — turned out
            to be the most useful preparation imaginable for a career at the
            intersection of law, faith, and technology.
          </p>
          <p className='font-serif text-19px leading-1.8 text-brand-mid mb-8'>
            He came to the law at Notre Dame, where he also immersed himself in
            Catholic social thought and began working closely with figures like
            Mary Casey Barrett, Rick and Bunny Garnett, Carter Snead, and Fr.
            Pete Seele. The grounding he found there stayed with him after
            graduation — in the years that followed, he convened a conference on
            religious liberty, deepening a conviction that Catholic moral
            philosophy offered the most coherent framework he had encountered
            for thinking about law, human dignity, and the common good.
          </p>

          <blockquote className='my-12 pl-8 border-l-2 border-brand-forest'>
            <p className='font-serif text-[22px] italic leading-snug text-brand-charcoal'>
              A deepening conviction that Catholic moral philosophy offered the
              most coherent framework he had encountered for thinking about law,
              human dignity, and the common good.
            </p>
          </blockquote>

          <p className='font-serif text-19px leading-1.8 text-brand-mid mb-8'>
            After law school, Devan served as the first-ever clerk for Judge
            Thaddeus Ashworth on the U.S. Court of Federal Claims. The move
            built a skill that has defined every subsequent role — distilling
            complex federal legislation, shaping behind-the-scenes strategy in
            high-stakes confirmations, and building unusual coalitions across
            lines of deep theological disagreement.
          </p>
          <p className='font-serif text-19px leading-1.8 text-brand-mid'>
            Through his work at American Security Fund, Devan built and deployed
            some of the more memorable coalitions in recent Washington memory,
            helping bring together progressive LGBTQ+ advocacy organizations
            alongside the Electoral Count Reform Act — all while serving
            simultaneously as a convener for the Association of Evangelicals,
            the Seventh-day Adventist Church, and the Council for Christian
            Colleges and Universities.
          </p>
        </div>
      </section>

      {/* Cardinal image */}
      <div className='mx-8 md:mx-16 mb-16'>
        <div className='relative h-[500px] overflow-hidden'>
          <Image
            src='/images/IMG_5424.jpeg'
            alt='Devan Patel with Cardinal'
            fill
            placeholder='blur'
            blurDataURL={blurDataURL()}
            className='object-cover object-[center_20%]'
            sizes='100vw'
          />
        </div>
        <div className='py-3 border-b border-brand-rule'>
          <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
            With Cardinal Pietro Parolin, Holy See Secretary of State · Vatican
            City
          </p>
        </div>
      </div>

      {/* Bio continued */}
      <section className='py-[80px] px-8 md:px-16 lg:pl-[22%] lg:pr-[8%]'>
        <div className='max-w-[780px]'>
          <blockquote className='mb-12 pl-8 border-l-2 border-brand-forest'>
            <p className='font-serif text-[22px] italic leading-snug text-brand-charcoal'>
              It is not primarily a technology problem. It is a question about
              what it means to be human — what values should govern the systems
              we build, who bears the costs when they fail, and who gets to
              decide.
            </p>
          </blockquote>

          <p className='font-serif text-19px leading-1.8 text-brand-mid mb-8'>
            As Senior Fellow at American Security Fund, he convened more than
            forty global faith leaders, military officials, and industry figures
            at a Vatican Summit — pioneering a signed international joint
            declaration on AI ethics principles. He has worked in dialogue with
            Fr. Paolo Benanti — the Franciscan friar who serves as the Pope's
            chief advisor on artificial intelligence — as well as with other
            prominent theologians and policy leadership across three continents.
          </p>
          <p className='font-serif text-19px leading-1.8 text-brand-mid'>
            Nonetheless, Devan has maintained a parallel academic life. He
            serves as an adjunct professor of law at Notre Dame's law school,
            running the school's Washington, D.C.-based program to educate
            future government leaders. He is a fellow and scholar at Notre
            Dame's de Nicola Center for Ethics and Culture, and an inaugural
            member of the Federalist Society's AI & Law Working Group.
          </p>
        </div>
      </section>

      {/* Short bio */}
      <section className='border-t border-brand-rule py-[60px] px-8 md:px-16 lg:pl-[22%] lg:pr-[8%]'>
        <div className='max-w-[780px]'>
          <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-charcoal mb-2'>
            Short Bio
          </p>
          <p className='font-serif text-15px italic text-brand-light mb-8'>
            For podcast show notes, op-ed taglines, and event programs — feel
            free to copy.
          </p>
          <blockquote className='pl-8 border-l-2 border-brand-forest'>
            <p className='font-serif text-19px leading-1.8 text-brand-mid'>
              Devan Patel is a lawyer and political strategist in Washington,
              DC. He serves as the visiting fellow for tech ethics and democracy
              at the Joseph Rainey Center. Previously, he served as counsel and
              managing director of public policy at Allegiance Strategies as
              well as the senior advisor of public policy and ethics at American
              Security Fund, where he emerged as a leading voice at the
              intersection of AI, national security, and Catholic ethics. He is
              an adjunct professor of law at Notre Dame Law School, a fellow at
              Notre Dame's de Nicola Center for Ethics and Culture, and an
              inaugural member of the Federalist Society's AI & Law Working
              Group. Devan has authored and negotiated state and federal
              legislation, built and deployed unlikely advocacy coalitions, and
              has spoken at or convened international AI ethics summits on four
              continents, including a summit he convened at the Vatican in
              dialogue with the Holy See's advisors on AI.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Current Affiliations */}
      <section className='py-[60px] border-t border-brand-rule px-8 md:px-16 lg:pl-[22%] lg:pr-[8%]'>
        <div className='max-w-[780px]'>
          <h2 className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-8'>
            Current Affiliations
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6'>
            {[
              {
                role: 'Visiting Fellow for Tech Ethics & Democracy',
                org: 'Joseph Rainey Center for Public Policy',
              },
              {
                role: 'Founding Member, AI & Law Working Group',
                org: 'Federalist Society',
              },
              {
                role: 'Adjunct Professor of Law',
                org: 'Notre Dame Law School',
              },
              {
                role: 'Fellow',
                org: 'de Nicola Center for Ethics and Culture',
              },
              { role: 'Fellow', org: 'Center for Christian Virtue' },
              { role: 'Active Member', org: 'California Bar' },
            ].map(({ role, org }) => (
              <div key={org} className='flex flex-col gap-0.5'>
                <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
                  {role}
                </p>
                <p className='font-sans text-[11px] font-medium tracking-wider uppercase text-brand-charcoal'>
                  {org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}