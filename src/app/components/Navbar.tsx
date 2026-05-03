import { Link, useLocation } from "react-router";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Version A on light backgrounds */}
          <Link to="/" className="flex items-center gap-1 group">
            <span className="font-playfair text-xl sm:text-2xl tracking-[10px] sm:tracking-[14px] pr-[10px] sm:pr-[14px] text-dark group-hover:text-rose transition-colors duration-300">
              R<span className="text-rose">A</span>RE
            </span>
          </Link>

          {/* Navigation Links - Button specs: 10px, ALL CAPS, 3px letter-spacing, 400 weight */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className={`text-[10px] uppercase tracking-[3px] font-normal transition-colors duration-300 ${
                isActive("/services") ? "text-rose" : "text-dark hover:text-rose"
              }`}
            >
              Services
            </Link>
            <Link
              to="/shop"
              className={`text-[10px] uppercase tracking-[3px] font-normal transition-colors duration-300 ${
                isActive("/shop") ? "text-rose" : "text-dark hover:text-rose"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/mishti"
              className={`text-[10px] uppercase tracking-[3px] font-normal transition-colors duration-300 ${
                isActive("/mishti") ? "text-rose" : "text-dark hover:text-rose"
              }`}
            >
              Mishti
            </Link>
            <Link
              to="/journal"
              className={`text-[10px] uppercase tracking-[3px] font-normal transition-colors duration-300 ${
                isActive("/journal") ? "text-rose" : "text-dark hover:text-rose"
              }`}
            >
              Journal
            </Link>
          </div>

          {/* Right Icons - Inline size: 16px, stroke weight 1.3px, primary color Rose */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-rose hover:text-terra transition-colors duration-300 p-2 sm:p-0"
              aria-label="Open search"
            >
              <Search size={16} strokeWidth={1.3} />
            </button>
            <Link
              to="/dashboard"
              className="text-rose hover:text-terra transition-colors duration-300 p-2 sm:p-0 hidden sm:block"
              aria-label="Go to dashboard"
            >
              <User size={16} strokeWidth={1.3} />
            </Link>
            <Link
              to="/cart"
              className="text-rose hover:text-terra transition-colors duration-300 p-2 sm:p-0"
              aria-label="View cart"
            >
              <ShoppingCart size={16} strokeWidth={1.3} />
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-rose hover:text-terra transition-colors duration-300 p-2 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={20} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
}