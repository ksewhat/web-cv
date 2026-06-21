type PillProps = {
  children: React.ReactNode
  highlight?: boolean
}

export function Pill({ children, highlight = false }: PillProps) {
  return (
    <span
      className={[
        'inline-block rounded-full border px-[11px] py-[7px] font-mono text-[12px] font-medium leading-none transition-colors',
        highlight
          ? 'border-sage-300 bg-sage-500/[.14] text-sage-600'
          : 'border-warm-500 bg-chip text-ink-300 hover:border-sage-500',
      ].join(' ')}
    >
      {children}
    </span>
  )
}
