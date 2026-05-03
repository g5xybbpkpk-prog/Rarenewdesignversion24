import { Link, useParams } from "react-router";
import { ArrowLeft, Share2, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function JournalArticle() {
  const { id } = useParams();

  // Mock article data
  const article = {
    id: id,
    title: "The Art of Slow Skincare",
    category: "Skincare",
    author: "Elena Vance",
    date: "March 18, 2024",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?w=1400&q=80",
    content: [
      {
        type: "paragraph",
        text: "In a world that rushes, your skincare routine can become a sanctuary. Discover how mindful application transforms simple products into profound rituals.",
      },
      {
        type: "heading",
        text: "The Philosophy of Slow Beauty",
      },
      {
        type: "paragraph",
        text: "Slow skincare is not about having more time—it's about being more present with the time you have. Each morning and evening routine becomes an opportunity to reconnect with yourself, to notice the subtle changes in your skin, to practice gratitude for the body that carries you through life.",
      },
      {
        type: "quote",
        text: "True transformation happens not in the rushing, but in the lingering. When we slow down, our skin—and our spirit—has space to breathe.",
      },
      {
        type: "paragraph",
        text: "The practice begins with intention. Before you cleanse, take three deep breaths. Feel the texture of your cleanser. Notice the temperature of the water. As you massage product into your skin, move with deliberate, gentle circles. This isn't just skincare—it's meditation.",
      },
      {
        type: "heading",
        text: "The Science Behind Slow Application",
      },
      {
        type: "paragraph",
        text: "Research shows that gentle massage during product application increases circulation, promotes lymphatic drainage, and enhances product absorption. But beyond the scientific benefits, there's something profound about treating your face with reverence.",
      },
      {
        type: "paragraph",
        text: "When we rush, we apply too much product, tug at delicate skin, and miss the signs our complexion is trying to communicate. Slow skincare teaches us to listen—to notice when our skin feels tight, when it needs extra hydration, when it's glowing with health.",
      },
      {
        type: "heading",
        text: "Building Your Slow Ritual",
      },
      {
        type: "paragraph",
        text: "Start with just one step. Perhaps it's your cleanser. Instead of a quick wash, spend two full minutes massaging it into your skin. Feel each movement. Notice the sensation. Over time, expand this mindfulness to your entire routine.",
      },
      {
        type: "paragraph",
        text: "Consider your environment. Dim the lights. Light a candle. Play soft music. Create a space that invites you to slow down, to be present, to treat your skincare routine as the sacred ritual it truly is.",
      },
    ],
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Five Mindful Moments for Your Morning",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1758607234692-51ac051a2a4d?w=600&q=80",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "The Clean Beauty Movement",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?w=600&q=80",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "The Power of Facial Massage",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?w=600&q=80",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="bg-cream pt-24 pb-24">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-8 mb-8">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 text-mauve text-xs hover:text-rose transition-colors duration-300"
        >
          <ArrowLeft size={14} strokeWidth={1.3} />
          Back to Journal
        </Link>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-8 mb-12">
        <p className="text-gold text-[9px] uppercase tracking-[4px] mb-4">{article.category}</p>
        <h1 className="font-playfair text-5xl lg:text-6xl text-dark mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 text-sm text-mauve">
            <span>By {article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-mauve text-xs hover:text-rose transition-colors duration-300">
              <Share2 size={16} strokeWidth={1.3} />
              Share
            </button>
            <button className="flex items-center gap-2 text-mauve text-xs hover:text-rose transition-colors duration-300">
              <Heart size={16} strokeWidth={1.3} />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <div className="aspect-[16/9] overflow-hidden warm-tone-overlay">
          <ImageWithFallback
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover warm-tone-soft"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-8 mb-20">
        {article.content.map((block, idx) => {
          if (block.type === "paragraph") {
            return (
              <p key={idx} className="text-mauve text-base leading-relaxed mb-6">
                {block.text}
              </p>
            );
          }

          if (block.type === "heading") {
            return (
              <h2 key={idx} className="font-playfair text-3xl text-dark mb-4 mt-12">
                {block.text}
              </h2>
            );
          }

          if (block.type === "quote") {
            return (
              <div key={idx} className="border-l-2 border-gold pl-8 my-10">
                <p className="font-cormorant italic text-2xl text-rose leading-relaxed">
                  "{block.text}"
                </p>
              </div>
            );
          }

          return null;
        })}

        {/* Tags */}
        <div className="flex gap-3 mt-12 pt-12 border-t border-rose/10">
          <span className="text-xs px-4 py-2 bg-linen text-mauve">Mindfulness</span>
          <span className="text-xs px-4 py-2 bg-linen text-mauve">Skincare Ritual</span>
          <span className="text-xs px-4 py-2 bg-linen text-mauve">Self-Care</span>
        </div>
      </div>

      {/* Author Bio */}
      <div className="max-w-3xl mx-auto px-8 mb-20">
        <div className="bg-linen p-8 flex gap-6">
          <div className="w-20 h-20 rounded-full bg-rose flex items-center justify-center shrink-0">
            <span className="text-cream font-playfair text-2xl">EV</span>
          </div>
          <div>
            <p className="text-dark font-medium mb-2">{article.author}</p>
            <p className="text-mauve text-sm leading-relaxed">
              Elena is a certified aesthetician and wellness writer with over a decade of experience
              in holistic skincare. She believes in the transformative power of slow, intentional
              beauty rituals.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t border-rose/10 pt-16">
          <h2 className="font-playfair text-3xl text-dark mb-10 text-center">
            Continue <em className="text-rose">Reading</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                to={`/journal/${related.id}`}
                className="group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-linen mb-4 warm-tone-overlay">
                  <ImageWithFallback
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 warm-tone-soft"
                  />
                </div>
                <p className="text-gold text-[9px] uppercase tracking-[4px] mb-2">
                  {related.category}
                </p>
                <h3 className="font-playfair text-xl text-dark mb-2 group-hover:text-rose transition-colors duration-300">
                  {related.title}
                </h3>
                <p className="text-muted text-xs">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
