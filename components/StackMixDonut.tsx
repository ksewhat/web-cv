import { stackSegments } from '@/data/stackMix'

const C = 2 * Math.PI * 40 // 251.3

export function StackMixDonut() {
  let cumulative = 0
  const segments = stackSegments.map((seg) => {
    const dash = (seg.pct / 100) * C
    const offset = -cumulative
    cumulative += dash
    return { ...seg, dash, offset }
  })

  return (
    <div className="flex flex-col rounded-card border border-warm-500 bg-warm-100 p-[18px] shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-sans text-[13px] font-bold leading-none text-ink-500">
          스택 구성{' '}
          <span className="font-mono text-[11px] font-medium text-ink-100">Stack mix</span>
        </div>
        <span className="font-mono text-[10px] font-medium text-ink-50">focus</span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-[18px]">
        <div className="relative h-[112px] w-[112px] flex-none">
          <svg
            width="112"
            height="112"
            viewBox="0 0 108 108"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle cx="54" cy="54" r="40" fill="none" stroke="#e6e2da" strokeWidth="14" />
            {segments.map((seg) => (
              <circle
                key={seg.label}
                cx="54"
                cy="54"
                r="40"
                fill="none"
                stroke={seg.color}
                strokeWidth="14"
                strokeDasharray={`${seg.dash.toFixed(1)} ${C.toFixed(1)}`}
                strokeDashoffset={seg.offset.toFixed(1)}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-sans text-[22px] font-bold leading-none text-ink-500">14+</span>
            <span className="mt-[3px] font-mono text-[9px] font-medium text-ink-50">stacks</span>
          </div>
        </div>
        <div className="flex flex-col gap-[11px] font-mono text-[12px] font-medium">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
              <span
                className="h-[10px] w-[10px] flex-none rounded-[3px]"
                style={{ background: seg.color }}
              />
              <span className="text-ink-300">{seg.label}</span>
              <span className="ml-auto pl-2 text-ink-50">{seg.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
