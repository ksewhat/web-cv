import { TopBar } from '@/components/TopBar'
import { Hero } from '@/components/Hero'

export default function Page() {
  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[1140px] px-[clamp(1rem,4vw,2rem)] pb-16">
        <Hero />
      </main>
    </>
  )
}
