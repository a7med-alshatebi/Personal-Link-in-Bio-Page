"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black px-2 sm:px-4 py-8 animate-fade-in">
      <div className="w-full max-w-md flex flex-col items-center gap-10">
        {/* Profile Card */}
        <div className="w-full rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-5 border border-gray-800 bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
          <div className="relative mb-2">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 p-[3px] animate-spin-slow"></span>
            <span className="absolute inset-0 rounded-full blur-xl opacity-40 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400"></span>
            <Image
              src="/link-in-bio-pic.jpeg"
              alt="Profile picture"
              width={110}
              height={110}
              className="relative rounded-full border-4 border-white dark:border-neutral-800 shadow-xl z-10"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 tracking-tight drop-shadow-lg text-center">AHMED ABDULNASSER</h1>
          <p className="text-center text-lg text-neutral-300 font-medium">Web Developer <span className="mx-1">|</span> Building cool stuff. Welcome to my link-in-bio page!</p>
        </div>
        {/* Links Card */}
        <div className="w-full rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-gray-800 bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl">
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
          <Button asChild className="w-full transition-all duration-200 hover:scale-105 hover:bg-indigo-500/80 text-lg font-semibold shadow-md" variant="ghost">
            <a href="#">
              <span className="inline-flex items-center gap-2">
                {/* You can add an icon here if desired */}
                Portfolio
              </span>
            </a>
          </Button>
        </div>
        {/* Footer */}
        <footer className="w-full bg-gray-900/80 dark:bg-black/60 rounded-xl shadow-lg py-6 px-4 mt-8 flex flex-col items-center justify-center text-xs text-neutral-400 text-center font-medium border-t border-gray-800">
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 rounded-full mb-4 opacity-60"></div>
          <span>&copy; {new Date().getFullYear()} <span className="font-semibold text-indigo-300">a7med-alshatebi</span>. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
