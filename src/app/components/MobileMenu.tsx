import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[70]"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream z-[80] shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-rose/10">
              <span
                className="font-playfair text-xl tracking-[12px] pr-[12px] text-dark"
              >
                R<span className="text-rose">A</span>RE
              </span>
              <button
                onClick={onClose}
                className="text-mauve hover:text-rose transition-colors duration-300 p-2"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.3} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-8 pb-24">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/services")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/shop")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mishti"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/mishti")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Mishti
                  </Link>
                </li>
                <li>
                  <Link
                    to="/journal"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/journal")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Journal
                  </Link>
                </li>
              </ul>

              {/* Divider */}
              <div className="my-8 border-t border-rose/10" />

              {/* Secondary Links */}
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/team"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/team")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/dashboard")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-sm uppercase tracking-[3px] font-normal transition-colors duration-300 rounded-sm ${
                      isActive("/cart")
                        ? "text-rose bg-rose/5"
                        : "text-dark hover:text-rose hover:bg-rose/5"
                    }`}
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Footer Text */}
            <div className="px-6 py-6 bg-cream border-t border-rose/10 mt-auto">
              <p
                className="text-xs text-mauve/60 italic text-center"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "Embrace the art of self-care"
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
