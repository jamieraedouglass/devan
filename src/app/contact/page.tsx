import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Devan Patel',
  description:
    'Get in touch with Devan Patel for press inquiries, speaking engagements, academic collaborations, or consulting.',
};

export default function Contact() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2'>
      {/* Left — contact info */}
      <div className='flex flex-col justify-center px-8 md:px-16 py-[40px]'>
        <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-6'>
          Contact
        </p>
        <h1 className='font-serif text-[42px] md:text-[56px] font-light leading-0.95 tracking-tightest text-brand-charcoal mb-6'>
          Get in Touch
        </h1>
        <p className='font-sans text-[11px] tracking-wider uppercase text-brand-light mb-6 max-w-[400px]'>
          Press inquiries, speaking engagements, academic collaborations, or
          consulting.
        </p>
        <div className='border-t border-brand-rule pt-6 mb-6'>
          <a
            href='mailto:devan@devanpatel.com'
            className='font-serif text-[20px] text-brand-charcoal hover:text-brand-forest transition-colors'
          >
            devan@devanpatel.com
          </a>
        </div>
        <a
          href='https://linkedin.com/in/devannpatel'
          target='_blank'
          rel='noopener noreferrer'
          className='font-sans text-[11px] tracking-widest uppercase text-brand-mid hover:text-brand-charcoal transition-colors inline-flex items-center gap-2 group mb-2'
        >
          LinkedIn — linkedin.com/in/devannpatel
          <span className='transition-transform group-hover:translate-x-1'>
            →
          </span>
        </a>
        <ContactForm />
      </div>

      {/* Right — dark forest panel with pull quote */}
      <div className='relative bg-brand-forest flex flex-col justify-center px-12 md:px-16 py-[60px] min-h-[400px] lg:min-h-full overflow-hidden'>
        <blockquote className='relative z-10'>
          <p className='font-serif text-[20px] md:text-[24px] italic leading-snug text-white/90 mb-6'>
            &ldquo;The questions being posed by artificial intelligence are
            among the most serious any civilization has ever faced. They demand
            people who can hold all of the relevant frameworks simultaneously,
            without flattening any of them.&rdquo;
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
