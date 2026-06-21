export type TimelineTag = 'LIFE' | 'EDU' | 'WORK'

export type TimelineEvent = {
  tag: TimelineTag
  date: string
  title: string
  description: string
}

export const timelineEvents: TimelineEvent[] = [
  {
    tag: 'LIFE',
    date: '1994.02.27',
    title: '출생',
    description: 'Born',
  },
  {
    tag: 'EDU',
    date: '2015 – 2018',
    title: 'Baruch College',
    description: 'Business Administration',
  },
  {
    tag: 'EDU',
    date: '2019 – 2022',
    title: '세종대학교 졸업',
    description: '경영학과 · Business Admin.',
  },
  {
    tag: 'WORK',
    date: '2023.01 – 2025.05',
    title: '㈜ 와치텍',
    description: 'APM 파트장 · 재직',
  },
]
