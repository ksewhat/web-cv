import { skillGroups } from '@/data/skills'
import { SectionHeader } from '@/components/SectionHeader'
import { SkillGroupCard } from '@/components/SkillGroupCard'

export function SkillStack() {
  const fullGroup = skillGroups.find((g) => g.layout === 'full')!
  const gridGroups = skillGroups.filter((g) => g.layout === 'grid')

  return (
    <section className="mt-12">
      <SectionHeader number="01" title="기술스택" subtitle="Skill Stack" />

      <div className="flex flex-col gap-4">
        {/* Full-width card */}
        <SkillGroupCard group={fullGroup} />

        {/* 3-column grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))' }}
        >
          {gridGroups.map((group) => (
            <SkillGroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
