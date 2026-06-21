export type StackSegment = {
  label: string
  pct: number
  color: string
}

export const stackSegments: StackSegment[] = [
  {
    label: '오픈소스 운영',
    pct: 55,
    color: '#8fa68e',
  },
  {
    label: '서버 운영체제',
    pct: 10,
    color: '#b9cdb7',
  },
  {
    label: '프로그래밍 언어',
    pct: 20,
    color: '#93acbd',
  },
  {
    label: '협업·도구',
    pct: 15,
    color: '#c6a394',
  },
]