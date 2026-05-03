import { Link } from "react-router";
import { Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BookingConfirmation() {
  const booking = {
    service: {
      name: "Midnight Rose Signature Facial",
      price: 168.6,
    },
    date: "October 24, 2023",
    time: "at 4:30 PM",
    provider: "Elena Vance",
    role: "Senior Aesthetician",
    location: "Midnight Atelier",
    address: "Velvet Soho, NY",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80",
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Header with Logo */}
      <div className="border-b border-rose/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <Link to="/" className="text-cream font-playfair text-xl tracking-[0.3em]">
            RARE
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <p className="text-rose text-[8px] uppercase tracking-[4px] mb-6">Confirmation</p>
            <h1 className="font-playfair text-5xl lg:text-6xl text-cream mb-4">
              Your ritual
            </h1>
            <h2 className="font-playfair text-5xl lg:text-6xl text-rose italic mb-8">
              is set
            </h2>
            <p className="text-cream/70 text-sm leading-relaxed mb-12">
              We have prepared our sanctuary for your arrival. Your moment of restoration awaits.
            </p>

            {/* Booking Details Card */}
            <div className="bg-dark border border-rose/20 p-8 mb-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-rose text-[8px] uppercase tracking-[3px] mb-2">
                    Selected Ritual
                  </p>
                  <h3 className="font-playfair text-2xl text-cream mb-1">
                    {booking.service.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-rose text-[8px] uppercase tracking-[3px] mb-2">Investment</p>
                  <p className="font-playfair text-2xl text-cream">
                    ${booking.service.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-rose/10">
                {/* Date & Time */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-rose" strokeWidth={1.3} />
                    <p className="text-rose text-[8px] uppercase tracking-[2px]">Date & Time</p>
                  </div>
                  <p className="text-cream text-sm mb-1">{booking.date}</p>
                  <p className="text-cream/70 text-xs">{booking.time}</p>
                </div>

                {/* Provider */}
                <div>
                  <p className="text-rose text-[8px] uppercase tracking-[2px] mb-2">Provider</p>
                  <p className="text-cream text-sm mb-1">{booking.provider}</p>
                  <p className="text-cream/70 text-xs">{booking.role}</p>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-rose" strokeWidth={1.3} />
                    <p className="text-rose text-[8px] uppercase tracking-[2px]">Location</p>
                  </div>
                  <p className="text-cream text-sm mb-1">{booking.location}</p>
                  <p className="text-cream/70 text-xs">{booking.address}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-rose text-cream py-4 text-[10px] uppercase tracking-[3px] hover:bg-rose/90 transition-all duration-300">
                Add to Calendar
              </button>
              <button className="flex-1 border border-rose/30 text-cream py-4 text-[10px] uppercase tracking-[3px] hover:bg-rose/10 transition-all duration-300">
                View Directions
              </button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden warm-tone-overlay">
              <ImageWithFallback
                src={booking.heroImage}
                alt="Spa sanctuary"
                className="w-full h-full object-cover warm-tone-soft"
              />
            </div>

            {/* Payment Notice Card - Overlapping */}
            <div className="absolute -bottom-8 -right-8 bg-linen p-8 max-w-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-cream"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-dark text-sm uppercase tracking-[2px] mb-2">
                    Payment at Venue
                  </h4>
                  <p className="text-mauve text-xs leading-relaxed mb-3">
                    Payment of <span className="text-dark font-medium">${booking.service.price.toFixed(2)}</span> will be collected at the venue.
                  </p>
                  <p className="text-muted text-[9px] italic leading-relaxed">
                    Please note: No refunds are available for payments made at the venue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-rose/10 mt-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 text-[9px] uppercase tracking-[2px] text-cream/50">
              <Link to="#" className="hover:text-cream transition-colors duration-300">
                Inquiries
              </Link>
              <Link to="#" className="hover:text-cream transition-colors duration-300">
                Privacy
              </Link>
              <Link to="#" className="hover:text-cream transition-colors duration-300">
                Terms
              </Link>
            </div>
            <div>
              <p className="font-playfair text-xs text-cream/50">
                © 2024 RARE · Curated Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
