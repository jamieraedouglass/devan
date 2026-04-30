'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-3'>
      <div className='border-t border-brand-rule pt-6'>
        <p className='font-sans text-[10px] font-semibold tracking-super-wide uppercase text-brand-light mb-4'>
          Send a Message
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <div className='flex flex-col gap-1.5'>
          <label className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
            Name
          </label>
          <input
            type='text'
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='bg-transparent border border-brand-rule px-4 py-2.5 font-serif text-15px text-brand-charcoal placeholder:text-brand-light focus:outline-none focus:border-brand-mid transition-colors'
            placeholder='Your name'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <label className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
            Email
          </label>
          <input
            type='email'
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className='bg-transparent border border-brand-rule px-4 py-2.5 font-serif text-15px text-brand-charcoal placeholder:text-brand-light focus:outline-none focus:border-brand-mid transition-colors'
            placeholder='your@email.com'
          />
        </div>
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
          Subject
        </label>
        <input
          type='text'
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className='bg-transparent border border-brand-rule px-4 py-2.5 font-serif text-15px text-brand-charcoal placeholder:text-brand-light focus:outline-none focus:border-brand-mid transition-colors'
          placeholder='Speaking inquiry, press, consulting...'
        />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className='font-sans text-[10px] tracking-widest uppercase text-brand-light'>
          Message
        </label>
        <textarea
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className='bg-transparent border border-brand-rule px-4 py-2.5 font-serif text-15px text-brand-charcoal placeholder:text-brand-light focus:outline-none focus:border-brand-mid transition-colors resize-none'
          placeholder='Your message...'
        />
      </div>

      <button
        type='submit'
        disabled={status === 'loading'}
        className='font-sans text-[10px] tracking-widest uppercase px-8 py-3 bg-brand-forest text-white hover:bg-brand-forest-hover transition-colors disabled:opacity-50 self-start'
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className='font-serif text-15px italic text-brand-forest'>
          Message sent — Devan will be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className='font-serif text-15px italic text-red-600'>
          Something went wrong. Please try emailing directly.
        </p>
      )}
    </form>
  );
}