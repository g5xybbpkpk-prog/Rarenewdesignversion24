import { Link } from "react-router";
import { MapPin, Star, Heart, Instagram } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const destinations = [
    {
      id: 1,
      name: "Amalfi Coast Retreat",
      location: "Positano, Italy",
      image: "https://images.unsplash.com/photo-1767350510090-137a6ce252c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBtYXNzYWdlJTIwc2VyZW5lfGVufDF8fHx8MTc3NDMwODg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Bali Mindfulness Escape",
      location: "Ubud, Indonesia",
      image: "https://images.unsplash.com/photo-1687436874119-6e587ae3dae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJldHJlYXQlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc3NDMwODg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Swiss Alps Detox",
      location: "Interlaken, Switzerland",
      image: "https://images.unsplash.com/photo-1761971975858-c487bc10daab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjB3ZWxsbmVzcyUyMGludGVyaW9yfGVufDF8fHx8MTc3NDMwODg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Moroccan Hammam Journey",
      location: "Marrakech, Morocco",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80",
      rating: 4.9,
    },
  ];

  const products = [
    {
      id: 1,
      brand: "La Mer",
      name: "The Concentrate",
      image: "https://images.unsplash.com/photo-1754735289896-1fa3c2d61255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHMlMjBtaW5pbWFsfGVufDF8fHx8MTc3NDMwODg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$450",
      badge: "NEW",
    },
    {
      id: 2,
      brand: "Tatcha",
      name: "The Dewy Skin Cream",
      image: "https://images.unsplash.com/photo-1751131964776-57e3cbca0a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwYm90dGxlJTIwbHV4dXJ5fGVufDF8fHx8MTc3NDI5OTU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$68",
    },
    {
      id: 3,
      brand: "Augustinus Bader",
      name: "The Rich Cream",
      image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$290",
    },
    {
      id: 4,
      brand: "Drunk Elephant",
      name: "C-Firma Fresh Vitamin C",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBza2luY2FyZSUyMGJvdHRsZXxlbnwxfHx8fDE3NzQwNDQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$78",
      badge: "BEST SELLER",
    },
  ];

  const testimonials = [
    {
      text: "RARE transformed my approach to self-care. The Amalfi retreat was pure magic.",
      author: "Sophia Chen",
      service: "Amalfi Coast Retreat",
    },
    {
      text: "Every product is thoughtfully curated. My skin has never looked better.",
      author: "Isabella Martinez",
      service: "Skincare Collection",
    },
    {
      text: "The attention to detail and personalized service exceeded all expectations.",
      author: "Emma Thompson",
      service: "Bali Mindfulness",
    },
  ];

  const instagramPosts = [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
  ];

  return (
    <div className="bg-cream">
      {/* Hero Section - Split */}
      <section className="grid md:grid-cols-2 min-h-[600px] md:h-screen relative">
        {/* Left Panel - Book Experience */}
        <Link
          to="/services"
          className="relative overflow-hidden cursor-pointer group min-h-[500px] md:min-h-0"
        >
          <div className="absolute inset-0 warm-tone-overlay">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80"
              alt="Spa Experience"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-out warm-tone-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-dark/5"></div>
          <div className="absolute bottom-12 left-6 right-6 sm:bottom-16 sm:left-14 sm:right-10 z-10">
            <p className="text-gold/75 text-[9px] uppercase tracking-[5px] mb-4">The Sanctuary</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-cream mb-4 leading-tight">
              Book an <em className="italic text-rose">Experience</em>
            </h1>
            <p className="text-cream/60 text-sm mb-7 max-w-xs leading-relaxed">
              Discover world-class spas and wellness sanctuaries curated for you.
            </p>
            <span className="inline-flex bg-dark text-cream px-6 py-3 sm:px-8 sm:py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300">
              Find a Sanctuary →
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent z-20 hidden md:block"></div>

        {/* Right Panel - Shop Products */}
        <Link
          to="/shop"
          className="relative overflow-hidden cursor-pointer group min-h-[500px] md:min-h-0"
        >
          <div className="absolute inset-0 warm-tone-overlay">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=80"
              alt="Shop Products"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-out warm-tone-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-dark/5"></div>
          <div className="absolute bottom-12 left-6 right-6 sm:bottom-16 sm:left-14 sm:right-10 z-10">
            <p className="text-gold/75 text-[9px] uppercase tracking-[5px] mb-4">The Edit</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-cream mb-4 leading-tight">
              Shop <em className="italic text-rose">Luxury</em>
            </h1>
            <p className="text-cream/60 text-sm mb-7 max-w-xs leading-relaxed">
              Premium skincare and wellness essentials, handpicked for transformation.
            </p>
            <span className="inline-flex bg-dark text-cream px-6 py-3 sm:px-8 sm:py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300">
              Shop the Collection →
            </span>
          </div>
        </Link>
      </section>

      {/* Marquee */}
      <div className="bg-linen py-5 overflow-hidden border-t border-b border-rose/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center">
              {[
                "Holistic Wellness",
                "Curated Experiences",
                "Premium Skincare",
                "Mindful Living",
                "Luxury Retreats",
                "Self-Care Rituals",
              ].map((text, i) => (
                <div key={`${idx}-${i}-${text}`} className="flex items-center px-8">
                  <span className="w-1 h-1 rounded-full bg-gold mr-6"></span>
                  <span className="font-cormorant italic text-base text-mauve">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <section className="bg-dark py-20 px-6 sm:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-gold/60 text-[9px] uppercase tracking-[5px] mb-3">Featured</p>
              <h2 className="font-playfair text-4xl text-cream">
                Wellness <em className="italic text-rose">Destinations</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="text-cream/35 text-[10px] uppercase tracking-[2px] hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/service/${dest.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-sm mb-3 warm-tone-overlay">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700 warm-tone-soft"
                  />
                  <div className="absolute top-3 right-3 bg-dark/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-gold text-[10px] flex items-center gap-1">
                      <Star size={10} className="fill-gold" strokeWidth={1.3} />
                      {dest.rating}
                    </span>
                  </div>
                </div>
                <h3 className="font-playfair text-base text-cream mb-1">{dest.name}</h3>
                <p className="text-cream/30 text-xs flex items-center gap-1">
                  <MapPin size={10} className="text-rose" strokeWidth={1.5} />
                  {dest.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="bg-dark py-28 px-6 sm:px-14 text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[520px] h-[520px] border border-gold/7 rounded-full"></div>
          <div className="absolute w-80 h-80 border border-rose/7 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold/50 text-[9px] uppercase tracking-[5px] mb-5">The Journal</p>
          <h2 className="font-playfair text-6xl lg:text-7xl text-cream mb-5 leading-tight">
            Calm <em className="italic text-rose">Luxury</em>
          </h2>
          <p className="text-cream/42 text-sm leading-relaxed mb-9 max-w-md mx-auto">
            Explore our curated stories on wellness, mindfulness, and the art of living beautifully.
          </p>
          <Link
            to="/journal"
            className="inline-flex bg-transparent border border-cream/45 text-cream px-8 py-4 text-[10px] uppercase tracking-[3px] hover:bg-cream/10 transition-all duration-300"
          >
            Read the Journal
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-cream py-20 px-6 sm:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3">Curated</p>
              <h2 className="font-playfair text-4xl text-dark">
                Premium <em className="italic text-rose">Products</em>
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-mauve text-[10px] uppercase tracking-[2px] hover:text-rose transition-colors duration-300 flex items-center gap-2 group"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-4 warm-tone-overlay">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 warm-tone-soft"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-rose text-cream px-3 py-1 text-[8px] uppercase tracking-[2px]">
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart size={14} className="text-rose" strokeWidth={1.5} />
                  </button>
                </div>
                <p className="text-gold text-[9px] uppercase tracking-[3px] mb-1">{product.brand}</p>
                <h3 className="font-playfair text-base text-dark mb-1">{product.name}</h3>
                <p className="text-mauve text-sm">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 min-h-[560px]">
        {/* Visual */}
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80"
            alt="About RARE"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="bg-linen p-16 flex flex-col justify-center">
          <p className="text-gold text-[9px] uppercase tracking-[5px] mb-4">Our Philosophy</p>
          <h2 className="font-playfair text-4xl text-dark mb-6 leading-tight">
            <em className="italic text-rose">Relaxed</em> & Refresh
          </h2>
          <p className="text-mauve text-sm leading-relaxed mb-6">
            RARE is more than a wellness platform—it's a carefully curated sanctuary for those who
            seek authentic transformation. We believe in the power of calm luxury, where every
            experience is designed to restore, renew, and inspire.
          </p>
          <div className="border-l-2 border-gold pl-5 my-6">
            <p className="font-cormorant italic text-lg text-rose leading-relaxed">
              "True wellness begins when we create space for ourselves to simply be."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-rose/20">
            <div>
              <p className="font-playfair text-3xl text-dark">
                50<sup className="text-base text-gold">+</sup>
              </p>
              <p className="text-muted text-xs mt-1">Curated Destinations</p>
            </div>
            <div>
              <p className="font-playfair text-3xl text-dark">
                96<sup className="text-base text-gold">%</sup>
              </p>
              <p className="text-muted text-xs mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark py-20 px-6 sm:px-14">
        <p className="text-gold/50 text-[9px] uppercase tracking-[5px] text-center mb-14">
          What Our Guests Say
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-cream/4 border border-gold/10 p-7 rounded-sm hover:border-gold/25 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-gold"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  ></div>
                ))}
              </div>
              <p className="font-cormorant italic text-base text-cream/68 leading-relaxed mb-6">
                "{testi.text}"
              </p>
              <p className="text-muted text-xs uppercase tracking-[2px]">{testi.author}</p>
              <p className="text-gold/40 text-[10px] mt-1">{testi.service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-cream py-18 px-6 sm:px-14">
        <p className="text-gold text-[9px] uppercase tracking-[5px] text-center mb-8">
          Follow the Journey
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1">
          {instagramPosts.map((post, idx) => (
            <div
              key={idx}
              className="aspect-square overflow-hidden cursor-pointer group relative warm-tone-overlay"
            >
              <ImageWithFallback
                src={post}
                alt={`Instagram ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600 warm-tone-soft"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={22}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.3}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-7">
          <p className="font-playfair italic text-xl text-mauve">@rare.wellness</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linen py-24 px-6 sm:px-14 text-center relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-playfair text-[200px] text-rose/6 tracking-[40px]">RARE</span>
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-gold text-[9px] uppercase tracking-[5px] mb-5">Begin Your Journey</p>
          <h2 className="font-playfair text-5xl lg:text-6xl text-dark mb-5 leading-tight">
            Your <em className="italic text-rose">Sanctuary</em> Awaits
          </h2>
          <p className="text-mauve text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Experience personalized wellness journeys designed to restore balance and inspire transformation.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/services"
              className="bg-dark text-cream px-8 py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
            >
              Book a Sanctuary
            </Link>
            <Link
              to="/shop"
              className="bg-transparent border border-gold/50 text-dark px-8 py-4 text-[10px] uppercase tracking-[3px] hover:border-rose hover:text-rose transition-all duration-300"
            >
              Shop the Edit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}