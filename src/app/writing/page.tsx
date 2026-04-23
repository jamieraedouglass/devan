import type { Metadata } from 'next';
import WritingTabs from './WritingTabs';
import { blurDataURL } from '@/lib/blur';


export const metadata: Metadata = {
  title: 'Writing & Speaking — Devan Patel',
  description:
    'Writing and speaking on AI ethics, constitutional law, religious liberty, and the intersection of faith and public life.',
};

export default function Writing() {
  return (
    <>
      <section className='px-8 md:px-16 lg:pl-[22%] lg:pr-[8%] pt-[80px] pb-[48px] border-b border-brand-rule'>
        <h1 className='font-serif text-52px md:text-76px font-light leading-0.95 tracking-tightest text-brand-charcoal mb-6'>
          Writing &amp;
          <br />
          Speaking
        </h1>
        <p className='font-serif text-19px text-brand-mid max-w-[520px]'>
          Work organized by the three areas where my thinking lives — AI and
          ethics, constitutional law, and the intersection of faith and public
          life.
        </p>
      </section>
      <WritingTabs />
    </>
  );
}