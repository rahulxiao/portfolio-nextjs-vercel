import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Simple Footer */}
      <footer className="py-12 px-6 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Rahul Biswas | Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </>
  );
}

