import { useState } from "react";
import { Star, MapPin, Heart, Search, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Salons", "Spas", "Yoga", "Massage"];

  const services = [
    {
      id: 1,
      name: "Lume Wellness Spa",
      location: "Mumbai, Maharashtra",
      address: "123 Marine Drive, Mumbai, Maharashtra 400020",
      image: "https://images.unsplash.com/photo-1765278954186-ccbe4f2b78a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBzZXJlbmUlMjB6ZW58ZW58MXx8fHwxNzc0MDQzOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Massage", "Facial"],
      price: "$180",
      rating: 4.9,
      category: "Spas",
    },
    {
      id: 2,
      name: "Serenity Yoga Studio",
      location: "Goa",
      address: "456 Beach Road, Anjuna, Goa 403509",
      image: "https://images.unsplash.com/photo-1642645550550-c2a442d17e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc0MDM1MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Yoga", "Meditation"],
      price: "$45",
      rating: 5.0,
      category: "Yoga",
    },
    {
      id: 3,
      name: "Atelier Beauty Lounge",
      location: "Bangalore, Karnataka",
      address: "789 MG Road, Bangalore, Karnataka 560001",
      image: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3NDAyNTkzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Hair", "Nails"],
      price: "$95",
      rating: 4.8,
      category: "Salons",
    },
    {
      id: 4,
      name: "Harmony Massage Therapy",
      location: "New Delhi",
      address: "234 Connaught Place, New Delhi 110001",
      image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3NDA0Mzk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Deep Tissue", "Hot Stone"],
      price: "$120",
      rating: 4.9,
      category: "Massage",
    },
    {
      id: 5,
      name: "Tranquil Day Spa",
      location: "Kochi, Kerala",
      address: "567 Marine Drive, Kochi, Kerala 682011",
      image: "https://images.unsplash.com/photo-1765278954186-ccbe4f2b78a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBzZXJlbmUlMjB6ZW58ZW58MXx8fHwxNzc0MDQzOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Spa Day", "Body Wrap"],
      price: "$250",
      rating: 4.7,
      category: "Spas",
    },
    {
      id: 6,
      name: "Elements Hair Salon",
      location: "Pune, Maharashtra",
      address: "890 Koregaon Park, Pune, Maharashtra 411001",
      image: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3NDAyNTkzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Color", "Cut"],
      price: "$150",
      rating: 4.8,
      category: "Salons",
    },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-cream pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3 text-center">
          Destinations
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl text-dark text-center mb-6">
          Book Your <em className="text-rose">Ritual</em>
        </h1>
        <p className="text-mauve text-sm text-center max-w-2xl mx-auto leading-relaxed">
          Discover curated wellness destinations across India. From serene spa retreats to
          transformative yoga sessions, find your sanctuary.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto px-8 mb-12">
        <div className="bg-linen p-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center gap-3 bg-cream px-4 py-3">
            <label htmlFor="search-location" className="sr-only">Location</label>
            <MapPin size={16} className="text-muted" strokeWidth={1.3} aria-hidden="true" />
            <input
              id="search-location"
              type="text"
              placeholder="Location"
              className="flex-1 bg-transparent text-sm text-dark placeholder:text-mauve/40 outline-none"
              aria-label="Search by location"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 bg-cream px-4 py-3">
            <label htmlFor="search-service" className="sr-only">Service Type</label>
            <Search size={16} className="text-muted" strokeWidth={1.3} aria-hidden="true" />
            <input
              id="search-service"
              type="text"
              placeholder="Service type"
              className="flex-1 bg-transparent text-sm text-dark placeholder:text-mauve/40 outline-none"
              aria-label="Search by service type"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 bg-cream px-4 py-3">
            <label htmlFor="search-date" className="sr-only">Date</label>
            <Calendar size={16} className="text-muted" strokeWidth={1.3} aria-hidden="true" />
            <input
              id="search-date"
              type="text"
              placeholder="Date"
              className="flex-1 bg-transparent text-sm text-dark placeholder:text-mauve/40 outline-none"
              aria-label="Select date"
            />
          </div>
          <button
            className="bg-dark text-cream px-8 py-3 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
            aria-label="Search for services"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex gap-3 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-[10px] uppercase tracking-[3px] transition-all duration-300 ${
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

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="group bg-linen overflow-hidden cursor-pointer hover:shadow-[0_8px_20px_rgba(46,26,26,0.12)] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl text-dark mb-1">
                      {service.name}
                    </h3>
                    <p className="text-muted text-xs flex items-center gap-1 mb-1">
                      <MapPin size={12} strokeWidth={1.3} />
                      {service.location}
                    </p>
                    <p className="text-muted text-[11px] leading-relaxed">
                      {service.address}
                    </p>
                  </div>
                  <button
                    className="text-rose hover:scale-110 transition-transform duration-300"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`Add ${service.name} to favorites`}
                  >
                    <Heart size={18} strokeWidth={1.3} />
                  </button>
                </div>
                <div className="flex gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-[2px] text-rose bg-rose/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-playfair text-lg">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1 text-gold">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs">{service.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}