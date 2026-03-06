import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogHeader() {
  return (
    <nav aria-label="Blog navigation" className="fixed top-0 w-full bg-almond/80 backdrop-blur-lg z-[100] border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Back to portfolio home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond rounded-sm"
          >
            <span className="text-4xl lg:text-5xl font-display font-extrabold text-coffee group-hover:text-cartier transition-colors duration-500">
              R.
            </span>
            <div className="hidden md:block h-px w-0 group-hover:w-12 bg-cartier transition-all duration-700" />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/blog"
              className="group relative text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-cartier transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond rounded-sm"
            >
              Blog
              <span className="absolute -bottom-px left-0 h-px w-full bg-cartier origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <div className="h-4 w-px bg-gold/30" />
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-cartier transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cartier focus-visible:ring-offset-2 focus-visible:ring-offset-almond rounded-sm"
            >
              <ArrowLeft size={10} strokeWidth={2.5} />
              Portfolio
              <span className="absolute -bottom-px left-0 h-px w-full bg-cartier origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
