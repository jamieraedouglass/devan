export function RecentItem({
  type,
  title,
  meta,
}: {
  type: string;
  title: string;
  meta: string;
}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-[80px_1fr_auto] gap-2 sm:gap-5 py-4.5 border-b border-[#D8D2C8] items-baseline cursor-pointer group'>
      <div className='text-[9px] font-semibold tracking-widest uppercase text-[#1E3A2F]'>
        {type}
      </div>
      <div className='font-serif text-[17px] font-normal transition-colors group-hover:text-[#1E3A2F] leading-snug'>
        {title}
      </div>
      <div className='text-[11px] text-[#AAAAAA] sm:text-right whitespace-nowrap'>
        {meta}
      </div>
    </div>
  );
}
