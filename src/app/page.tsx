
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-10">
      <div className="relative flex flex-col items-center gap-8 max-w-md w-full backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-3xl shadow-2xl border border-white/20 dark:border-black/30 p-8 pt-12 animate-fade-in">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 p-[3px] animate-spin-slow"></span>
          <Image
            src="/link-in-bio-pic.jpeg"
            alt="Profile picture"
            width={110}
            height={110}
            className="relative rounded-full border-4 border-white dark:border-neutral-800 shadow-xl z-10"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight drop-shadow-lg">AHMED ABDULNASSER</h1>
        <p className="text-center text-lg text-neutral-700 dark:text-neutral-300 font-medium mb-2">Web Developer <span className="mx-1">|</span> Building cool stuff. Welcome to my link-in-bio page!</p>
        <div className="flex flex-col gap-4 w-full mt-2">
          <Button asChild className="w-full transition-all duration-200 hover:scale-105 hover:bg-indigo-500/80 text-lg font-semibold shadow-md">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.75v14.5m7.25-7.25H4.75" />
                </svg>
                GitHub
              </span>
            </a>
          </Button>
          <Button asChild className="w-full transition-all duration-200 hover:scale-105 hover:bg-pink-500/80 text-lg font-semibold shadow-md" variant="outline">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.75l7.5 7.5-7.5 7.5" />
                </svg>
                Twitter
              </span>
            </a>
          </Button>
          <Button asChild className="w-full transition-all duration-200 hover:scale-105 hover:bg-purple-500/80 text-lg font-semibold shadow-md" variant="secondary">
            <a href="mailto:your@email.com">
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25v7.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 15.75v-7.5M3 8.25l9 6.75 9-6.75" />
                </svg>
                Email Me
              </span>
            </a>
          </Button>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 transition-colors">Portfolio</a>
          <a href="#" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-pink-500 transition-colors">Blog</a>
        </div>
      </div>
      <footer className="mt-10 text-xs text-neutral-100 dark:text-neutral-400 text-center drop-shadow-lg">
        &copy; {new Date().getFullYear()} AHMED ABDULNASSER. All rights reserved.
      </footer>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
