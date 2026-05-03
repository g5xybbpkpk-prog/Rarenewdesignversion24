import { useState, useEffect, useRef } from "react";
import { Heart, ShoppingBag, Star, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    };

    if (showSortDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSortDropdown]);

  const categories = [
    "All",
    "Skincare",
    "Makeup",
    "Hair",
    "Body",
    "Wellness",
    "Tools",
    "Fragrance",
  ];

  const products = [
    {
      id: 1,
      brand: "Aesop",
      name: "Resurrection Aromatique Hand Balm",
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMHNraW5jYXJlfGVufDF8fHx8MTc3Mzk4ODA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$28",
      category: "Body",
      rating: 4.8,
      mishtiMatch: 92,
    },
    {
      id: 2,
      brand: "Tatcha",
      name: "The Dewy Skin Cream",
      image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$68",
      category: "Skincare",
      rating: 4.9,
      mishtiMatch: 88,
    },
    {
      id: 3,
      brand: "La Mer",
      name: "The Concentrate",
      image: "https://images.unsplash.com/photo-1761864293818-603c23655cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc0MDM4MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$450",
      category: "Skincare",
      rating: 5.0,
      mishtiMatch: 95,
    },
    {
      id: 4,
      brand: "Glossier",
      name: "Super Bounce Serum",
      image: "https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc0MDQzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$32",
      category: "Skincare",
      rating: 4.7,
      mishtiMatch: 85,
    },
    {
      id: 5,
      brand: "Herbivore",
      name: "Pink Cloud Rosewater Moisture Crème",
      image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$48",
      category: "Skincare",
      rating: 4.6,
      mishtiMatch: 79,
    },
    {
      id: 6,
      brand: "RMS Beauty",
      name: "Living Luminizer",
      image: "https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc0MDQzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$38",
      category: "Makeup",
      rating: 4.8,
      mishtiMatch: 0,
    },
    {
      id: 7,
      brand: "Olaplex",
      name: "No. 3 Hair Perfector",
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMHNraW5jYXJlfGVufDF8fHx8MTc3Mzk4ODA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$28",
      category: "Hair",
      rating: 4.9,
      mishtiMatch: 0,
    },
    {
      id: 8,
      brand: "Byredo",
      name: "Gypsy Water Eau de Parfum",
      image: "https://images.unsplash.com/photo-1761864293818-603c23655cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc0MDM4MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$180",
      category: "Fragrance",
      rating: 4.7,
      mishtiMatch: 0,
    },
    {
      id: 9,
      brand: "Mount Lai",
      name: "Jade Facial Roller",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      price: "$34",
      category: "Tools",
      rating: 4.8,
      mishtiMatch: 0,
    },
    {
      id: 10,
      brand: "Wildling",
      name: "Empress Gua Sha Stone",
      image: "https://images.unsplash.com/photo-1612817288484-6bc43d7e57f7?w=800&q=80",
      price: "$45",
      category: "Tools",
      rating: 4.9,
      mishtiMatch: 0,
    },
    {
      id: 11,
      brand: "Foreo",
      name: "Luna Mini 3 Facial Cleansing Device",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
      price: "$139",
      category: "Tools",
      rating: 4.7,
      mishtiMatch: 0,
    },
    {
      id: 12,
      brand: "Angela Caglia",
      name: "Rose Quartz Facial Roller",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
      price: "$69",
      category: "Tools",
      rating: 4.6,
      mishtiMatch: 0,
    },
    {
      id: 13,
      brand: "Vanity Planet",
      name: "Dermaflash Exfoliation Device",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
      price: "$189",
      category: "Tools",
      rating: 4.5,
      mishtiMatch: 0,
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-cream pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3 text-center">
          The Collection
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-dark text-center mb-6">
          Clean Beauty, <em className="text-rose">Curated</em>
        </h1>
        <p className="text-mauve text-sm text-center max-w-2xl mx-auto leading-relaxed">
          Discover sustainably sourced, luxuriously crafted beauty essentials. Each product is
          AI-matched to your unique skin profile through Mishti.
        </p>
      </div>

      {/* Mishti Profile Banner */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="bg-dark p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNraW4lMjBhbmFseXNpcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDA0NTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Skin Analysis Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gold text-[9px] uppercase tracking-[5px] mb-2">
                Your Skin Profile
              </p>
              <p className="text-cream/70 text-sm">
                Products marked with a match percentage are tailored to your skin analysis.
              </p>
            </div>
          </div>
          <button className="border border-gold/35 text-gold px-8 py-2.5 text-[10px] uppercase tracking-[3px] hover:bg-gold hover:text-dark transition-all duration-300 whitespace-nowrap">
            Update Analysis →
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex gap-3 justify-between items-center flex-wrap">
          {/* Left side: Avatar + Category Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNraW4lMjBhbmFseXNpcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDA0NTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Skin Analysis Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 text-[10px] uppercase tracking-[3px] font-normal transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-rose text-cream"
                      : "bg-linen text-dark hover:bg-rose/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative" ref={sortDropdownRef}>
            <button
              className="flex items-center gap-2 border border-gold/50 text-dark px-6 py-2 text-[10px] uppercase tracking-[3px] font-normal hover:border-rose hover:text-rose transition-all duration-300"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              aria-label="Sort products"
              aria-expanded={showSortDropdown}
            >
              Sort: {sortBy}
              <ChevronDown size={14} strokeWidth={1.3} className={`transition-transform duration-300 ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 bg-cream border border-rose/10 shadow-[0_8px_20px_rgba(46,26,26,0.12)] z-10 min-w-[180px]">
                <button
                  className="block w-full text-left px-6 py-3 text-[11px] text-dark hover:bg-linen transition-colors duration-300 font-light"
                  onClick={() => {
                    setSortBy("Popular");
                    setShowSortDropdown(false);
                  }}
                >
                  Popular
                </button>
                <button
                  className="block w-full text-left px-6 py-3 text-[11px] text-dark hover:bg-linen transition-colors duration-300 font-light"
                  onClick={() => {
                    setSortBy("Price: Low to High");
                    setShowSortDropdown(false);
                  }}
                >
                  Price: Low to High
                </button>
                <button
                  className="block w-full text-left px-6 py-3 text-[11px] text-dark hover:bg-linen transition-colors duration-300 font-light"
                  onClick={() => {
                    setSortBy("Price: High to Low");
                    setShowSortDropdown(false);
                  }}
                >
                  Price: High to Low
                </button>
                <button
                  className="block w-full text-left px-6 py-3 text-[11px] text-dark hover:bg-linen transition-colors duration-300 font-light"
                  onClick={() => {
                    setSortBy("Newest");
                    setShowSortDropdown(false);
                  }}
                >
                  Newest
                </button>
                <button
                  className="block w-full text-left px-6 py-3 text-[11px] text-dark hover:bg-linen transition-colors duration-300 font-light"
                  onClick={() => {
                    setSortBy("Highest Rated");
                    setShowSortDropdown(false);
                  }}
                >
                  Highest Rated
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-linen p-6 cursor-pointer hover:shadow-[0_8px_20px_rgba(46,26,26,0.12)] transition-all duration-300"
            >
              <div className="relative h-56 mb-4 overflow-hidden bg-cream">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  className="absolute top-3 right-3 text-rose hover:scale-110 transition-transform duration-300"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`Add ${product.name} to favorites`}
                >
                  <Heart size={16} strokeWidth={1.3} />
                </button>
                {product.mishtiMatch > 0 && (
                  <div className="absolute bottom-3 left-3 bg-dark/90 text-gold px-3 py-1.5">
                    <p className="text-[9px] uppercase tracking-[2px]">
                      {product.mishtiMatch}% Match
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <p className="text-muted text-[9px] uppercase tracking-[3px] mb-1">
                  {product.brand}
                </p>
                <h4 className="text-dark text-sm mb-2 leading-tight h-10">
                  {product.name}
                </h4>
                <div className="flex items-center gap-1 text-gold text-xs mb-2">
                  <Star size={10} fill="currentColor" />
                  <span>{product.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-dark/5">
                <span className="text-gold text-sm font-playfair">
                  {product.price}
                </span>
                <button
                  className="text-dark hover:text-rose transition-colors duration-300"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingBag size={16} strokeWidth={1.3} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}