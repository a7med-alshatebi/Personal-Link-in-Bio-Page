
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 px-2 py-4 sm:px-4 sm:py-10">
      <div className="relative flex flex-col items-center gap-8 w-full max-w-xl sm:max-w-xl bg-white dark:bg-neutral-900 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-800 p-4 pt-8 sm:p-8 sm:pt-12 animate-fade-in">
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
        {/* FAQ Section */}
  <section className="w-full mt-4">
          <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Frequently Asked Questions</h2>
          <ul className="space-y-3">
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <span className="font-medium text-neutral-800 dark:text-neutral-100">What technologies do you use?</span>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">I use modern web technologies like React, Next.js, and Tailwind CSS for most of my projects.</p>
            </li>
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <span className="font-medium text-neutral-800 dark:text-neutral-100">How can I collaborate with you?</span>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">Feel free to reach out via email or connect on LinkedIn for collaboration opportunities.</p>
            </li>
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <span className="font-medium text-neutral-800 dark:text-neutral-100">Do you offer mentorship?</span>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">Yes, I occasionally mentor aspiring developers. Contact me for details.</p>
            </li>
          </ul>
        </section>

        {/* Timeline Section */}
  <section className="w-full mt-4">
          <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 mb-2">My Journey</h2>
          <ol className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-2 sm:pl-4 space-y-4">
            <li>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">2020: Started learning web development.</div>
            </li>
            <li>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">2022: Built my first full-stack project.</div>
            </li>
            <li>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">2023: Joined a remote team and contributed to open source.</div>
            </li>
            <li>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">2025: Launched this personal site.</div>
            </li>
          </ol>
        </section>

        {/* Resources Section */}
  <section className="w-full mt-4">
          <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Resources</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-800 dark:text-neutral-100 hover:underline">Next.js Docs</a>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs mt-1">Official documentation for Next.js.</p>
            </li>
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-800 dark:text-neutral-100 hover:underline">Tailwind CSS Docs</a>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs mt-1">Learn how to style with Tailwind CSS.</p>
            </li>
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-800 dark:text-neutral-100 hover:underline">shadcn/ui Docs</a>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs mt-1">Explore shadcn/ui components.</p>
            </li>
            <li className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 sm:p-4 shadow-sm">
              <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-800 dark:text-neutral-100 hover:underline">React Docs</a>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs mt-1">React official learning resources.</p>
            </li>About Me section
Skills with colorful badges
Social links with interactive buttons
Featured Projects grid
Testimonials
Contact form
          </ul>
        </section>
      </div>
      <footer className="mt-10 text-xs text-neutral-100 dark:text-neutral-400 text-center drop-shadow-lg">
        &copy; {new Date().getFullYear()} AHMED ABDULNASSER. All rights reserved.
      </footer>
  {/* Animations moved to Tailwind config or global CSS for compatibility */}
    </div>
  );
}
