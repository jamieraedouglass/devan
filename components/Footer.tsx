export default function Footer() {
  return (
    <footer className='border-t border-[#D8D2C8] px-8 md:px-16 py-11 grid grid-cols-1 md:grid-cols-2 gap-6 items-end'>
      <div>
        <p className='font-sans text-xs font-semibold tracking-[0.14em] uppercase text-[#1A1A1A] mb-1.5'>
          Devan Patel
        </p>
        <p className='font-sans text-xs text-[#555555] mb-1'>
          Counsel & Managing Director, Allegiance Strategies
        </p>
        <p className='font-sans text-xs text-[#555555] mb-1'>
          Adjunct Professor of Law, Notre Dame Law School
        </p>
        <p className='font-sans text-xs text-[#555555]'>
          Senior Advisor, American Security Fund
        </p>
      </div>
      <div className='text-right flex flex-col gap-1.5 items-end'>
        <a
          href='mailto:Devan.N.Patel@gmail.com'
          className='font-sans text-xs text-[#1E3A2F]'
        >
          Devan.N.Patel@gmail.com
        </a>
        <p className='font-sans text-[10px] text-[#AAAAAA]'>
          © 2025 Devan N. Patel
        </p>
      </div>
    </footer>
  );
}
