import { careerEntries } from '@/data/career'
import { SectionHeader } from '@/components/SectionHeader'
import { CareerCard } from '@/components/CareerCard'

export function CareerSection() {
  return (
    <section className="mt-12">
      <SectionHeader number="02" title="경력" subtitle="Career" />
      <div className="flex flex-col gap-4">
        {careerEntries.map((entry) => (
          <CareerCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  )
}
