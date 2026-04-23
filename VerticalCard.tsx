export function VerticalCard({
  label,
  headline,
  links,
  isLast = false,
}: {
  label: string;
  headline: string;
  links: string[];
  isLast?: boolean;
}) {
  return (
    <div
      className={`p-11 transition-colors hover:bg-[#1E3A2F]/[0.03] ${!isLast ? 'border-b md:border-b-0 md:border-r border-[#D8D2C8]' : ''}`}
    >
      <div className='flex items-center gap-2 mb-4 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#1E3A2F]'>
        <div className='w-5 h-[2px] bg-[#1E3A2F]' />
        {label}
      </div>
      <h3 className='font-serif text-[19px] font-normal leading-[1.4] mb-5'>
        {headline}
      </h3>
      <ul className='flex flex-col gap-2.5 list-none p-0'>
        {links.map((link, i) => (
          <li key={i} className='group flex items-start'>
            <button className='text-left text-xs text-[#555555] leading-relaxed border-l border-transparent pl-2.5 transition-all group-hover:text-[#1E3A2F] group-hover:border-[#1E3A2F]'>
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
