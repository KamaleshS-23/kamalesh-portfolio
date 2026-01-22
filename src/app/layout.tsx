import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackgroundEffects from '@/components/layout/BackgroundEffects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kamalesh | Full Stack Developer',
  description: 'Creative Full Stack Developer crafting digital experiences',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark"> {/* Force dark mode */}
      <body
        className={`${inter.className} dark:bg-midnight-blue overflow-x-hidden relative`}
      >
        <BackgroundEffects />

        {/* Layout Components */}
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
