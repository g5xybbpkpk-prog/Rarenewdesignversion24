import { Calendar, Package, Wallet, Star, TrendingUp, User, Store, MapPin, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Dashboard() {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [selectedPartnerType, setSelectedPartnerType] = useState<string | null>(null);

  const stats = [
    { label: "Total Spend", value: "$1,248", icon: TrendingUp },
    { label: "Orders", value: "12", icon: Package },
    { label: "Points", value: "2,450", icon: Star },
    { label: "Reviews", value: "8", icon: Star },
  ];

  const bookings = [
    {
      id: 1,
      service: "Lume Wellness Spa",
      type: "Deep Tissue Massage",
      date: "March 25, 2026",
      status: "Upcoming",
    },
    {
      id: 2,
      service: "Serenity Yoga Studio",
      type: "Vinyasa Flow",
      date: "March 22, 2026",
      status: "Completed",
    },
  ];

  const orders = [
    {
      id: "ORD-1024",
      date: "March 18, 2026",
      total: "$128",
      status: "Delivered",
      items: 3,
    },
    {
      id: "ORD-1023",
      date: "March 10, 2026",
      total: "$95",
      status: "Delivered",
      items: 2,
    },
  ];

  return (
    <div className="bg-cream pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-rose/10 border-2 border-rose/30 flex items-center justify-center">
              <User size={32} className="text-rose" strokeWidth={1.3} />
            </div>
            <div>
              <h1 className="font-playfair text-4xl text-dark">
                My <em className="text-rose">Ritual</em>
              </h1>
              <p className="text-muted text-sm">Welcome back, Sarah</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-linen p-6">
              <div className="flex items-center gap-3 mb-3">
                <stat.icon size={18} className="text-rose" strokeWidth={1.3} />
                <p className="text-gold text-[9px] uppercase tracking-[3px]">
                  {stat.label}
                </p>
              </div>
              <p className="font-playfair text-3xl text-dark">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Trust Score */}
          <div className="bg-dark p-8">
            <p className="text-gold text-[9px] uppercase tracking-[4px] mb-6">
              Trust Score
            </p>
            <div className="flex items-center gap-8">
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="rgba(212, 175, 122, 0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#C9897A"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-playfair text-3xl text-cream">85%</span>
                </div>
              </div>
              <div>
                <p className="text-cream/70 text-sm mb-3">
                  Your trust level is excellent. Keep engaging with the community to
                  maintain it.
                </p>
                <button className="text-rose text-xs uppercase tracking-[3px] hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          </div>

          {/* Skin Profile */}
          <div className="bg-linen p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gold text-[9px] uppercase tracking-[4px]">
                Skin Profile
              </p>
              <button className="text-rose text-xs uppercase tracking-[3px] hover:underline">
                Update
              </button>
            </div>
            <p className="font-playfair text-2xl text-dark mb-6">Combination</p>
            <div className="space-y-4">
              {[
                { concern: "Fine Lines", level: 30 },
                { concern: "Uneven Texture", level: 45 },
                { concern: "Mild Redness", level: 20 },
              ].map((item) => (
                <div key={item.concern}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-dark text-sm">{item.concern}</p>
                    <p className="text-muted text-xs">{item.level}%</p>
                  </div>
                  <div className="h-1 bg-dark/10 overflow-hidden">
                    <div
                      className="h-full bg-rose"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking History */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair text-3xl text-dark">
              Recent <em className="text-rose">Bookings</em>
            </h2>
            <button className="text-rose text-xs uppercase tracking-[3px] hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-linen p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Calendar size={20} className="text-rose" strokeWidth={1.3} />
                  <div>
                    <p className="text-dark text-sm mb-1">{booking.service}</p>
                    <p className="text-muted text-xs">
                      {booking.type} · {booking.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[9px] uppercase tracking-[2px] px-4 py-2 ${
                    booking.status === "Upcoming"
                      ? "bg-gold/20 text-gold"
                      : "bg-rose/10 text-rose"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Order History */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair text-3xl text-dark">
              Order <em className="text-rose">History</em>
            </h2>
            <button className="text-rose text-xs uppercase tracking-[3px] hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-linen p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Package size={20} className="text-rose" strokeWidth={1.3} />
                  <div>
                    <p className="text-dark text-sm mb-1">Order {order.id}</p>
                    <p className="text-muted text-xs">
                      {order.items} items · {order.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-playfair text-lg text-gold">
                    {order.total}
                  </span>
                  <span className="text-[9px] uppercase tracking-[2px] bg-rose/10 text-rose px-4 py-2">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join as Partner Section */}
        <div className="mb-16">
          <div className="bg-linen p-10 text-center">
            <p className="text-gold text-[9px] uppercase tracking-[5px] mb-4">
              Partner With Us
            </p>
            <h2 className="font-playfair text-4xl text-dark mb-4">
              Join the <em className="text-rose">RARE</em> Community
            </h2>
            <p className="text-mauve text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
              Expand your reach and connect with wellness enthusiasts. Partner with RARE to showcase your destination, services, or products to our curated community.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Destination Partner */}
              <button
                onClick={() => {
                  setSelectedPartnerType("destination");
                  setShowPartnerModal(true);
                }}
                className="group bg-cream p-8 hover:bg-dark transition-all duration-500 text-left"
              >
                <div className="w-14 h-14 rounded-full bg-rose/10 group-hover:bg-rose/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <MapPin size={24} className="text-rose" strokeWidth={1.3} />
                </div>
                <h3 className="font-playfair text-xl text-dark group-hover:text-cream mb-2 transition-colors duration-300">
                  Destination Partner
                </h3>
                <p className="text-muted group-hover:text-cream/60 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  List your spa, wellness center, or retreat location on our platform.
                </p>
                <span className="text-rose group-hover:text-gold text-[10px] uppercase tracking-[3px] transition-colors duration-300">
                  Apply Now →
                </span>
              </button>

              {/* Service Provider */}
              <button
                onClick={() => {
                  setSelectedPartnerType("service");
                  setShowPartnerModal(true);
                }}
                className="group bg-cream p-8 hover:bg-dark transition-all duration-500 text-left"
              >
                <div className="w-14 h-14 rounded-full bg-rose/10 group-hover:bg-rose/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Star size={24} className="text-rose" strokeWidth={1.3} />
                </div>
                <h3 className="font-playfair text-xl text-dark group-hover:text-cream mb-2 transition-colors duration-300">
                  Service Provider
                </h3>
                <p className="text-muted group-hover:text-cream/60 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  Offer your wellness services and expertise to our community.
                </p>
                <span className="text-rose group-hover:text-gold text-[10px] uppercase tracking-[3px] transition-colors duration-300">
                  Apply Now →
                </span>
              </button>

              {/* Product Brand */}
              <button
                onClick={() => {
                  setSelectedPartnerType("product");
                  setShowPartnerModal(true);
                }}
                className="group bg-cream p-8 hover:bg-dark transition-all duration-500 text-left"
              >
                <div className="w-14 h-14 rounded-full bg-rose/10 group-hover:bg-rose/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <ShoppingBag size={24} className="text-rose" strokeWidth={1.3} />
                </div>
                <h3 className="font-playfair text-xl text-dark group-hover:text-cream mb-2 transition-colors duration-300">
                  Product Brand
                </h3>
                <p className="text-muted group-hover:text-cream/60 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  Feature your beauty and wellness products in our curated shop.
                </p>
                <span className="text-rose group-hover:text-gold text-[10px] uppercase tracking-[3px] transition-colors duration-300">
                  Apply Now →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Wallet */}
        <div className="bg-dark p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Wallet size={24} className="text-gold" strokeWidth={1.3} />
              <p className="text-gold text-[9px] uppercase tracking-[4px]">
                Wallet Balance
              </p>
            </div>
            <button className="border border-gold/35 text-gold px-6 py-2 text-[10px] uppercase tracking-[3px] hover:bg-gold hover:text-dark transition-all duration-300">
              Add Funds
            </button>
          </div>
          <p className="font-playfair text-5xl text-cream mb-8">$124.50</p>
          <div className="border-t border-cream/10 pt-6">
            <p className="text-cream/70 text-xs mb-4">Recent Activity</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-cream/60">Reward Points Redeemed</span>
                <span className="text-rose">+$25.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-cream/60">Order Payment</span>
                <span className="text-cream/60">-$95.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Application Modal */}
      {showPartnerModal && (
        <div
          className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setShowPartnerModal(false)}
        >
          <div
            className="bg-cream max-w-2xl w-full p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gold text-[9px] uppercase tracking-[5px] mb-2">
                  Partnership Application
                </p>
                <h2 className="font-playfair text-3xl text-dark">
                  {selectedPartnerType === "destination" && "Destination Partner"}
                  {selectedPartnerType === "service" && "Service Provider"}
                  {selectedPartnerType === "product" && "Product Brand"}
                </h2>
              </div>
              <button
                onClick={() => setShowPartnerModal(false)}
                className="text-muted hover:text-rose transition-colors duration-300"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <form className="space-y-6">
              {/* Business Name */}
              <div>
                <label className="block text-dark text-sm mb-2">
                  {selectedPartnerType === "destination" && "Business Name"}
                  {selectedPartnerType === "service" && "Service Name"}
                  {selectedPartnerType === "product" && "Brand Name"}
                  <span className="text-rose">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                  placeholder="Enter your business name"
                />
              </div>

              {/* Contact Person */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark text-sm mb-2">
                    Contact Person<span className="text-rose">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-dark text-sm mb-2">
                    Email<span className="text-rose">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* Phone & Website */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark text-sm mb-2">
                    Phone Number<span className="text-rose">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-dark text-sm mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                    placeholder="https://your-website.com"
                  />
                </div>
              </div>

              {/* Address (for destination partners) */}
              {selectedPartnerType === "destination" && (
                <div>
                  <label className="block text-dark text-sm mb-2">
                    Location Address<span className="text-rose">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30 mb-3"
                    placeholder="Street address"
                  />
                  <div className="grid md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      className="bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      className="bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                      placeholder="State"
                    />
                    <input
                      type="text"
                      className="bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                      placeholder="ZIP"
                    />
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block text-dark text-sm mb-2">
                  Description<span className="text-rose">*</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30 resize-none"
                  placeholder="Tell us about your business and why you'd like to partner with RARE..."
                />
              </div>

              {/* Experience / Expertise */}
              <div>
                <label className="block text-dark text-sm mb-2">
                  {selectedPartnerType === "destination" && "Years in Business"}
                  {selectedPartnerType === "service" && "Years of Experience"}
                  {selectedPartnerType === "product" && "Brand Established"}
                </label>
                <input
                  type="text"
                  className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30"
                  placeholder="e.g., 5 years"
                />
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-dark text-sm mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-linen border-0 px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-rose/30 resize-none"
                  placeholder="Any other details you'd like to share..."
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPartnerModal(false)}
                  className="flex-1 bg-transparent border border-muted text-muted px-8 py-4 text-[10px] uppercase tracking-[3px] hover:border-rose hover:text-rose transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-dark text-cream px-8 py-4 text-[10px] uppercase tracking-[3px] hover:bg-rose transition-all duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}