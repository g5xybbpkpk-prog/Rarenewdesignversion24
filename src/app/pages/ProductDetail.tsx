import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Star, ShoppingBag, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedShade, setSelectedShade] = useState(3);
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleAddToBag = () => {
    // In production, this would add to cart context/state
    navigate("/cart");
  };

  // Mock product data
  const product = {
    id: id,
    badge: "BEST SELLER",
    name: "Luminous Silk",
    subtitle: "Foundation",
    rating: 4.5,
    reviewCount: 120,
    price: 65,
    description:
      "A weightless, oil-free liquid foundation that delivers buildable medium coverage and a blur-effect natural finish. Infused with silk proteins for hydration and a radiant glow that lasts all day.",
    shades: [
      { id: 1, name: "Porcelain", color: "#F5DCD0" },
      { id: 2, name: "Ivory", color: "#ECC9B4" },
      { id: 3, name: "Beige", color: "#D4A88A" },
      { id: 4, name: "Tan", color: "#C9997A" },
      { id: 5, name: "Caramel", color: "#A97759" },
      { id: 6, name: "Sienna", color: "#8B654B" },
      { id: 7, name: "Espresso", color: "#5D392B" },
    ],
    images: [
      "https://images.unsplash.com/photo-1631214500115-b1e1e572f943?w=800&q=80",
      "https://images.unsplash.com/photo-1622756842927-abfb4b9a0a1e?w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1631214499419-ffe8f5e88f14?w=800&q=80",
    ],
    ingredients: [
      "Silk Proteins - Provides hydration and a smooth texture",
      "Vitamin E - Antioxidant protection and skin conditioning",
      "Glycerin - Locks in moisture for all-day hydration",
      "Dimethicone - Creates a silky, blurred finish",
    ],
    howToUse:
      "Apply with a brush, sponge, or fingers. Start at the center of your face and blend outward. Build coverage where needed. Can be mixed with moisturizer for a lighter finish.",
    shipping:
      "Free standard shipping on orders over $50. Express shipping available at checkout. Orders typically ship within 1-2 business days.",
    reviews: [
      {
        id: 1,
        author: "Elana M.",
        initial: "EM",
        verified: true,
        rating: 5,
        date: "2 days ago",
        title: "Worth every penny",
        text: "I was hesitant because of the price, but this foundation truly looks like skin. It stays put all day without getting cakey. The shade match was perfect for my neutral undertone.",
      },
      {
        id: 2,
        author: "Seren J",
        initial: "SJ",
        verified: true,
        rating: 4,
        date: "1 week ago",
        title: "Beautiful finish",
        text: "The texture is amazing and lightweight. My only complaint is the pump dispenses a bit too much product at once. Otherwise, stellar performance.",
      },
    ],
    ratingBreakdown: {
      5: 70,
      4: 15,
      3: 5,
      2: 3,
      1: 2,
    },
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-cream pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-rose transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-rose transition-colors duration-300">
            Skincare
          </Link>
          <span>/</span>
          <span className="text-dark">Foundation</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Images */}
          <div>
            {/* Main Image */}
            <div className="relative bg-dark mb-4 overflow-hidden aspect-[3/4] warm-tone-overlay">
              {product.badge && (
                <div className="absolute top-4 left-4 bg-rose text-cream px-3 py-1 text-[8px] uppercase tracking-[2px] z-10">
                  {product.badge}
                </div>
              )}
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover warm-tone-soft"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`overflow-hidden aspect-square transition-all duration-300 warm-tone-overlay ${
                    selectedImage === idx
                      ? "ring-2 ring-rose ring-offset-2 ring-offset-cream"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View image ${idx + 1} of ${product.name}`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover warm-tone-soft"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            {/* Title */}
            <h1 className="font-playfair text-4xl text-dark mb-1">
              {product.name} <em className="italic text-rose">{product.subtitle}</em>
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-gold/30"
                    }
                    strokeWidth={1.3}
                  />
                ))}
              </div>
              <Link
                to="#reviews"
                className="text-rose text-xs hover:underline"
              >
                {product.reviewCount} reviews
              </Link>
            </div>

            {/* Price */}
            <p className="text-rose text-2xl mb-6">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-mauve text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Shade Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-mauve text-xs uppercase tracking-[2px]">
                  Shade: {product.shades[selectedShade - 1].name}
                </p>
                <p className="text-muted text-[10px] uppercase tracking-[2px]">Medium Neutral</p>
              </div>
              <div className="flex gap-2">
                {product.shades.map((shade) => (
                  <button
                    key={shade.id}
                    onClick={() => setSelectedShade(shade.id)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 ${
                      selectedShade === shade.id
                        ? "ring-2 ring-rose ring-offset-2 ring-offset-cream"
                        : "hover:ring-2 hover:ring-rose/30 hover:ring-offset-2 hover:ring-offset-cream"
                    }`}
                    style={{ backgroundColor: shade.color }}
                    aria-label={shade.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Add to Bag */}
            <div className="flex gap-3 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border border-rose/20 bg-cream">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-linen transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.3} className="text-dark" />
                </button>
                <span className="px-6 py-3 text-dark text-sm min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-linen transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.3} className="text-dark" />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                className="flex-1 bg-dark text-cream py-3 px-6 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300 flex items-center justify-center gap-2"
                onClick={handleAddToBag}
              >
                <ShoppingBag size={16} strokeWidth={1.3} />
                Add to Bag
              </button>
            </div>

            {/* Collapsible Sections */}
            <div className="border-t border-rose/10">
              {/* Ingredients */}
              <div className="border-b border-rose/10">
                <button
                  onClick={() => toggleSection("ingredients")}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-linen/30 transition-colors duration-300"
                >
                  <span className="text-dark text-sm">Ingredients</span>
                  {expandedSection === "ingredients" ? (
                    <ChevronUp size={16} strokeWidth={1.3} className="text-dark" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.3} className="text-dark" />
                  )}
                </button>
                {expandedSection === "ingredients" && (
                  <div className="pb-4 px-2">
                    <ul className="space-y-2">
                      {product.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="text-mauve text-xs leading-relaxed">
                          • {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* How to Use */}
              <div className="border-b border-rose/10">
                <button
                  onClick={() => toggleSection("howToUse")}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-linen/30 transition-colors duration-300"
                >
                  <span className="text-dark text-sm">How to Use</span>
                  {expandedSection === "howToUse" ? (
                    <ChevronUp size={16} strokeWidth={1.3} className="text-dark" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.3} className="text-dark" />
                  )}
                </button>
                {expandedSection === "howToUse" && (
                  <div className="pb-4 px-2">
                    <p className="text-mauve text-xs leading-relaxed">{product.howToUse}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-rose/10">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-linen/30 transition-colors duration-300"
                >
                  <span className="text-dark text-sm">Shipping & Returns</span>
                  {expandedSection === "shipping" ? (
                    <ChevronUp size={16} strokeWidth={1.3} className="text-dark" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.3} className="text-dark" />
                  )}
                </button>
                {expandedSection === "shipping" && (
                  <div className="pb-4 px-2">
                    <p className="text-mauve text-xs leading-relaxed">{product.shipping}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-7xl mx-auto px-8" id="reviews">
        <h2 className="font-playfair text-3xl text-dark mb-8">
          Customer <em className="text-rose">Reviews</em>
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Left - Rating Summary */}
          <div className="lg:col-span-1">
            <div className="bg-linen p-8">
              {/* Overall Rating */}
              <div className="text-center mb-6">
                <p className="font-playfair text-6xl text-dark mb-2">{product.rating}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-gold/30"
                      }
                      strokeWidth={1.3}
                    />
                  ))}
                </div>
                <p className="text-muted text-xs">Based on {product.reviewCount} reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2 mb-6">
                {Object.entries(product.ratingBreakdown)
                  .reverse()
                  .map(([stars, percentage]) => (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-xs text-dark w-2">{stars}</span>
                      <div className="flex-1 h-2 bg-cream overflow-hidden rounded-full">
                        <div
                          className="h-full bg-rose transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted w-10 text-right">{percentage}%</span>
                    </div>
                  ))}
              </div>

              {/* Write Review Button */}
              <button className="w-full py-3 border border-rose/30 text-rose text-[10px] uppercase tracking-[3px] hover:bg-rose hover:text-cream transition-all duration-300">
                Write a Review
              </button>
            </div>
          </div>

          {/* Right - Review Cards */}
          <div className="lg:col-span-2 space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 border border-rose/10">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center">
                      <span className="text-rose text-sm font-medium">{review.initial}</span>
                    </div>
                    <div>
                      <p className="text-dark text-sm font-medium">{review.author}</p>
                      {review.verified && (
                        <p className="text-rose text-[9px] uppercase tracking-[2px]">
                          Verified Buyer
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-muted text-xs">{review.date}</p>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < review.rating ? "fill-gold text-gold" : "text-gold/30"}
                      strokeWidth={1.3}
                    />
                  ))}
                </div>

                {/* Review Content */}
                <h3 className="text-dark font-medium text-sm mb-2">{review.title}</h3>
                <p className="text-mauve text-xs leading-relaxed">{review.text}</p>
              </div>
            ))}

            {/* Load More Reviews */}
            <button className="w-full py-3 border border-rose/20 text-dark text-xs hover:bg-linen transition-all duration-300">
              Load more reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}