import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  type: "product" | "service" | "article";
  description: string;
  link: string;
  price?: string;
}

const mockResults: SearchResult[] = [
  { id: "1", title: "Radiance Serum", type: "product", description: "Vitamin C brightening serum", link: "/product/1", price: "$68" },
  { id: "2", title: "Hydrating Cream", type: "product", description: "Deep moisture facial cream", link: "/product/2", price: "$84" },
  { id: "3", title: "Rejuvenating Oil", type: "product", description: "Botanical face oil", link: "/product/3", price: "$92" },
  { id: "4", title: "Clay Mask", type: "product", description: "Detoxifying treatment", link: "/product/4", price: "$56" },
  { id: "5", title: "Bali Wellness Retreat", type: "service", description: "7-day luxury wellness experience", link: "/service/1", price: "$2,800" },
  { id: "6", title: "Maldives Spa Escape", type: "service", description: "5-day ocean-view relaxation", link: "/service/2", price: "$3,200" },
  { id: "7", title: "Swiss Alpine Detox", type: "service", description: "Mountain wellness journey", link: "/service/3", price: "$3,500" },
  { id: "8", title: "The Art of Mindful Skincare", type: "article", description: "Creating your ritual", link: "/journal/1" },
  { id: "9", title: "Understanding Your Skin Type", type: "article", description: "A comprehensive guide", link: "/journal/2" },
  { id: "10", title: "Wellness Travel Essentials", type: "article", description: "Packing for your retreat", link: "/journal/3" },
  { id: "11", title: "Our Team", type: "article", description: "Meet the people behind RARE", link: "/team" },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    // Prevent body scroll when search is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = mockResults.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "product":
        return "Product";
      case "service":
        return "Destination";
      case "article":
        return "Journal";
      default:
        return type;
    }
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
            className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-16 sm:top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[65] px-4"
          >
            <div className="bg-cream rounded-sm shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-8 py-4 sm:py-6 border-b border-rose/10">
                <Search size={18} strokeWidth={1.3} className="text-rose flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, destinations, articles..."
                  className="flex-1 bg-transparent text-dark placeholder:text-mauve/40 outline-none text-sm sm:text-base"
                  style={{ fontFamily: "Jost, sans-serif" }}
                />
                <button
                  onClick={onClose}
                  className="text-mauve hover:text-rose transition-colors duration-300 p-1 flex-shrink-0"
                  aria-label="Close search"
                >
                  <X size={20} strokeWidth={1.3} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] sm:max-h-[65vh] overflow-y-auto">
                {query.trim() === "" ? (
                  <div className="px-4 sm:px-8 py-8 sm:py-12 text-center text-mauve/60">
                    <p className="text-sm sm:text-base" style={{ fontFamily: "Jost, sans-serif" }}>
                      Start typing to search...
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-4 sm:px-8 py-8 sm:py-12 text-center text-mauve/60">
                    <p className="text-sm sm:text-base" style={{ fontFamily: "Jost, sans-serif" }}>
                      No results found for "{query}"
                    </p>
                  </div>
                ) : (
                  <div className="py-2 sm:py-4">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        to={result.link}
                        onClick={onClose}
                        className="block px-4 sm:px-8 py-3 sm:py-4 hover:bg-gold/5 active:bg-gold/10 transition-colors duration-300 border-b border-rose/5 last:border-0"
                      >
                        <div className="flex items-start justify-between gap-3 sm:gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3 mb-1">
                              <span
                                className="text-[8px] sm:text-[9px] uppercase tracking-[1.5px] sm:tracking-[2px] text-rose"
                                style={{ fontFamily: "Jost, sans-serif" }}
                              >
                                {getTypeLabel(result.type)}
                              </span>
                            </div>
                            <h3
                              className="text-dark mb-1 text-sm sm:text-base truncate sm:whitespace-normal"
                              style={{ fontFamily: "Jost, sans-serif" }}
                            >
                              {result.title}
                            </h3>
                            <p
                              className="text-xs sm:text-sm text-mauve/70 line-clamp-2"
                              style={{ fontFamily: "Jost, sans-serif" }}
                            >
                              {result.description}
                            </p>
                          </div>
                          {result.price && (
                            <span
                              className="text-dark whitespace-nowrap text-sm sm:text-base flex-shrink-0"
                              style={{ fontFamily: "Jost, sans-serif" }}
                            >
                              {result.price}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
