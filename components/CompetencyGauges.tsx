import { competencyItems } from '@/data/competency'

const CIRCUMFERENCE = 2 * Math.PI * 35 // 219.9

function Gauge({ score, color }: { score: number; color: string }) {
  const dash = ((score / 100) * CIRCUMFERENCE).toFixed(1)
  const total = CIRCUMFERENCE.toFixed(1)
  return (
    <div className="relative h-[70px] w-[70px]">
      <svg width="70" height="70" viewBox="0 0 84 84">
        <circle cx="42" cy="42" r="35" fill="none" stroke="#e2ddd5" strokeWidth="7" />
        <circle
          cx="42"
          cy="42"
          r="35"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${total}`}
          transform="rotate(-90 42 42)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-sans text-[17px] font-bold leading-none text-ink-500">
        {score}
      </div>
    </div>
  )
}

export function CompetencyGauges() {
  return (
    <div className="flex flex-col rounded-card border border-warm-500 bg-warm-100 p-[18px] shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-sans text-[13px] font-bold leading-none text-ink-500">
          역량 <span className="font-mono text-[11px] font-medium text-ink-100">Competency</span>
        </div>
        <span className="font-mono text-[10px] font-medium text-ink-50">self-rated</span>
      </div>
      <div className="grid flex-1 grid-cols-1 place-items-center gap-y-7 sm:grid-cols-2 sm:gap-x-8">
        {competencyItems.map((item) => (
          <div key={item.label.en} className="flex min-w-0 flex-col items-center gap-[9px] text-center">
            <Gauge score={item.score} color={item.color} />
            <div className="min-h-[34px] text-center font-sans text-[11px] font-medium leading-[1.3] text-ink-100">
              {item.label.ko}
              <br />
              {item.label.en}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
