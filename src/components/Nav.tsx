// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { cn } from '@/lib/utils';

// const links = [
//   { href: '/about', label: 'About' },
//   { href: '/writing', label: 'Writing' },
//   { href: '/speaking', label: 'Speaking' },
//   { href: '/contact', label: 'Contact' },
// ];

// export default function Nav() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-[52px] border-b border-[#D8D2C8] bg-[#F5F0EA]/90 backdrop-blur-sm'>
//         <Link
//           href='/'
//           className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-charcoal'
//           onClick={() => setMenuOpen(false)}
//         >
//           Devan Patel
//         </Link>

//         {/* Desktop nav */}
//         <ul className='hidden md:flex gap-10 list-none'>
//           {links.map(({ href, label }) => (
//             <li key={href}>
//               <Link
//                 href={href}
//                 className={cn(
//                   'font-sans text-[10px] tracking-widest uppercase transition-colors duration-150',
//                   pathname === href
//                     ? 'text-brand-charcoal font-medium'
//                     : 'text-[#888880] hover:text-brand-charcoal',
//                 )}
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile hamburger */}
//         <button
//           className='md:hidden flex flex-col justify-center items-center gap-[5px] w-6 h-6'
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label='Toggle menu'
//         >
//           <span
//             className={cn(
//               'block w-5 h-[1px] bg-brand-charcoal transition-all duration-200',
//               menuOpen && 'translate-y-[6px] rotate-45',
//             )}
//           />
//           <span
//             className={cn(
//               'block w-5 h-[1px] bg-brand-charcoal transition-all duration-200',
//               menuOpen && 'opacity-0',
//             )}
//           />
//           <span
//             className={cn(
//               'block w-5 h-[1px] bg-brand-charcoal transition-all duration-200',
//               menuOpen && '-translate-y-[6px] -rotate-45',
//             )}
//           />
//         </button>
//       </nav>

//       {/* Mobile menu overlay */}
//       {menuOpen && (
//         <div className='fixed inset-0 z-40 bg-brand-beige pt-[52px] md:hidden'>
//           <ul className='flex flex-col list-none'>
//             {links.map(({ href, label }) => (
//               <li key={href} className='border-b border-brand-rule'>
//                 <Link
//                   href={href}
//                   onClick={() => setMenuOpen(false)}
//                   className={cn(
//                     'block px-8 py-6 font-serif text-[32px] font-light tracking-tightest transition-colors',
//                     pathname === href
//                       ? 'text-brand-charcoal'
//                       : 'text-brand-mid hover:text-brand-charcoal',
//                   )}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className='px-8 pt-8'>
//             <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
//               Devan.N.Patel@gmail.com
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-[52px] border-b border-[#D8D2C8] bg-[#F5F0EA]/90 backdrop-blur-sm'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src='/images/devanpatel_logo_dark.svg'
            alt='Devan Patel'
            width={22}
            height={27}
            className='shrink-0'
          />
          <span className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-charcoal'>
            Devan Patel
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden md:flex gap-10 list-none'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'font-sans text-[10px] tracking-widest uppercase transition-colors duration-150',
                  pathname === href
                    ? 'text-brand-charcoal font-medium'
                    : 'text-[#888880] hover:text-brand-charcoal',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className='md:hidden flex flex-col justify-center items-center gap-[5px] w-6 h-6'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span
            className={cn(
              'block w-5 h-[1px] bg-brand-charcoal transition-all duration-200',
              menuOpen && 'translate-y-[6px] rotate-45',
            )}
          />
          <span
            className={cn(
              'block w-5 h-[1px] bg-brand-charcoal transition-all duration-200',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-[1px] bg-brand-charcoal transition-all duration-200',
              menuOpen && '-translate-y-[6px] -rotate-45',
            )}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className='fixed inset-0 z-40 bg-brand-beige pt-[52px] md:hidden'>
          <ul className='flex flex-col list-none'>
            {links.map(({ href, label }) => (
              <li key={href} className='border-b border-brand-rule'>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block px-8 py-6 font-serif text-[32px] font-light tracking-tightest transition-colors',
                    pathname === href
                      ? 'text-brand-charcoal'
                      : 'text-brand-mid hover:text-brand-charcoal',
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='px-8 pt-8'>
            <p className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
              devan@devanpatel.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}