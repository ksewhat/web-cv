# Content Maintenance Notes

## 01. Replace Hero Avatar Image

### Goal
Hero 영역의 `SK` placeholder를 실제 프로필 이미지로 교체한다.

### Image preparation
- Recommended size: 400 × 400 px
- Aspect ratio: 1:1 square
- Format: `.jpg` or `.png`
- Recommended filename: `avatar.jpg`
- Recommended file size: under 300KB if possible

### File location
Place the image here:
public/images/profile/avatar.jpg

## 02. Stack Mix and Competency Widget Update

### What changed

Updated the Overview dashboard widgets to better match the actual Skill Stack section.

Updated data/stackMix.ts from 3 categories to 4 categories.
Aligned Stack Mix category names with the Skill Stack section:
오픈소스 운영
서버 운영체제
프로그래밍 언어
협업·도구
Adjusted Stack Mix percentages based on the visible skill groups.
Updated components/StackMixDonut.tsx display value from 14+ to the current stack count label.
Added AI Agent Engineering as a new competency item in data/competency.ts.
Added a pastel yellow color for the AI Agent Engineering gauge.
Updated components/CompetencyGauges.tsx layout so the gauges align more predictably:
mobile: 1 column
sm and above: 2 × 2 grid

### Why it changed

The previous Stack Mix widget used broader terms such as 언어 and 협업 도구, while the Skill Stack section used more specific category names.
To make the dashboard and Skill Stack section feel consistent, the Stack Mix terminology was updated to match the actual skill categories.

The 14+ value in the donut chart was not automatically calculated. It was a hardcoded display value in components/StackMixDonut.tsx, so it was updated manually to better reflect the current number of visible stack items.

The competency widget was also expanded to include AI Agent Engineering as a current growth area. Since the number of competency items increased from 3 to 4, the layout was changed from flexible wrapping to a responsive grid for cleaner alignment.

### Files changed

data/stackMix.ts
data/competency.ts
components/StackMixDonut.tsx
components/CompetencyGauges.tsx
Implementation notes