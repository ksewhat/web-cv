import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  const { email, github } = profile.contact
  const { ko, en } = profile.name

  return (
    <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-warm-400 pt-6">
      <div className="font-mono text-[12px] font-medium leading-[1.6] text-ink-50">
        © {year} {ko} · {en}
        <br />
        IT Engineer CV
      </div>
      <div className="flex flex-wrap gap-[10px]">
        <a
          href={email.href}
          className="rounded-lg border border-warm-500 bg-chip px-[13px] py-[9px] font-mono text-[12px] font-medium text-ink-300 transition-colors hover:border-sage-500 hover:text-ink-500"
        >
          ✉ {email.label}
        </a>
        <a
          href={github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-warm-500 bg-chip px-[13px] py-[9px] font-mono text-[12px] font-medium text-ink-300 transition-colors hover:border-sage-500 hover:text-ink-500"
        >
          ⌥ {github.label}
        </a>
      </div>
    </footer>
  )
}
