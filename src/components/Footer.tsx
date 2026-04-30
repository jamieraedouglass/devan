import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-[#D8D2C8] px-8 md:px-16 py-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6'>
      <div>
        <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-charcoal mb-3'>
          Devan Patel
        </p>
        <div className='flex flex-col gap-1'>
          <p className='font-sans text-[10px] tracking-widest uppercase text-[#888880]'>
            AI Ethics · Rainey Center for Public Policy
          </p>
          <p className='font-sans text-[10px] tracking-widest uppercase text-[#888880]'>
            Adjunct Professor of Law · Notre Dame Law School
          </p>
          <p className='font-sans text-[10px] tracking-widest uppercase text-[#888880]'>
            Legal & Political Strategist · Foundations and Family Offices
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-1.5 items-start md:items-end'>
        <a
          href='mailto:devan@devanpatel.com'
          className='font-sans text-[10px] tracking-widest uppercase text-brand-mid hover:text-brand-charcoal transition-colors'
        >
          devan@devanpatel.com
        </a>
        <a
          href='https://www.linkedin.com/in/devannpatel/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-sans text-[10px] tracking-widest uppercase text-brand-mid hover:text-brand-charcoal transition-colors'
        >
          LinkedIn →
        </a>
        <p className='font-sans text-[10px] tracking-wider text-brand-light'>
          © 2025 Devan N. Patel
        </p>
      </div>
    </footer>
  );
}