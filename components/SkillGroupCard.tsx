import { Pill } from '@/components/Pill'
import type { SkillGroup } from '@/data/skills'

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="flex flex-col gap-[14px] rounded-card border border-warm-500 bg-warm-100 p-5 shadow-card transition-colors hover:border-warm-400">
      {/* Icon + title */}
      <div className="flex items-center gap-[11px]">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[9px] border border-warm-500 bg-chip">
          <CardIcon id={group.iconId} />
        </span>
        <div>
          <p className="font-sans text-[15px] font-bold leading-[1.1] text-ink-500">
            {group.title.ko}
          </p>
          <p className="mt-[3px] font-mono text-[11px] font-medium text-ink-100">
            {group.title.en}
          </p>
        </div>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-[7px]">
        {group.items.map((item) => (
          <Pill key={item.label} highlight={item.highlight}>
            {item.label}
          </Pill>
        ))}
      </div>

      {/* Proficiency bar */}
      <div className="mt-auto h-[5px] overflow-hidden rounded-[3px] bg-warm-400">
        <div
          className="h-full rounded-[3px]"
          style={{
            width: `${group.proficiency}%`,
            background: 'linear-gradient(90deg, #a9bfa8, #8fa68e)',
          }}
        />
      </div>
    </div>
  )
}

function CardIcon({ id }: { id: SkillGroup['iconId'] }) {
  const shared = { width: 19, height: 19, viewBox: '0 0 24 24', fill: 'none', stroke: '#6e8a6c', strokeWidth: 1.7 }

  if (id === 'opensource') {
    return (
      <svg {...shared} strokeLinejoin="round" aria-hidden>
        <path d="M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z" />
        <path d="M4 7.5 L12 12 L20 7.5" />
        <path d="M12 12 V21" />
      </svg>
    )
  }

  if (id === 'server') {
    return (
      <svg {...shared} aria-hidden>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="0.7" fill="#6e8a6c" />
        <circle cx="7" cy="17" r="0.7" fill="#6e8a6c" />
      </svg>
    )
  }

  if (id === 'languages') {
    return (
      <svg {...shared} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="8 7 4 12 8 17" />
        <polyline points="16 7 20 12 16 17" />
      </svg>
    )
  }

  // collaboration
  return (
    <svg {...shared} aria-hidden>
      <rect x="3" y="4" width="5" height="16" rx="1" />
      <rect x="10" y="4" width="5" height="11" rx="1" />
      <rect x="17" y="4" width="5" height="8" rx="1" />
    </svg>
  )
}
