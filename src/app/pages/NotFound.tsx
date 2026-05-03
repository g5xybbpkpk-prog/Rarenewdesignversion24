import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-2xl">
        <p className="text-gold text-[9px] uppercase tracking-[5px] mb-4">Error 404</p>
        <h1 className="font-playfair text-6xl text-dark mb-6">
          Something feels <em className="text-rose">off</em>
        </h1>
        <p className="font-cormorant italic text-xl text-mauve mb-12 leading-relaxed">
          This page seems to have wandered away. Let us guide you back to your sanctuary.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-dark text-cream px-10 py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
        >
          <Home size={16} strokeWidth={1.3} />
          Return Home
        </Link>
      </div>
    </div>
  );
}
