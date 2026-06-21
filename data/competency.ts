export type CompetencyItem = {
  label: { ko: string; en: string }
  score: number
  color: string
}

export const competencyItems: CompetencyItem[] = [
  { label: { ko: '모니터링', en: 'APM' }, score: 95, color: '#8fa68e' },
  { label: { ko: '인프라', en: 'DevOps' }, score: 88, color: '#93acbd' },
  { label: { ko: '백엔드', en: 'Backend' }, score: 80, color: '#c6a394' },
]
