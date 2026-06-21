export const profile = {
  initials: 'SK',
  name: { ko: '김승은', en: 'Seungeun Kim' },
  location: { ko: '서울 구로구', en: 'Seoul' },
  titles: ['IT Engineer', 'DevOps', 'Fullstack'],
  bio: {
    ko: 'APM·인프라 모니터링 체계 구축과 운영. 관측 가능성으로 시스템을 읽고 개선합니다.',
    en: 'Building & operating observability and infra-monitoring systems.',
  },
  contact: {
    phone: { label: '010-6618-2028', href: 'tel:01066182028' },
    email: { label: 'jcqwhat@gmail.com', href: 'mailto:jcqwhat@gmail.com' },
    github: { label: 'github.com/ksewhat', href: 'https://github.com/ksewhat' },
  },
  stats: [
    {
      label: { ko: '경력', en: 'Experience' },
      value: '3y 5m',
      detail: null,
      variant: 'sparkline' as const,
    },
    {
      label: { ko: '스택', en: 'Stacks' },
      value: '14+',
      detail: null,
      variant: 'bars' as const,
    },
    {
      label: { ko: '역할', en: 'Role' },
      value: 'APM 파트장',
      detail: 'Part Lead · 대리',
      variant: 'text' as const,
    },
    {
      label: { ko: '지향', en: 'Mindset' },
      value: '24/7',
      detail: 'uptime-first',
      variant: 'text' as const,
    },
  ],
} as const
