import { VerticalCard } from './VerticalCard';
import { RecentItem } from './RecentItem';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] overflow-hidden'>
        <div className='flex flex-col justify-center p-8 md:p-16 z-10'>
          <div className='text-[11px] font-medium tracking-[0.2em] uppercase text-[#AAAAAA] mb-6'>
            Washington, D.C.
          </div>
          <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-7 tracking-tight'>
            Devan
            <br />
            Patel
          </h1>
          <p className='font-serif text-xl md:text-2xl font-normal leading-relaxed text-[#555555] mb-11 max-w-md'>
            Lawyer. Strategist.
            <br />
            <span className='italic'>
              The bridge between Washington,
              <br />
              Rome, and Silicon Valley.
            </span>
          </p>
          <div className='border-t border-[#D8D2C8] pt-6 flex flex-col gap-1.5'>
            <div className='text-[11px] tracking-wider uppercase text-[#AAAAAA]'>
              <strong className='text-[#555555] font-medium'>Counsel</strong> ·
              Allegiance Strategies
            </div>
            <div className='text-[11px] tracking-wider uppercase text-[#AAAAAA]'>
              <strong className='text-[#555555] font-medium'>Professor</strong>{' '}
              · Notre Dame Law School
            </div>
            <div className='text-[11px] tracking-wider uppercase text-[#AAAAAA]'>
              <strong className='text-[#555555] font-medium'>AI Ethics</strong>{' '}
              · American Security Fund
            </div>
          </div>
        </div>

        <div className='relative min-h-[400px] lg:min-h-full'>
          {/* Image Placeholder - In build, replace with actual hero image */}
          <div className='absolute inset-0 bg-gray-200'>
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974')] bg-cover bg-[center_15%]" />
          </div>
          <div className='absolute inset-0 bg-gradient-to-r from-[#F5F0EA]/20 to-transparent z-10' />
          {/* Noise Overlay Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
        </div>

        <div className='absolute bottom-9 left-16 hidden lg:flex items-center gap-2.5 z-10'>
          <div className='w-[1px] h-10 bg-gradient-to-b from-transparent to-[#AAAAAA] animate-pulse' />
        </div>
      </section>

      {/* Statement Section */}
      <section className='px-8 md:px-16 py-24 max-w-4xl mx-auto text-center'>
        <div className='relative px-5 mb-10'>
          <span className='absolute -top-4 left-0 font-serif text-7xl text-[#1E3A2F] opacity-20'>
            &quot;
          </span>
          <p className='font-serif text-2xl md:text-3xl italic leading-snug'>
            Artificial intelligence is not primarily a technology problem. It is
            a question about what it means to be human.
          </p>
        </div>
        <p className='text-base leading-relaxed text-[#555555] max-w-2xl mx-auto'>
          I work at the place where law, faith, and technology converge.
          I&apos;ve drafted legislation adopted into federal law, convened faith
          leaders and industry figures at the Vatican to forge international AI
          ethics principles, and spent a decade building the relationships in
          Washington that turn ideas into outcomes.
        </p>
      </section>

      {/* Verticals Section */}
      <section className='grid grid-cols-1 md:grid-cols-3 border-t border-[#D8D2C8]'>
        <VerticalCard
          label='Policy & Law'
          headline='Constitutional law, religious liberty, and the machinery of Washington'
          links={[
            'Electoral Count Reform Act co-drafting',
            'Respect for Marriage Act amendments',
            '303 Creative — SCOTUS Amicus Brief',
          ]}
        />
        <VerticalCard
          label='Faith & Ethics'
          headline='Catholic doctrine, human dignity, and the moral architecture of technology'
          links={[
            'Vatican Ethics in AI Summit',
            'Lima CEPROME-Vatican Keynotes',
            'Dialogue with the Holy See',
          ]}
        />
        <VerticalCard
          label='Technology & AI'
          headline='The policy, security, and civilizational dimensions of artificial intelligence'
          links={[
            'TikTok / CCP op-eds, RealClear',
            'Kids Online Safety Act coalition',
            'Joint AI Ethics Declaration',
          ]}
          isLast
        />
      </section>

      {/* Recent Work Section */}
      <section className='px-8 md:px-16 py-20 border-t border-[#D8D2C8]'>
        <div className='flex items-center gap-4 mb-9'>
          <h2 className='text-[10px] font-semibold tracking-[0.2em] uppercase text-[#AAAAAA] whitespace-nowrap'>
            Recent Work
          </h2>
          <div className='h-[1px] w-full bg-[#D8D2C8]' />
        </div>

        <div className='flex flex-col'>
          <RecentItem
            type='Podcast'
            title='AI: Should We Be Concerned?'
            meta='Mortification of Spin · Jan 2026'
          />
          <RecentItem
            type='Panel'
            title="Implications of Pope Leo XIV's Election in an Age of AI"
            meta='ASF & Notre Dame · May 2025'
          />
          <RecentItem
            type='Op-Ed'
            title="Why Trump and Harris Must Abandon the CCP's Digital Playground"
            meta='RealClearPolitics · Oct 2024'
          />
          <RecentItem
            type='Keynote'
            title='Protecting the Most Vulnerable: AI Policy Lessons from the US'
            meta='CEPROME-Vatican, Lima · Feb 2025'
          />
        </div>

        <div className='mt-7 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#1E3A2F] cursor-pointer group'>
          View all writing{' '}
          <span className='transition-transform group-hover:translate-x-1'>
            →
          </span>
        </div>
      </section>
    </>
  );
}
