'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center border border-brand-rule bg-brand-beige/90 backdrop-blur-sm text-brand-mid hover:text-brand-charcoal hover:border-brand-mid transition-colors'
      aria-label='Scroll to top'
    >
      <span className='text-[12px]'>↑</span>
    </button>
  );
}