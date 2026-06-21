'use client'

import { useEffect, useState } from 'react'

export function TopBar() {
  const [clock, setClock] = useState('--:--:--')

  useEffect(() => {
    function tick() {
      setClock(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Seoul',
          hour12: false,
        }),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="sticky top-0 z-50 border-b border-warm-500 bg-warm-300/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-3 px-[clamp(1rem,4vw,2rem)] py-[11px]">
        {/* Left: brand + path */}
        <div className="flex items-center gap-[10px]">
          <span className="h-[9px] w-[9px] flex-none rounded-full bg-sage-500 animate-pulse" />
          <span className="font-mono text-[14px] font-semibold tracking-[-0.01em] text-ink-400">
            seungeun<span className="text-sage-600">.dev</span>
          </span>
          <span className="font-mono text-[12px] font-medium text-ink-50">
            / engineer / overview
          </span>
        </div>

        {/* Right: clock + available */}
        <div className="flex items-center gap-[14px]">
          <span className="flex items-center gap-2 font-mono text-[12px] font-medium text-ink-200">
            <span className="text-ink-50">KST</span>
            <span className="text-ink-300">{clock}</span>
          </span>
          <span className="flex items-center gap-[7px] rounded-full border border-sage-300 bg-sage-500/[.14] px-[11px] py-[7px] font-mono text-[11px] font-semibold text-sage-600">
            <span className="h-[7px] w-[7px] flex-none rounded-full bg-sage-500 animate-pulse" />
            AVAILABLE
          </span>
        </div>
      </div>
    </div>
  )
}
