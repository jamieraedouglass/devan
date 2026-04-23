export default function Footer() {
  return (
    <footer className='border-t border-brand-rule px-8 md:px-16 py-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6'>
      <div>
        <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-charcoal mb-3'>
          Devan Patel
        </p>
        <div className='flex flex-col gap-1'>
          <p className='font-sans text-[10px] tracking-widest uppercase text-brand-muted'>
            Counsel · Allegiance Strategies
          </p>
          <p className='font-sans text-[10px] tracking-widest uppercase text-brand-muted'>
            Adjunct Professor of Law · Notre Dame Law School
          </p>
          <p className='font-sans text-[10px] tracking-widest uppercase text-brand-muted'>
            Senior Fellow · American Security Fund
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-1.5 items-start md:items-end'>
        <a
          href='mailto:Devan.N.Patel@gmail.com'
          className='font-sans text-[10px] tracking-widest uppercase text-brand-mid hover:text-brand-charcoal transition-colors'
        >
          Devan.N.Patel@gmail.com
        </a>
        <p className='font-sans text-[10px] tracking-wider text-brand-light'>
          © 2025 Devan N. Patel
        </p>
      </div>
    </footer>
  );
}
