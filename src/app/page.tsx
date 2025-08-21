
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 px-4 py-10">
      <div className="flex flex-col items-center gap-6 max-w-md w-full">
        <Image
          src="/avatar.png"
          alt="Profile picture"
          width={96}
          height={96}
          className="rounded-full border-4 border-neutral-300 dark:border-neutral-700 shadow-lg"
        />
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Your Name</h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400">Web Developer | Building cool stuff. Welcome to my link-in-bio page!</p>
        <div className="flex flex-col gap-3 w-full mt-4">
          <Button asChild className="w-full">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button asChild className="w-full" variant="outline">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          </Button>
          <Button asChild className="w-full" variant="secondary">
            <a href="mailto:your@email.com">Email Me</a>
          </Button>
        </div>
      </div>
      <footer className="mt-10 text-xs text-neutral-500 dark:text-neutral-400 text-center">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
