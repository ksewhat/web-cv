import type { CareerEntry } from '@/data/career'
import { CareerBullet } from '@/components/CareerBullet'

export function CareerCard({ entry }: { entry: CareerEntry }) {
  return (
    <div className="rounded-[16px] border border-warm-500 bg-warm-100 p-6 shadow-card-lg">
      {/* Company + role + tenure badge */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-warm-400 pb-[18px]">
        <div>
          <p className="font-sans text-[20px] font-bold leading-[1.2] text-ink-500">
            {entry.company.ko}{' '}
            <span className="font-mono text-[14px] font-medium text-ink-100">
              {entry.company.en}
            </span>
          </p>
          <p className="mt-[7px] font-sans text-[13px] font-medium leading-[1.4] text-ink-200">
            {entry.role.ko}{' '}
            <span className="text-ink-50">/ {entry.role.en}</span>
          </p>
        </div>
        <span className="inline-flex items-center whitespace-nowrap rounded-lg border border-sage-300 bg-sage-500/[.14] px-3 py-2 font-mono text-[12px] font-medium text-sage-600">
          {entry.tenure.ko} · {entry.tenure.en}
        </span>
      </div>

      {/* Metric tiles */}
      <div
        className="mt-[18px] grid gap-3"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))' }}
      >
        {entry.metrics.map((m) => (
          <div
            key={m.value}
            className="rounded-[10px] border border-warm-400 bg-chip px-[14px] py-3"
          >
            <p className="font-sans text-[18px] font-bold leading-none text-sage-600">{m.value}</p>
            <p className="mt-[6px] font-mono text-[10px] font-medium text-ink-50">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Bullet points */}
      <div className="mt-[18px] flex flex-col gap-4">
        {entry.bullets.map((b) => (
          <CareerBullet key={b.title} {...b} />
        ))}
      </div>
    </div>
  )
}
