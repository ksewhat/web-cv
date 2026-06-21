import { CompetencyGauges } from '@/components/CompetencyGauges'
import { StackMixDonut } from '@/components/StackMixDonut'
import { LearningBars } from '@/components/LearningBars'
import { ActivityHeatmap } from '@/components/ActivityHeatmap'
import { LifeTimeline } from '@/components/LifeTimeline'

export function OverviewWidgets() {
  return (
    <div className="mt-4">
      <div
        className="grid gap-[14px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 158px), 1fr))' }}
      >
        <CompetencyGauges />
        <StackMixDonut />
        <LearningBars />
        <ActivityHeatmap />
      </div>
      <div className="mt-4">
        <LifeTimeline />
      </div>
    </div>
  )
}
