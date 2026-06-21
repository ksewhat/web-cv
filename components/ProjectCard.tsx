import type { Project } from '@/data/portfolio'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-warm-500 bg-warm-100 shadow-card transition-colors hover:border-sage-500">
      {/* Image placeholder */}
      <div
        className="relative flex h-[140px] items-center justify-center border-b border-warm-500"
        style={{
          background:
            'repeating-linear-gradient(135deg, #e6e2da, #e6e2da 9px, #efece6 9px, #efece6 18px)',
        }}
      >
        <span className="font-mono text-[11px] font-medium tracking-[.1em] text-ink-50">
          {project.imagePlaceholder}
        </span>
        <span className="absolute left-[11px] top-[11px] rounded-[5px] border border-sage-300 bg-sage-500/[.14] px-[7px] py-[4px] font-mono text-[10px] font-semibold text-sage-600">
          {project.caseNumber}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-[11px] p-[18px]">
        <div className="font-sans text-[16px] font-bold leading-[1.3] text-ink-500">
          {project.title}
        </div>
        <p className="m-0 font-sans text-[13px] leading-[1.55] text-ink-200">
          {project.description}
        </p>

        {/* Tech tags — rectangular chips, not pills */}
        <div className="mt-auto flex flex-wrap gap-[6px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[6px] border border-warm-500 px-[8px] py-[5px] font-mono text-[11px] font-medium text-ink-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics row */}
        <div className="flex gap-[16px] border-t border-warm-400 pt-[11px]">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-sans text-[17px] font-bold leading-none text-sage-600">
                {m.value}
              </div>
              <div className="mt-[4px] font-mono text-[10px] font-medium text-ink-50">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
