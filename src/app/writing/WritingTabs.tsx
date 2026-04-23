'use client';

import { useState } from 'react';
import Image from 'next/image';
import { blurDataURL } from '@/lib/blur';

type BadgeType =
  | 'PODCAST'
  | 'PANEL'
  | 'OP-ED'
  | 'KEYNOTE'
  | 'AMICUS'
  | 'JOURNAL'
  | 'DECLARATION'
  | 'SENATE';

const badgeColors: Record<BadgeType, string> = {
  PODCAST: 'bg-brand-forest text-white',
  PANEL: 'bg-[#4A3728] text-white',
  'OP-ED': 'bg-[#8B6914] text-white',
  KEYNOTE: 'bg-[#2C4A3E] text-white',
  AMICUS: 'bg-[#3D3D5C] text-white',
  JOURNAL: 'bg-[#5C3D3D] text-white',
  DECLARATION: 'bg-[#4A3728] text-white',
  SENATE: 'bg-[#1A3A2A] text-white',
};

function Badge({ type }: { type: BadgeType }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[9px] font-semibold tracking-widest uppercase ${badgeColors[type]} shrink-0`}
    >
      {type}
    </span>
  );
}

function WorkItem({
  type,
  title,
  meta,
  links,
}: {
  type: BadgeType;
  title: string;
  meta: string;
  links?: { label: string; url: string }[];
}) {
  return (
    <div className='flex items-start gap-4 py-5 border-b border-brand-rule'>
      <div className='mt-0.5 w-[90px] shrink-0'>
        <Badge type={type} />
      </div>
      <div className='flex flex-col gap-1'>
        <p className='font-serif text-[17px] text-brand-charcoal'>{title}</p>
        <p className='font-sans text-[11px] tracking-wider text-brand-light uppercase'>
          {meta}
        </p>
        {links && (
          <div className='flex gap-4 mt-1'>
            {links.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='font-sans text-[10px] tracking-widest uppercase text-brand-forest hover:text-brand-forest-hover transition-colors inline-flex items-center gap-1 group'
              >
                {label}
                <span className='transition-transform group-hover:translate-x-0.5'>
                  →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const tabs = [
  'AI & Ethics',
  'Law & Constitutional Order',
  'Faith & Public Life',
] as const;
type Tab = (typeof tabs)[number];

export default function WritingTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('AI & Ethics');

  return (
    <>
      <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] border-b border-brand-rule'>
        <div className='flex gap-0'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-[10px] tracking-widest uppercase py-4 pr-8 transition-colors border-b-2 -mb-[2px] ${activeTab === tab ? 'text-brand-charcoal border-brand-charcoal' : 'text-brand-light border-transparent hover:text-brand-mid'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'AI & Ethics' && (
        <section>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] py-[48px]'>
            <p className='font-serif text-19px italic leading-1.8 text-brand-mid max-w-[620px]'>
              The moral and civilizational dimensions of artificial intelligence
              — its implications for human dignity, national security, child
              safety, and the future of faith communities — have been central to
              my work for the past several years.
            </p>
          </div>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] border-t border-brand-rule'>
            <WorkItem
              type='PODCAST'
              title='A Catholic Response to "The Adolescence of Technology"'
              meta='The Catholic Futurist Podcast · Forthcoming'
            />
            <WorkItem
              type='PODCAST'
              title='AI: Should We Be Concerned?'
              meta='The Mortification of Spin Podcast · January 14, 2026'
              links={[
                {
                  label: 'Apple Podcasts',
                  url: 'https://podcasts.apple.com/nz/podcast/ai-should-we-be-concerned/id613483893?i=1000745094437',
                },
                {
                  label: 'Spotify',
                  url: 'https://open.spotify.com/episode/0Fz4FxOejYIPTdIpZ0h8xB',
                },
                {
                  label: 'Mortification of Spin',
                  url: 'https://mortificationofspin.podbean.com/e/ai-should-we-be-concerned/',
                },
              ]}
            />
            <WorkItem
              type='DECLARATION'
              title='Joint Statement on AI Ethics — Lead Drafter & Invited Signatory'
              meta='October 2024'
            />
            <WorkItem
              type='DECLARATION'
              title='Statement on Superintelligence — Invited Signatory'
              meta='October 2024'
            />
          </div>
          <div className='mx-8 md:mx-16 my-10'>
            <div className='relative h-[560px] overflow-hidden'>
              <Image
                src='/images/IMG_4460.jpeg'
                alt='Devan Patel speaking'
                fill
                placeholder='blur'
                blurDataURL={blurDataURL()}
                className='object-cover object-[center_25%]'
                sizes='100vw'
              />
            </div>
            <div className='py-3 border-b border-brand-rule'>
              <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
                Signing the Joint Statement on AI Ethics · Vatican Summit ·
                Vatican City · 2024
              </p>
            </div>
          </div>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] border-t border-brand-rule'>
            <WorkItem
              type='KEYNOTE'
              title='Transhumanism, Effective Altruism, and Silicon Valley Ideology in the Age of AI'
              meta='Center for Christian Virtual Immersion Summit'
            />
            <WorkItem
              type='PANEL'
              title="Implications of Pope Leo XIV's Election in an Age of AI — Moderator"
              meta='American Security Foundation & University of Notre Dame'
            />
            <WorkItem
              type='DECLARATION'
              title="National Declaration on AI and Kids' Safety — Invited Signatory"
              meta='May 2024'
            />
            <WorkItem
              type='KEYNOTE'
              title='Protecting the Most Vulnerable: AI Policy Lessons from the US'
              meta='2025 CEPROME-Vatican Latin American Congress · Lima, Peru · February 2025'
            />
            <WorkItem
              type='OP-ED'
              title="Why Trump and Harris Must Abandon the CCP's Digital Playground"
              meta='RealClearPolitics · October 13, 2024'
              links={[
                {
                  label: 'RealClearPolitics',
                  url: 'https://www.realclearpolitics.com/2024/10/23/trump_and_harris_must_abandon_the_ccps_digital_playground_634114.html',
                },
              ]}
            />
            <WorkItem
              type='OP-ED'
              title='Ban TikTok Today'
              meta='RealClearPolitics · April 22, 2024'
              links={[
                {
                  label: 'RealClearPolitics',
                  url: 'https://www.realclearpolicy.com/articles/2024/04/25/ban_tiktok_today_1027436.html',
                },
              ]}
            />
          </div>
        </section>
      )}

      {activeTab === 'Law & Constitutional Order' && (
        <section>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] py-[48px]'>
            <p className='font-serif text-19px italic leading-1.8 text-brand-mid max-w-[620px]'>
              My legal work spans constitutional litigation, federal
              legislation, and the intersection of law and religious liberty.
            </p>
          </div>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] border-t border-brand-rule'>
            <WorkItem
              type='AMICUS'
              title='Brief of American Unity Fund and EPPC as Amici Curiae'
              meta='Kathy Chiles v. Patty Salazar · No. 24-579 · June 13, 2025'
            />
            <WorkItem
              type='AMICUS'
              title='Brief for Prof. Dale Carpenter et al. as Amici Curiae Supporting Petitioners'
              meta='303 Creative LLC v. Elenis · No. 21-476 · May 31, 2022'
            />
            <WorkItem
              type='JOURNAL'
              title='The Dogma Within? Testing the Role of Religion in Statutory Decision-Making'
              meta='Journal of Empirical Legal Studies · Vol. 18, p. 742 · 2021'
              links={[
                {
                  label: 'Read Paper',
                  url: 'https://onlinelibrary.wiley.com/doi/10.1111/jels.12298',
                },
              ]}
            />
            <WorkItem
              type='SENATE'
              title='Letter of Former Student Devan Patel — Amy Coney Barrett Nomination'
              meta='Read Into U.S. Senate Record by Sen. Tillis · October 13, 2020'
            />
            <WorkItem
              type='JOURNAL'
              title='The Indefensible "Gay Panic Defense"'
              meta='Journal of Legislation · Vol. 46, p. 114 · 2019'
              links={[
                {
                  label: 'Read Paper',
                  url: 'https://scholarship.law.nd.edu/cgi/viewcontent.cgi?article=1702&context=jleg',
                },
              ]}
            />
            <WorkItem
              type='OP-ED'
              title="What's the Beef? Missouri's Attempt to Silence Speech About Veggie Burgers"
              meta='The Hill · August 6, 2018'
              links={[
                {
                  label: 'The Hill',
                  url: 'https://thehill.com/opinion/judiciary/400189-whats-the-beef-missouris-attempt-to-silence-speech-about-veggie-burgers/',
                },
              ]}
            />
          </div>
        </section>
      )}

      {activeTab === 'Faith & Public Life' && (
        <section>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] py-[48px]'>
            <p className='font-serif text-19px italic leading-1.8 text-brand-mid max-w-[620px]'>
              The relationship between faith, public life, and the moral
              formation of democratic institutions has animated my work since
              law school.
            </p>
          </div>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] border-t border-brand-rule'>
            <WorkItem
              type='PODCAST'
              title='A Catholic Response to "The Adolescence of Technology"'
              meta='The Catholic Futurist Podcast · Forthcoming'
            />
            <WorkItem
              type='KEYNOTE'
              title='Protecting the Most Vulnerable: AI Policy Lessons from the US'
              meta='CEPROME-Vatican Latin American Congress · Lima, Peru · February 2025'
            />
            <WorkItem
              type='JOURNAL'
              title='The Dogma Within? Testing the Role of Religion in Statutory Decision-Making'
              meta='Journal of Empirical Legal Studies · Vol. 18 · 2021'
              links={[
                {
                  label: 'Read Paper',
                  url: 'https://onlinelibrary.wiley.com/doi/10.1111/jels.12298',
                },
              ]}
            />
          </div>
          <div className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] py-[48px]'>
            <div className='border-l-4 border-brand-forest bg-brand-beige p-8 max-w-[620px]'>
              <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-forest mb-3'>
                Coming in 2026
              </p>
              <p className='font-serif text-15px leading-1.8 text-brand-mid'>
                Four long-form essays in development: an analysis of Fr. Paolo
                Benanti's AI ethics framework; a translation of Laudato Si into
                policy language for a DC audience; why Catholic social teaching
                produces different AI ethics conclusions than secular
                frameworks; and rapid-response analysis of any papal document
                touching AI.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
