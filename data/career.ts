export type MetricTile = {
  value: string
  label: string
}

export type BulletItem = {
  title: string
  /** Optional inline annotation rendered in mono beside the title */
  tag?: string
  description: string
}

export type CareerEntry = {
  id: string
  company: { ko: string; en: string }
  role: { ko: string; en: string }
  tenure: { ko: string; en: string }
  period: string
  metrics: MetricTile[]
  bullets: BulletItem[]
}

export const careerEntries: CareerEntry[] = [
  {
    id: 'watchtec',
    company: { ko: '㈜ 와치텍', en: 'WATCHTEC' },
    role: {
      ko: '대리 · 기술지원 APM파트 파트장',
      en: 'Assistant Manager · APM Support Part Lead',
    },
    tenure: { ko: '3년 5개월', en: '3y 5m' },
    period: '2023.01 – 2025.05',
    metrics: [
      { value: 'BMT/POC', label: '컨설팅 · consulting' },
      { value: 'Build→Ops', label: '구축·배포·운영' },
      { value: 'QA', label: '품질관리 · quality' },
    ],
    bullets: [
      {
        title: 'IT 인프라 자원 모니터링 체계 구축 컨설팅',
        tag: '(BMT / POC)',
        description:
          'Infrastructure resource monitoring consulting — benchmark & proof-of-concept design.',
      },
      {
        title: '솔루션 구축 · 배포 및 유지보수',
        description: 'End-to-end solution build, deployment and maintenance.',
      },
      {
        title: '솔루션 품질관리 (QA)',
        description:
          'TC 정의 · 정규 테스트 · 기능 로직 검토 · 개발 기획 / Test-case design, regression, logic review & planning.',
      },
    ],
  },
]
