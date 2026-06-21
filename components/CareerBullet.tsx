import type { BulletItem } from '@/data/career'

export function CareerBullet({ title, tag, description }: BulletItem) {
  return (
    <div className="flex gap-[14px]">
      <span
        className="mt-[6px] h-[9px] w-[9px] flex-none rounded-full bg-sage-500"
        style={{ boxShadow: '0 0 0 4px rgba(143,166,142,.16)' }}
      />
      <div>
        <p className="font-sans text-[15px] font-semibold leading-[1.45] text-ink-400">
          {title}
          {tag && (
            <span className="ml-[6px] font-mono text-[12px] font-medium text-ink-50">{tag}</span>
          )}
        </p>
        <p className="mt-[3px] font-sans text-[13px] leading-[1.5] text-ink-200">{description}</p>
      </div>
    </div>
  )
}
