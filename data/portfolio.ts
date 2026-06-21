export type ProjectMetric = {
  value: string
  label: string
}

export type ImagePlaceholder = 'DASHBOARD SCREENSHOT' | 'ARCHITECTURE DIAGRAM' | 'PROJECT IMAGE'

export type Project = {
  id: string
  caseNumber: string
  imagePlaceholder: ImagePlaceholder
  title: string
  description: string
  tags: string[]
  metrics: ProjectMetric[]
}

export const projects: Project[] = [
  {
    id: 'observability-lab',
    caseNumber: 'CASE 01',
    imagePlaceholder: 'DASHBOARD SCREENSHOT',
    title: 'Open-Source Observability Collaboration Lab',
    description:
      'End-to-end observability stack built as a shared reference environment for BMT / POC engagements — Prometheus scraping, OTel tracing, and Grafana dashboards running on Kubernetes.',
    tags: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Kubernetes'],
    metrics: [
      { value: '−40%', label: 'MTTR' },
      { value: '8+', label: 'dashboards' },
    ],
  },
  {
    id: 'log-incident-watcher',
    caseNumber: 'CASE 02',
    imagePlaceholder: 'ARCHITECTURE DIAGRAM',
    title: 'Log Incident Watcher',
    description:
      'Real-time log aggregation and anomaly-detection pipeline — Kafka ingest, Logstash normalisation, OpenSearch indexing, and Python alerting with sub-second rule evaluation.',
    tags: ['Kafka', 'Logstash', 'OpenSearch', 'Python'],
    metrics: [
      { value: '5M+', label: 'logs/day' },
      { value: '99.9%', label: 'uptime' },
    ],
  },
  {
    id: 'web-cv',
    caseNumber: 'CASE 03',
    imagePlaceholder: 'PROJECT IMAGE',
    title: 'Web CV Portfolio',
    description:
      'This CV — Next.js 15 App Router, TypeScript, and Tailwind CSS. Static generation, custom SVG widgets (gauges, donut, heatmap), and a warm-tone design system from a bespoke HTML reference.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { value: '100', label: 'Lighthouse' },
      { value: '< 1s', label: 'TTI' },
    ],
  },
]
