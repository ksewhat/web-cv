import { learningItems } from '@/data/learning'

export function LearningBars() {
  return (
    <div className="flex flex-col rounded-card border border-warm-500 bg-warm-100 p-[18px] shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-sans text-[13px] font-bold leading-none text-ink-500">
          지금{' '}
          <span className="font-mono text-[11px] font-medium text-ink-100">
            Currently learning
          </span>
        </div>
        <span className="font-mono text-[10px] font-medium text-sage-600">● live</span>
      </div>
      <div className="flex flex-1 flex-col justify-around gap-[13px]">
        {learningItems.map((item) => (
          <div key={item.label}>
            <div className="mb-[7px] flex justify-between font-mono text-[12px] font-medium">
              <span className="text-ink-300">{item.label}</span>
              <span className="text-ink-50">{item.pct}%</span>
            </div>
            <div className="h-[6px] overflow-hidden rounded-[3px] bg-[#e7e3db]">
              <div
                className="h-full rounded-[3px]"
                style={{
                  width: `${item.pct}%`,
                  background: 'linear-gradient(90deg, #a9bfa8, #8fa68e)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
