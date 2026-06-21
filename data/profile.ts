export const profile = {
  initials: 'SK',
  
  avatar: {
    src: '/images/profile/avatar.jpg',
    alt: 'Seungeun Kim profile image',
  },

  name: { ko: '김승은', en: 'Seungeun Kim' },
  location: { ko: '서울 구로구', en: 'Seoul' },
  titles: ['IT Engineer', 'AI Specialist', 'DevOps'],
  bio: {
    ko: '기술을 서비스로 실현하며, 안정적인 IT 환경과 더 나은 사용자 경험을 만들어갑니다.',
    en: 'Turning technology into reliable services and better user experiences.',
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
