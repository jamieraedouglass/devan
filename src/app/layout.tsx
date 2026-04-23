import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import ScrollToTop from '@/components/ScrollToTop';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Devan Patel — Lawyer, Strategist & AI Ethics | Washington D.C.',
  description:
    'Catholic lawyer and DC strategist at the intersection of constitutional law, AI ethics, and faith. Counsel at Allegiance Strategies. Adjunct Professor, Notre Dame Law School.',
  icons: {
    icon: '/favicon.svg',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} font-sans text-brand-charcoal bg-brand-beige antialiased`}
      >
        <Nav />
        <main className='pt-[52px]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
