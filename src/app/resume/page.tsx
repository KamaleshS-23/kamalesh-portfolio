import Image from 'next/image'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Resume image is served from <code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">public/image/resume.png</code>
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/image/resume.png"
              download
              className="px-5 py-3 rounded-xl border-2 border-coral dark:border-cyan-glow text-coral dark:text-cyan-glow font-medium hover:bg-coral/10 dark:hover:bg-cyan-glow/10 transition-all duration-300"
            >
              Download Image
            </a>
            <Link
              href="/"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-coral to-violet text-white font-medium hover:opacity-95 transition-opacity"
            >
              Back Home
            </Link>
          </div>
        </div>

        <div className="bg-white/50 dark:bg-navy-blue/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-2xl p-3 md:p-6 shadow-xl">
          <Image
            src="/image/resume.png"
            alt="Resume"
            width={900}
            height={1272}
            priority
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </main>
  )
}

