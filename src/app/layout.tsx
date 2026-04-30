import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Script from 'next/script';
import '../styles/globals.css';

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
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-KSZF2Y1M8B'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KSZF2Y1M8B');
          `}
        </Script>
        <Nav />
        <main className='pt-[52px]'>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}