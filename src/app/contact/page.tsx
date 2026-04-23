import Link from 'next/link';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Contact — Devan Patel',
  description:
    'Get in touch with Devan Patel for press inquiries, speaking engagements, academic collaborations, or consulting.',
};

export default function Contact() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]'>
      {/* Left — contact info */}
      <div className='flex flex-col justify-center px-8 md:px-16 py-[80px]'>
        <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-8'>
          Contact
        </p>
        <h1 className='font-serif text-[48px] md:text-[64px] font-light leading-0.95 tracking-tightest text-brand-charcoal mb-8'>
          Get in
          <br />
          Touch
        </h1>
        <p className='font-serif text-19px leading-1.8 text-brand-mid mb-10 max-w-[400px]'>
          I&apos;m reachable at the address below. For press inquiries, speaking
          engagements, academic collaborations, or consulting, email is the best
          way to start a conversation.
        </p>

        <div className='border-t border-brand-rule pt-8 mb-10'>
          <a
            href='mailto:Devan.N.Patel@gmail.com'
            className='font-serif text-[28px] text-brand-charcoal hover:text-brand-forest transition-colors'
          >
            Devan.N.Patel@gmail.com
          </a>
        </div>

        <div className='flex flex-col gap-3'>
          <a
            href='https://linkedin.com/in/devannpatel'
            target='_blank'
            rel='noopener noreferrer'
            className='font-sans text-[11px] tracking-widest uppercase text-brand-mid hover:text-brand-charcoal transition-colors inline-flex items-center gap-2 group'
          >
            LinkedIn — linkedin.com/in/devannpatel
            <span className='transition-transform group-hover:translate-x-1'>
              →
            </span>
          </a>
          <a
            href='https://law.nd.edu/washington-dc-program'
            target='_blank'
            rel='noopener noreferrer'
            className='font-sans text-[11px] tracking-widest uppercase text-brand-mid hover:text-brand-charcoal transition-colors inline-flex items-center gap-2 group'
          >
            Notre Dame Law School, Washington D.C. Program
            <span className='transition-transform group-hover:translate-x-1'>
              →
            </span>
          </a>
        </div>
      </div>

      {/* Right — dark forest panel with pull quote */}
      <div className='relative bg-brand-forest flex flex-col justify-center px-12 md:px-16 py-[80px] min-h-[500px] lg:min-h-full overflow-hidden'>
        <div className='absolute top-10 left-10 opacity-15'>
          <span className='font-serif text-[120px] text-white leading-none'>
            &ldquo;
          </span>
        </div>
        <div className='absolute bottom-10 right-10 opacity-15'>
          <span className='font-serif text-[120px] text-white leading-none'>
            &rdquo;
          </span>
        </div>
        <blockquote className='relative z-10'>
          <p className='font-serif text-[22px] md:text-[26px] italic leading-snug text-white/90 mb-8'>
            The questions being posed by artificial intelligence are among the
            most serious any civilization has ever faced. They demand people who
            can hold all of the relevant frameworks simultaneously, without
            flattening any of them.
          </p>
          <footer className='flex items-center gap-3'>
            <div className='w-6 h-[1px] bg-white/30' />
            <p className='font-sans text-[10px] tracking-super-wide uppercase text-white/60'>
              Devan N. Patel
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
