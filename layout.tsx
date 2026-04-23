import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const gtSectra = localFont({
  src: [
    { path: '../public/fonts/GT-Sectra-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/GT-Sectra-Light-Italic.woff2', weight: '300', style: 'italic' },
    { path: '../public/fonts/GT-Sectra-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GT-Sectra-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/GT-Sectra-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/GT-Sectra-Medium-Italic.woff2', weight: '500', style: 'italic' },
  ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${gtSectra.variable} ${dmSans.variable} bg-[#F5F0EA]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}