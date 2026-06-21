import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: '김승은 · IT Engineer CV',
  description: 'APM · DevOps · Fullstack — Seungeun Kim',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={jetbrainsMono.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen font-sans text-ink-400 antialiased">
        {/* Grain overlay */}
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none fixed inset-0 h-full w-full"
          style={{ zIndex: -1 }}
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" opacity="0.042" />
        </svg>

        {children}
      </body>
    </html>
  )
}
