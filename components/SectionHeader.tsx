type SectionHeaderProps = {
  number: string
  title: string
  subtitle: string
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-[22px] flex flex-wrap items-baseline gap-[14px]">
      <span className="font-mono text-[13px] font-semibold text-sage-600">{number}</span>
      <h2 className="m-0 font-sans text-[clamp(22px,3.5vw,30px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink-500">
        {title}
      </h2>
      <span className="font-mono text-[14px] font-medium text-ink-100">{subtitle}</span>
      <span
        className="min-w-[40px] flex-1"
        style={{ height: '1px', background: 'linear-gradient(90deg, #d2ccc2, transparent)' }}
      />
    </div>
  )
}
