import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section className="pt-[30px]">
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))' }}>
        <IdentityCard />
        <StatGrid />
      </div>
    </section>
  )
}

function IdentityCard() {
  const { initials, name, location, titles, bio, contact } = profile

  return (
    <div className="flex flex-col gap-[18px] rounded-[18px] border border-warm-500 p-[26px] shadow-card-lg"
      style={{ background: 'linear-gradient(160deg, #f7f5f1, #efece6)' }}>

      {/* Avatar + name */}
      <div className="flex items-center gap-[18px]">
        <div
          className="flex h-20 w-20 flex-none items-center justify-content-center rounded-2xl border border-warm-500 font-mono text-2xl font-bold tracking-wider text-sage-600"
          style={{
            background: 'repeating-linear-gradient(135deg, #e6e2da, #e6e2da 7px, #efece6 7px, #efece6 14px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {initials}
        </div>
        <div>
          <p className="mb-[9px] font-mono text-[12px] font-medium text-ink-100">
            {location.ko} · {location.en}
          </p>
          <h1 className="text-[clamp(28px,5vw,38px)] font-bold leading-none tracking-[-0.02em] text-ink-500">
            {name.ko}
          </h1>
          <p className="mt-[6px] font-mono text-[15px] font-semibold text-ink-100">
            {name.en}
          </p>
        </div>
      </div>

      {/* Title line */}
      <p className="font-mono text-[14px] font-semibold leading-relaxed text-ink-300">
        {titles.map((t, i) => (
          <span key={t}>
            {t}
            {i < titles.length - 1 && <span className="text-sage-400"> · </span>}
          </span>
        ))}
      </p>

      {/* Bio */}
      <p className="text-[14px] leading-relaxed text-ink-200">
        {bio.ko}{' '}
        <span className="text-ink-50">{bio.en}</span>
      </p>

      {/* Contact chips */}
      <div className="flex flex-wrap gap-2">
        <Chip>📍 {location.ko}</Chip>
        <Chip href={contact.phone.href}>{contact.phone.label}</Chip>
        <Chip href={contact.email.href}>{contact.email.label}</Chip>
        <Chip href={contact.github.href} external>{contact.github.label}</Chip>
      </div>
    </div>
  )
}

function Chip({ children, href, external }: {
  children: React.ReactNode
  href?: string
  external?: boolean
}) {
  const cls =
    'inline-block rounded-lg border border-warm-500 bg-chip px-[11px] py-2 font-mono text-[12px] font-medium text-ink-300 transition-colors hover:border-sage-500'

  if (href) {
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
        {children}
      </a>
    )
  }
  return <span className={cls}>{children}</span>
}

function StatGrid() {
  const { stats } = profile
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[14px]">
      {stats.map((stat) => (
        <StatTile key={stat.label.en} stat={stat} />
      ))}
    </div>
  )
}

type Stat = (typeof profile.stats)[number]

function StatTile({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col justify-between gap-[10px] rounded-card border border-warm-500 bg-warm-100 p-4 shadow-card">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink-100">
        {stat.label.ko} · {stat.label.en}
      </p>

      {stat.variant === 'sparkline' && (
        <>
          <p className="font-sans text-[28px] font-bold leading-none text-ink-500">
            {stat.value}
          </p>
          <Sparkline />
        </>
      )}

      {stat.variant === 'bars' && (
        <>
          <p className="font-sans text-[28px] font-bold leading-none text-ink-500">
            14<span className="text-[15px] text-sage-600">+</span>
          </p>
          <MiniBarChart />
        </>
      )}

      {stat.variant === 'text' && (
        <>
          <p className="font-sans text-[21px] font-bold leading-tight text-ink-500">
            {stat.label.en === 'Mindset' ? (
              <>24<span className="text-sage-400">/</span>7</>
            ) : (
              stat.value
            )}
          </p>
          {stat.detail && (
            <p className="font-mono text-[12px] font-medium text-ink-100">{stat.detail}</p>
          )}
        </>
      )}
    </div>
  )
}

function Sparkline() {
  return (
    <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
      <polyline
        points="0,20 14,16 28,17 42,10 56,12 70,6 84,8 100,3"
        fill="none"
        stroke="#8fa68e"
        strokeWidth="2"
      />
    </svg>
  )
}

function MiniBarChart() {
  const heights = [60, 90, 45, 75, 100, 55]
  const colors = ['#c3d3c1', '#9bb59a', '#8fa68e', '#c3d3c1', '#9bb59a', '#8fa68e']
  return (
    <div className="flex h-6 items-end gap-1">
      {heights.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm"
          style={{ height: `${h}%`, background: colors[i] }}
        />
      ))}
    </div>
  )
}
