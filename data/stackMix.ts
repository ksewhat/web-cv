export type StackSegment = {
  label: string
  pct: number
  color: string
}

export const stackSegments: StackSegment[] = [
  { label: '오픈소스 운영', pct: 55, color: '#8fa68e' },
  { label: '언어', pct: 25, color: '#93acbd' },
  { label: '협업 도구', pct: 20, color: '#c6a394' },
]
