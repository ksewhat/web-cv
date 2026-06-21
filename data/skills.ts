export type SkillItem = {
  label: string
  highlight?: boolean
}

export type SkillGroup = {
  id: string
  title: { ko: string; en: string }
  iconId: 'opensource' | 'server' | 'languages' | 'collaboration'
  items: SkillItem[]
  /** 0–100, drives the proficiency bar fill */
  proficiency: number
  layout: 'full' | 'grid'
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'opensource',
    title: { ko: '오픈소스 운영', en: 'Open-Source Operation' },
    iconId: 'opensource',
    items: [
      { label: 'Docker' },
      { label: 'Kubernetes' },
      { label: 'Elasticsearch / OpenSearch' },
      { label: 'Logstash' },
      { label: 'Kafka' },
      { label: 'MariaDB' },
      { label: 'Tomcat' },
      { label: 'Grafana', highlight: true },
      { label: 'Prometheus', highlight: true },
      { label: 'OpenTelemetry', highlight: true },
      { label: 'OpenStack' },
    ],
    proficiency: 94,
    layout: 'full',
  },
  {
    id: 'server-os',
    title: { ko: '서버 운영체제', en: 'Server OS' },
    iconId: 'server',
    items: [{ label: 'Linux / Unix' }, { label: 'Windows' }],
    proficiency: 82,
    layout: 'grid',
  },
  {
    id: 'languages',
    title: { ko: '프로그래밍 언어', en: 'Languages' },
    iconId: 'languages',
    items: [
      { label: 'Python' },
      { label: 'Go' },
      { label: 'Java' },
      { label: 'Bash' },
    ],
    proficiency: 70,
    layout: 'grid',
  },
  {
    id: 'collaboration',
    title: { ko: '협업 · 도구', en: 'Collaboration' },
    iconId: 'collaboration',
    items: [
      { label: 'Google Workspace' },
      { label: 'Redmine' },
      { label: 'Jira' },
    ],
    proficiency: 78,
    layout: 'grid',
  },
]
