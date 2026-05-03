import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Journal() {
  const categories = ["Trending", "Skincare", "Wellness", "Lifestyle", "Ingredients"];

  const featuredArticle = {
    title: "The Art of Slow Skincare",
    category: "Skincare",
    excerpt:
      "In a world that rushes, your skincare routine can become a sanctuary. Discover how mindful application transforms simple products into profound rituals.",
    image: "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjYWxtfGVufDF8fHx8MTc3NDA0NDE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "6 min read",
  };

  const articles = [
    {
      id: 1,
      title: "Understanding Hyaluronic Acid",
      category: "Ingredients",
      excerpt:
        "The hydration hero that belongs in every skincare routine. Learn why molecular weight matters.",
      image: "https://images.unsplash.com/photo-1760507971904-9b0fbef6abb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBib3RhbmljYWwlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzQwNDQxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "4 min read",
    },
    {
      id: 2,
      title: "Five Mindful Moments for Your Morning",
      category: "Wellness",
      excerpt:
        "Before the day takes you, take these moments for yourself. A gentle guide to intentional mornings.",
      image: "https://images.unsplash.com/photo-1758607234692-51ac051a2a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjB3b21hbnxlbnwxfHx8fDE3NzQwNDQxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "The Clean Beauty Movement",
      category: "Lifestyle",
      excerpt:
        "What clean beauty truly means, beyond the marketing. A transparent look at ingredients and ethics.",
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMHNraW5jYXJlfGVufDF8fHx8MTc3Mzk4ODA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Spa Day at Home: A Complete Guide",
      category: "Wellness",
      excerpt:
        "Transform your bathroom into a sanctuary with these simple, luxurious rituals.",
      image: "https://images.unsplash.com/photo-1765278954186-ccbe4f2b78a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBzZXJlbmUlMjB6ZW58ZW58MXx8fHwxNzc0MDQzOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Retinol: When and How to Start",
      category: "Skincare",
      excerpt:
        "The gold standard anti-aging ingredient demystified. A beginner's guide to introducing retinol safely.",
      image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "The Power of Facial Massage",
      category: "Wellness",
      excerpt:
        "Ancient techniques for modern skin. How gentle pressure can transform your complexion.",
      image: "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjYWxtfGVufDF8fHx8MTc3NDA0NDE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="bg-cream pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3 text-center">
          The Journal
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-dark text-center mb-6">
          Stories of <em className="text-rose">Ritual</em>
        </h1>
        <p className="text-mauve text-sm text-center max-w-2xl mx-auto leading-relaxed">
          Thoughtful insights on skincare, wellness, and the art of self-care.
          Written with intention, shared with care.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex gap-6 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-[10px] uppercase tracking-[3px] text-dark hover:text-rose transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-rose"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-8 mb-20">
        <Link to="/journal/1" className="bg-linen overflow-hidden cursor-pointer group block">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto overflow-hidden warm-tone-overlay">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 warm-tone-soft"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <span className="text-gold text-[9px] uppercase tracking-[4px] mb-4">
                {featuredArticle.category}
              </span>
              <h2 className="font-playfair text-4xl text-dark mb-4 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="font-cormorant italic text-lg text-mauve mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-muted text-xs">{featuredArticle.readTime}</span>
                <span className="text-rose text-xs uppercase tracking-[3px] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read More <ArrowRight size={14} strokeWidth={1.3} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/journal/${article.id}`}
              className="group cursor-pointer block"
            >
              <div className="relative h-64 overflow-hidden bg-linen mb-6 warm-tone-overlay">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 warm-tone-soft"
                />
              </div>
              <span className="text-gold text-[9px] uppercase tracking-[4px] mb-3 block">
                {article.category}
              </span>
              <h3 className="font-playfair text-2xl text-dark mb-3 group-hover:text-rose transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-mauve text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-muted text-xs">{article.readTime}</span>
                <span className="text-rose text-xs uppercase tracking-[3px] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read <ArrowRight size={12} strokeWidth={1.3} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}