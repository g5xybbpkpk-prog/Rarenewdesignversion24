import { useState } from "react";
import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BookingReview() {
  const [paymentMethod, setPaymentMethod] = useState<"now" | "phonepe" | "razorpay" | "venue">(
    "now"
  );
  const [specialRequests, setSpecialRequests] = useState("");

  const booking = {
    service: {
      name: "Signature Facial",
      category: "Signature Choice",
      duration: "75 Minutes",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    },
    professional: "Elena Rodriguez",
    dateTime: "Oct 24, 2023 at 2:30 PM",
    location: "Lame Wellness Spa",
    items: [
      { name: "Signature Facial", price: 145.0 },
      { name: "Ritual Test", price: 12.0 },
      { name: "Taxes", price: 11.6 },
    ],
    total: 168.6,
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-8 mb-8">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[2px]">
          <span className="text-muted">Selection</span>
          <span className="text-muted">›</span>
          <span className="text-dark font-medium">Summary</span>
          <span className="text-muted">›</span>
          <span className="text-muted">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="font-playfair text-4xl text-dark mb-3">
          Review <em className="italic text-rose">Ritual</em>
        </h1>
        <p className="text-mauve text-sm mb-12">
          Please confirm your selections and proceed to secure your appointment
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Signature Choice Card */}
            <div className="bg-linen p-8">
              <p className="text-gold text-[8px] uppercase tracking-[3px] mb-4">
                Signature Choice
              </p>
              <div className="flex gap-6">
                <div className="w-24 h-24 overflow-hidden warm-tone-overlay">
                  <ImageWithFallback
                    src={booking.service.image}
                    alt={booking.service.name}
                    className="w-full h-full object-cover warm-tone-soft"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl text-dark mb-2 italic">
                    {booking.service.name}
                  </h3>
                  <div className="flex items-center gap-2 text-mauve text-xs">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{booking.service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-rose/10">
                <div>
                  <p className="text-gold text-[8px] uppercase tracking-[2px] mb-2">
                    Professional
                  </p>
                  <p className="text-dark text-sm">{booking.professional}</p>
                </div>
                <div>
                  <p className="text-gold text-[8px] uppercase tracking-[2px] mb-2">Date & Time</p>
                  <p className="text-dark text-sm">{booking.dateTime}</p>
                </div>
                <div>
                  <p className="text-gold text-[8px] uppercase tracking-[2px] mb-2">Location</p>
                  <p className="text-dark text-sm">{booking.location}</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-linen p-8">
              <h3 className="font-playfair text-xl text-dark mb-6">Payment Method</h3>

              <div className="space-y-3">
                {/* Pay Now */}
                <label className="flex items-center gap-4 p-4 bg-cream cursor-pointer hover:bg-white transition-colors duration-300">
                  <input
                    type="radio"
                    name="payment"
                    value="now"
                    checked={paymentMethod === "now"}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-4 h-4 text-dark border-rose/30 focus:ring-rose"
                  />
                  <span className="text-dark text-xs uppercase tracking-[2px]">Pay Now</span>
                </label>

                {/* PhonePe UPI */}
                <label className="flex items-center justify-between p-4 bg-cream cursor-pointer hover:bg-white transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="phonepe"
                      checked={paymentMethod === "phonepe"}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4 text-dark border-rose/30 focus:ring-rose"
                    />
                    <span className="text-dark text-xs uppercase tracking-[2px]">PhonePe UPI</span>
                  </div>
                  <div className="text-muted text-xs">UPI</div>
                </label>

                {/* Razorpay */}
                <label className="flex items-center justify-between p-4 bg-cream cursor-pointer hover:bg-white transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="razorpay"
                      checked={paymentMethod === "razorpay"}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4 text-dark border-rose/30 focus:ring-rose"
                    />
                    <span className="text-dark text-xs uppercase tracking-[2px]">
                      Razorpay (Cards, Netbanking)
                    </span>
                  </div>
                  <div className="text-muted text-xs">Cards</div>
                </label>

                {/* Pay at Venue */}
                <label className="flex items-center gap-4 p-4 bg-cream cursor-pointer hover:bg-white transition-colors duration-300">
                  <input
                    type="radio"
                    name="payment"
                    value="venue"
                    checked={paymentMethod === "venue"}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-4 h-4 text-dark border-rose/30 focus:ring-rose"
                  />
                  <span className="text-dark text-xs uppercase tracking-[2px]">Pay at Venue</span>
                </label>

                {/* Warning for Pay at Venue */}
                {paymentMethod === "venue" && (
                  <div className="bg-rose/5 border-l-2 border-rose p-4 flex gap-3">
                    <AlertTriangle size={16} className="text-rose shrink-0 mt-0.5" strokeWidth={1.3} />
                    <p className="text-rose text-xs italic leading-relaxed">
                      Please note: No refunds are available for payments made at the venue.
                    </p>
                  </div>
                )}
              </div>

              {/* Special Requests */}
              <div className="mt-6 pt-6 border-t border-rose/10">
                <p className="text-gold text-[8px] uppercase tracking-[2px] mb-3">
                  Special Requests
                </p>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Allergies, specific concerns, or requests..."
                  className="w-full bg-cream border-none text-mauve text-xs p-4 placeholder:text-mauve/40 placeholder:italic resize-none focus:outline-none focus:ring-1 focus:ring-rose/30"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-linen p-8 sticky top-24">
              <h3 className="text-gold text-[8px] uppercase tracking-[3px] mb-6">Order Summary</h3>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {booking.items.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between">
                    <span className="text-mauve text-sm">{item.name}</span>
                    <span className="text-dark text-sm">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-rose/10 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-dark text-xs uppercase tracking-[2px]">
                    Total Investment
                  </span>
                  <span className="font-playfair text-3xl text-dark">
                    ${booking.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Complete Booking Button */}
              <Link
                to="/booking-confirmation"
                className="block w-full bg-dark text-cream py-4 text-center text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300 mb-4"
              >
                Complete Ritual Booking
              </Link>

              {/* Security Note */}
              <div className="text-center">
                <p className="text-muted text-[9px] leading-relaxed mb-2">
                  ✦ Securely encrypted payment. We never store your card details.
                </p>
                <p className="text-muted text-[9px] leading-relaxed">
                  All transactions are encrypted with 256-bit SSL encryption for a trusted
                  experience.
                </p>
              </div>

              {/* Encrypted Badge */}
              <div className="mt-6 pt-6 border-t border-rose/10 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-rose"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark text-xs uppercase tracking-[2px] mb-1">
                    Encrypted Transaction
                  </p>
                  <p className="text-muted text-[9px] leading-relaxed">
                    Your privacy and financial data are secured with SSL 256-bit encryption for a
                    trusted experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
