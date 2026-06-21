import { projects } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { ProjectCard } from '@/components/ProjectCard'

export function PortfolioSection() {
  return (
    <section className="mt-12">
      {/* SectionHeader carries mb-[22px]; pull comment up by 14px so effective gap is 8px */}
      <SectionHeader number="03" title="포토폴리오" subtitle="Portfolio" />
      <p className="-mt-[14px] mb-5 font-mono text-[12px] font-medium leading-[1.5] text-ink-50">
        // case-study cards
      </p>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
