
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 px-2 py-4 sm:px-4 sm:py-10">
  <div className="relative flex flex-col items-center gap-8 w-full max-w-xl sm:max-w-xl bg-white dark:bg-neutral-900 rounded-xl shadow-md p-4 pt-8 sm:p-8 sm:pt-12 animate-fade-in">
        <div className="relative">
          <Image
            src="/link-in-bio-pic.jpeg"
            alt="Profile picture"
            width={110}
            height={110}
            className="rounded-full border-2 border-neutral-300 dark:border-neutral-700 shadow-sm"
          />
        </div>
  <h1 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight mb-2 text-center">AHMED ABDULNASSER</h1>
  <p className="text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-normal mb-2">Welcome to my personal page. Explore my journey, resources, and answers to common questions.</p>





      </div>
      <footer className="mt-10 text-xs text-neutral-100 dark:text-neutral-400 text-center drop-shadow-lg">
        &copy; {new Date().getFullYear()} AHMED ABDULNASSER. All rights reserved.
      </footer>
  {/* Animations moved to Tailwind config or global CSS for compatibility */}
    </div>
  );
}
