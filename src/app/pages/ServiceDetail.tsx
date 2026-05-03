import { useState } from "react";
import { useParams, Link } from "react-router";
import { MapPin, Clock, Star, Heart, Share2, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ServiceDetail() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("October 2025");
  const [selectedService, setSelectedService] = useState<{
    name: string;
    duration: string;
    price: number;
  } | null>(null);

  // Mock spa/destination data
  const spa = {
    id: id,
    name: "Azure Wellness Spa",
    rating: 4.9,
    reviewCount: 180,
    category: "Luxury",
    location: "Downtown District",
    address: "321 Linking Road, Mumbai, Maharashtra 400050",
    hours: "Open until 9:00 PM",
    phone: "(310) 555-7890",
    heroImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=80",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=80",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=80",
    ],
    about:
      "Nestled in the heart of the city, Azure Wellness Spa offers a sanctuary of relaxation and rejuvenation. Our experienced therapists combine ancient healing techniques with modern wellness practices to deliver transformative experiences tailored to your unique needs.",
    amenities: ["Free Wi-Fi", "Valet Parking", "Sauna Access", "Herbal Tea Bar"],
    services: [
      {
        name: "Massage Therapy",
        subtitle: "Signature Deep Tissue",
        description: "Release tension in the muscle and the connective tissue or fascia.",
        duration: "60 min",
        price: 145,
        category: "Massage",
      },
      {
        name: "Aromatherapy Relaxation",
        subtitle: "",
        description: "Smooth, gentle, flowing style that promotes general relaxation and improves circulation.",
        duration: "90 min",
        price: 120,
        category: "Wellness",
      },
      {
        name: "Hot Stone Therapy",
        subtitle: "",
        description: "Warm basalt smooth placed on the entire on the body.",
        duration: "75 min",
        price: 180,
        category: "Massage",
      },
      {
        name: "Hydra-Facial Glow",
        subtitle: "Facials & Skincare",
        description: "Deep cleansing, exfoliation, and hydration using super serum filled with antioxidants.",
        duration: "60 min",
        price: 160,
        category: "Facial",
        highlight: true,
      },
      {
        name: "Anti-Aging Collagen Boost",
        subtitle: "",
        description: "Restore fine lines and improves skin elasticity.",
        duration: "90 min",
        price: 190,
        category: "Facial",
      },
    ],
    specialists: [
      { name: "Sarah J.", role: "Master Esthetician" },
      { name: "David L.", role: "Massage Therapist" },
      { name: "Emma R.", role: "Holistic Healer" },
      { name: "Marcus T.", role: "Sports Therapist" },
    ],
    ratings: {
      5: 90,
      4: 15,
      3: 7,
      2: 2,
      1: 1,
    },
    recentReview: {
      author: "Anna M.",
      time: "2 days ago",
      rating: 5,
      text: "Absolutely divine experience. The hot stone massage was incredible and the staff was so attentive. Will definitely be back!",
    },
    availableDates: [
      { day: 29, available: true },
      { day: 30, available: true },
      { day: 1, available: true },
      { day: 2, available: true },
      { day: 3, available: true },
      { day: 4, available: true },
      { day: 5, available: true },
    ],
    timeSlots: [
      { time: "10:00 AM", available: true },
      { time: "11:30 AM", available: true },
      { time: "1:00 PM", available: true },
      { time: "4:00 PM", available: false },
      { time: "5:15 PM", available: true },
      { time: "9:30 PM", available: false },
    ],
  };

  const currentDay = new Date().getDate();

  return (
    <div className="bg-cream pt-20 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-rose transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-rose transition-colors duration-300">
            Book
          </Link>
          <span>/</span>
          <span className="text-dark">{spa.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl text-dark mb-3">
              Azure <span className="italic text-rose">Wellness</span> Spa
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-gold text-gold" strokeWidth={1.3} />
                <span className="text-dark font-medium">{spa.rating}</span>
                <span className="text-muted">({spa.reviewCount} reviews)</span>
              </div>
              <span className="text-muted">·</span>
              <span className="text-gold text-xs uppercase tracking-[2px]">{spa.category}</span>
            </div>
            <div className="flex flex-col gap-2 text-xs text-mauve mb-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.3} className="text-rose flex-shrink-0" />
                <span>{spa.address}</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <Clock size={14} strokeWidth={1.3} className="text-rose flex-shrink-0" />
                <span>{spa.hours}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 border border-rose/20 hover:bg-rose/5 transition-all duration-300"
              aria-label="Share this spa"
            >
              <Share2 size={14} strokeWidth={1.3} className="text-mauve" />
              <span className="text-xs text-mauve">Share</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-rose/20 hover:bg-rose/5 transition-all duration-300"
              aria-label="Save to favorites"
            >
              <Heart size={14} strokeWidth={1.3} className="text-mauve" />
              <span className="text-xs text-mauve">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="grid grid-cols-4 gap-2 h-[400px]">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 warm-tone-overlay overflow-hidden">
            <ImageWithFallback
              src={spa.heroImages[0]}
              alt="Main spa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 warm-tone-soft"
            />
          </div>
          {/* Four smaller images */}
          {spa.heroImages.slice(1).map((img, idx) => (
            <div key={idx} className="warm-tone-overlay overflow-hidden">
              <ImageWithFallback
                src={img}
                alt={`Gallery ${idx + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 warm-tone-soft"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <div>
              <h2 className="font-playfair text-2xl text-dark mb-4">
                About <em className="text-rose">Azure</em>
              </h2>
              <p className="text-mauve text-sm leading-relaxed mb-6">{spa.about}</p>
              <div className="flex flex-wrap gap-3">
                {spa.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 border border-rose/20 text-mauve"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

            {/* Aromatherapy Enhancement */}
            <div>
              <div className="mb-8">
                <h2 className="font-playfair text-3xl text-dark mb-3">
                  Elevate your <em className="italic text-rose">ritual</em>
                </h2>
                <p className="text-mauve text-sm leading-relaxed max-w-2xl">
                  Gentle essences for the soul, curated to enhance your journey through scent and tranquility.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    name: "Golden Hour Aloe",
                    category: "Aromatherapy",
                    price: 34,
                    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
                  },
                  {
                    name: "Midnight s.c. Oil",
                    category: "Essential Oil",
                    price: 48,
                    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
                  },
                  {
                    name: "Silk Dreams Soak",
                    category: "Bath Ritual",
                    price: 52,
                    image: "https://images.unsplash.com/photo-1602874801007-e159f5ecb611?w=600&q=80",
                  },
                  {
                    name: "Matte Earth Tray",
                    category: "Ritual Tools",
                    price: 68,
                    image: "https://images.unsplash.com/photo-1600857062241-98e5e6500998?w=600&q=80",
                  },
                  {
                    name: "Oakmoss Purify",
                    category: "Aromatherapy",
                    price: 38,
                    image: "https://images.unsplash.com/photo-1607748851752-9a6c2d05a2f2?w=600&q=80",
                  },
                  {
                    name: "Ethereal Rose Mist",
                    category: "Spray Essence",
                    price: 42,
                    image: "https://images.unsplash.com/photo-1602874801007-e159f5ecb611?w=600&q=80",
                  },
                ].map((product, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-sm mb-4 aspect-[4/5] warm-tone-overlay bg-linen">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 warm-tone-soft"
                      />
                      <button
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <Plus size={14} strokeWidth={1.3} className="text-dark" />
                      </button>
                    </div>
                    <p className="text-gold text-[9px] uppercase tracking-[3px] mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-dark text-sm mb-1">{product.name}</h3>
                    <p className="text-mauve text-xs">${product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

            {/* Service Menu */}
            <div>
              <h2 className="font-playfair text-2xl text-dark mb-6">
                Service <em className="text-rose">Menu</em>
              </h2>
              <div className="space-y-3">
                {spa.services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`p-5 transition-all duration-300 ${
                      service.highlight
                        ? "bg-linen border border-rose/10"
                        : "bg-white border border-rose/5 hover:bg-linen/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-dark font-medium mb-1">{service.name}</h3>
                        {service.subtitle && (
                          <p className="text-gold text-[9px] uppercase tracking-[2px] mb-2">
                            {service.subtitle}
                          </p>
                        )}
                        <p className="text-mauve text-xs leading-relaxed mb-2">
                          {service.description}
                        </p>
                        <p className="text-muted text-xs">{service.duration}</p>
                      </div>
                      <div className="flex items-start gap-3 ml-6">
                        <div className="text-right">
                          <p className="font-playfair text-2xl text-dark">${service.price}</p>
                        </div>
                        <button
                          className="w-8 h-8 rounded-full border border-rose/30 flex items-center justify-center hover:bg-rose hover:text-cream hover:border-rose transition-all duration-300"
                          onClick={() =>
                            setSelectedService({
                              name: service.name,
                              duration: service.duration,
                              price: service.price,
                            })
                          }
                          aria-label={`Select ${service.name}`}
                        >
                          <Plus size={14} strokeWidth={1.3} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

            {/* Meet the Specialists */}
            <div>
              <h2 className="font-playfair text-2xl text-dark mb-6">
                Meet the <em className="text-rose">Specialists</em>
              </h2>
              <div className="grid grid-cols-4 gap-6">
                {spa.specialists.map((specialist, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-linen mx-auto mb-3 flex items-center justify-center">
                      <span className="text-rose font-playfair text-lg">
                        {specialist.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-dark text-sm mb-1">{specialist.name}</p>
                    <p className="text-muted text-[10px]">{specialist.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

            {/* Ratings & Reviews */}
            <div>
              <h2 className="font-playfair text-2xl text-dark mb-6">
                Ratings & <em className="text-rose">Reviews</em>
              </h2>

              {/* Overall Rating */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left - Star Rating */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-playfair text-5xl text-dark">{spa.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-gold text-gold"
                          strokeWidth={1.3}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted text-xs">{spa.reviewCount} reviews</p>
                </div>

                {/* Right - Rating Breakdown */}
                <div className="space-y-2">
                  {Object.entries(spa.ratings)
                    .reverse()
                    .map(([stars, percentage]) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-xs text-muted w-3">{stars}</span>
                        <Star size={10} className="fill-gold text-gold" strokeWidth={1.3} />
                        <div className="flex-1 h-2 bg-cream overflow-hidden">
                          <div
                            className="h-full bg-rose transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted w-10 text-right">
                          {percentage}%
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Recent Review */}
              <div className="bg-linen p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose flex items-center justify-center">
                      <span className="text-cream text-sm font-playfair">
                        {spa.recentReview.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-dark text-sm">{spa.recentReview.author}</p>
                      <p className="text-muted text-xs">{spa.recentReview.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(spa.recentReview.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-gold text-gold"
                        strokeWidth={1.3}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-mauve text-sm leading-relaxed">
                  {spa.recentReview.text}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-linen p-6 sticky top-24">
              <h3 className="font-playfair text-xl text-dark mb-6">
                Book <em className="text-rose">Appointment</em>
              </h3>

              {/* Month Selector */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 hover:bg-cream transition-colors duration-300">
                  <ChevronLeft size={16} strokeWidth={1.3} className="text-dark" />
                </button>
                <p className="text-dark text-sm">{selectedMonth}</p>
                <button className="p-2 hover:bg-cream transition-colors duration-300">
                  <ChevronRight size={16} strokeWidth={1.3} className="text-dark" />
                </button>
              </div>

              {/* Calendar */}
              <div className="mb-6">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <div
                      key={day}
                      className="text-center text-[10px] text-muted uppercase tracking-wider py-2"
                    >
                      {day.charAt(0)}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {spa.availableDates.map((date, idx) => (
                    <button
                      key={`date-${idx}-${date.day}`}
                      onClick={() => setSelectedDate(date.day.toString())}
                      disabled={!date.available}
                      className={`aspect-square flex items-center justify-center text-sm transition-all duration-300 ${
                        selectedDate === date.day.toString()
                          ? "bg-rose text-cream"
                          : date.available
                          ? "bg-cream text-dark hover:bg-rose/10"
                          : "bg-cream/50 text-muted/30 cursor-not-allowed"
                      }`}
                    >
                      {date.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Time Slots */}
              <div className="mb-6">
                <p className="text-dark text-xs uppercase tracking-[2px] mb-3">
                  Available Time Slots
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {spa.timeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`py-2 text-xs transition-all duration-300 ${
                        selectedTime === slot.time
                          ? "bg-dark text-cream"
                          : slot.available
                          ? "bg-cream text-dark border border-rose/20 hover:border-rose"
                          : "bg-cream/50 text-muted/30 border border-rose/10 cursor-not-allowed"
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Service Placeholder */}
              <div className="mb-6 p-4 bg-cream border border-rose/10">
                <p className="text-gold text-[9px] uppercase tracking-[3px] mb-2">
                  Selected Service
                </p>
                <p className="text-dark text-sm mb-1">
                  {selectedService ? selectedService.name : "Signature Deep Tissue"}
                </p>
                <p className="text-muted text-xs">
                  {selectedService ? selectedService.duration : "60 min"} · $
                  {selectedService ? selectedService.price : 145}
                </p>
              </div>

              {/* Book Button */}
              <Link
                to="/booking-review"
                className="block w-full bg-dark text-cream py-4 text-center text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300 mb-3"
              >
                Confirm Booking
              </Link>
              <p className="text-center text-muted text-[10px] italic">
                ✦ Return booking is accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}