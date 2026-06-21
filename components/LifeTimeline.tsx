import { timelineEvents, type TimelineTag } from '@/data/timeline'

type TagStyle = {
  dot: { border: string; shadow: string }
  badge: { color: string; border: string; bg: string }
}

const TAG_STYLES: Record<TimelineTag, TagStyle> = {
  LIFE: {
    dot: { border: '#c6a394', shadow: '0 0 0 4px rgba(198,163,148,.16)' },
    badge: { color: '#b07f6c', border: '#ddc3b8', bg: 'rgba(198,163,148,.16)' },
  },
  EDU: {
    dot: { border: '#93acbd', shadow: '0 0 0 4px rgba(147,172,189,.16)' },
    badge: { color: '#5f7e92', border: '#c0cfd8', bg: 'rgba(147,172,189,.16)' },
  },
  WORK: {
    dot: { border: '#8fa68e', shadow: '0 0 0 4px rgba(143,166,142,.18)' },
    badge: { color: '#6e8a6c', border: '#b9cdb7', bg: 'rgba(143,166,142,.16)' },
  },
}

export function LifeTimeline() {
  return (
    <div className="rounded-card border border-warm-500 bg-warm-100 p-[22px] shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-sans text-[13px] font-bold leading-none text-ink-500">
          라이프 타임라인{' '}
          <span className="font-mono text-[11px] font-medium text-ink-100">Life Timeline</span>
        </div>
        <span className="font-mono text-[10px] font-medium text-ink-50">
          event log · {timelineEvents.length} records
        </span>
      </div>
      <div
        className="mt-5"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(168px, 1fr))' }}
      >
        {timelineEvents.map((event) => {
          const s = TAG_STYLES[event.tag]
          return (
            <div key={event.title} className="relative pb-[6px] pl-[14px] pr-[14px]">
              {/* connector rule */}
              <div className="absolute inset-x-0 top-[8px] h-[2px] bg-warm-400" />
              {/* dot */}
              <span
                className="relative block h-[16px] w-[16px] rounded-full bg-warm-100"
                style={{ border: `2px solid ${s.dot.border}`, boxShadow: s.dot.shadow }}
              />
              <div className="mt-[14px] flex flex-col gap-[6px]">
                <span
                  className="self-start rounded-[5px] px-[7px] py-[4px] font-mono text-[9px] font-semibold leading-none tracking-[.08em]"
                  style={{
                    color: s.badge.color,
                    border: `1px solid ${s.badge.border}`,
                    background: s.badge.bg,
                  }}
                >
                  {event.tag}
                </span>
                <div className="font-mono text-[13px] font-semibold leading-none text-ink-200">
                  {event.date}
                </div>
                <div className="font-sans text-[14px] font-bold leading-[1.35] text-ink-500">
                  {event.title}
                </div>
                <div className="font-sans text-[12px] leading-[1.4] text-ink-100">
                  {event.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
