export type CompetencyItem = {
  label: { ko: string; en: string }
  score: number
  color: string
}

export const competencyItems: CompetencyItem[] = [
  { label: { ko: 'SW 엔지니어링', en: 'SW Engineering' }, score: 95, color: '#8fa68e' },
  { label: { ko: '오저버빌리티', en: 'Observability' }, score: 88, color: '#93acbd' },
  { label: { ko: '프로젝트 관리', en: 'PM' }, score: 80, color: '#c6a394' },
  { label: { ko: 'AI 엔지니어링', en: 'AI Engineering' }, score: 60, color: '#d8c98f' },
]
