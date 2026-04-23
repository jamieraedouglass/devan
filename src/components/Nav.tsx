'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between px-8 md:px-16 py-6 border-b border-[#D8D2C8] bg-[#F5F0EA] sticky top-0 z-50'>
      <Link
        href='/'
        className='font-sans text-xs font-medium tracking-[0.16em] uppercase text-[#1A1A1A]'
      >
        Devan Patel
      </Link>
      <ul className='hidden md:flex gap-11 list-none'>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                'text-xs tracking-widest uppercase transition-colors duration-150',
                pathname === href
                  ? 'text-[#1A1A1A] border-b-2 border-[#1E3A2F] pb-1'
                  : 'text-[#555555] hover:text-[#1A1A1A]',
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
