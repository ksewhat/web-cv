import { heatmapCells } from '@/data/heatmap'

const LEVELS = [
  { bg: '#e3ded5', border: '1px solid #dcd7cf' },
  { bg: '#cdd9c8', border: undefined },
  { bg: '#b3c9ad', border: undefined },
  { bg: '#97b691', border: undefined },
  { bg: '#7ba074', border: undefined },
]

export function ActivityHeatmap() {
  return (
    <div className="flex flex-col rounded-card border border-warm-500 bg-warm-100 p-[18px] shadow-card">
      <div className="mb-[14px] flex flex-wrap items-center justify-between gap-2">
        <div className="font-sans text-[13px] font-bold leading-none text-ink-500">
          활동 <span className="font-mono text-[11px] font-medium text-ink-100">Activity</span>
        </div>
        <div className="flex items-center gap-[6px] font-mono text-[10px] font-medium text-ink-50">
          Less
          {LEVELS.map((l, i) => (
            <span
              key={i}
              className="h-[11px] w-[11px] flex-none rounded-[2px]"
              style={{ background: l.bg, border: l.border }}
            />
          ))}
          More
        </div>
      </div>
      <div
        className="min-h-[77px] flex-1"
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(7, 1fr)',
          gridAutoFlow: 'column',
          gridAutoColumns: '1fr',
          gap: '3px',
        }}
      >
        {heatmapCells.map((level, i) => {
          const l = LEVELS[level] ?? LEVELS[0]
          return (
            <span
              key={i}
              className="rounded-[2px]"
              style={{ background: l.bg, border: l.border }}
            />
          )
        })}
      </div>
    </div>
  )
}
