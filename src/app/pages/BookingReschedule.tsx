import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, User, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BookingReschedule() {
  const [selectedDate, setSelectedDate] = useState(28);
  const [selectedTime, setSelectedTime] = useState("18:00 PM");
  const [rescheduleReason, setRescheduleReason] = useState("");

  const currentBooking = {
    service: "The Midnight Aura",
    duration: "90 Minute Ritual",
    date: "October 24, 2023",
    time: "18:30 — 20:00",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
  };

  const availableDates = [
    { day: 28, month: "MON", available: true },
    { day: 29, month: "TUE", available: true },
    { day: 30, month: "WED", available: true },
    { day: 31, month: "THU", available: true },
  ];

  const timeSlots = [
    { time: "14:00 PM", available: true },
    { time: "16:30 PM", available: true },
    { time: "18:00 PM", available: true },
    { time: "20:30 PM", available: true },
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <div className="border-b border-rose/10">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link
            to="/booking-confirmation"
            className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300"
          >
            <ArrowLeft size={18} strokeWidth={1.3} />
          </Link>
          <h1 className="font-playfair text-lg text-cream tracking-[0.2em]">MIDNIGHT ROSE</h1>
          <div className="flex items-center gap-4">
            <button className="text-cream/70 hover:text-cream transition-colors duration-300">
              <Calendar size={20} strokeWidth={1.3} />
            </button>
            <button className="text-cream/70 hover:text-cream transition-colors duration-300">
              <User size={20} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="mb-12">
          <p className="text-rose text-[8px] uppercase tracking-[4px] mb-6">Scheduling Atelier</p>
          <h2 className="font-playfair text-4xl lg:text-5xl text-cream mb-3">
            Something come up? We'd be happy to find a new time for your{" "}
            <em className="italic text-rose">ritual</em>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Current Selection */}
          <div>
            {/* Current Selection Card */}
            <div className="bg-[#1a0f0f] border border-rose/10 p-6 mb-8">
              <p className="text-rose text-[8px] uppercase tracking-[3px] mb-4">
                Current Selection
              </p>

              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 overflow-hidden warm-tone-overlay">
                  <ImageWithFallback
                    src={currentBooking.image}
                    alt={currentBooking.service}
                    className="w-full h-full object-cover warm-tone-soft"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-cream mb-1">
                    {currentBooking.service}
                  </h3>
                  <p className="text-cream/50 text-xs">{currentBooking.duration}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-rose/10">
                <div className="flex items-start justify-between">
                  <span className="text-rose text-[8px] uppercase tracking-[2px]">Date</span>
                  <span className="text-cream text-sm">{currentBooking.date}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-rose text-[8px] uppercase tracking-[2px]">Time</span>
                  <span className="text-cream text-sm">{currentBooking.time}</span>
                </div>
              </div>
            </div>

            {/* Spa Atmosphere Image */}
            <div className="aspect-[4/3] overflow-hidden warm-tone-overlay">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1602874801007-e159f5ecb611?w=800&q=80"
                alt="Spa atmosphere"
                className="w-full h-full object-cover warm-tone-soft"
              />
            </div>
          </div>

          {/* Right - New Date & Time Selection */}
          <div>
            {/* Select New Date */}
            <div className="mb-8">
              <p className="text-rose text-[8px] uppercase tracking-[3px] mb-4">
                Select New Date
              </p>
              <div className="grid grid-cols-4 gap-3">
                {availableDates.map((date) => (
                  <button
                    key={date.day}
                    onClick={() => setSelectedDate(date.day)}
                    className={`p-4 text-center transition-all duration-300 ${
                      selectedDate === date.day
                        ? "bg-rose text-cream"
                        : "bg-[#1a0f0f] text-cream hover:bg-rose/20"
                    }`}
                  >
                    <p className="text-[8px] uppercase tracking-[2px] mb-2 opacity-70">
                      {date.month}
                    </p>
                    <p className="text-2xl font-playfair">{date.day}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Available Slots */}
            <div className="mb-8">
              <p className="text-rose text-[8px] uppercase tracking-[3px] mb-4">
                Available Slots
              </p>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`py-3 text-sm transition-all duration-300 ${
                      selectedTime === slot.time
                        ? "bg-rose text-cream border-2 border-rose"
                        : slot.available
                        ? "bg-[#1a0f0f] text-cream border-2 border-rose/20 hover:border-rose/50"
                        : "bg-[#1a0f0f]/30 text-cream/30 border-2 border-rose/10 cursor-not-allowed"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason for Reschedule */}
            <div className="mb-8">
              <p className="text-rose text-[8px] uppercase tracking-[3px] mb-4">
                Reason for Reschedule (Optional)
              </p>
              <textarea
                value={rescheduleReason}
                onChange={(e) => setRescheduleReason(e.target.value)}
                placeholder="Tell us if we can help with anything"
                className="w-full bg-[#1a0f0f] border border-rose/20 text-cream text-sm p-4 placeholder:text-cream/30 placeholder:italic resize-none focus:outline-none focus:border-rose transition-colors duration-300"
                rows={4}
              />
            </div>

            {/* Request Reschedule Button */}
            <button className="w-full bg-rose text-cream py-4 text-[10px] uppercase tracking-[3px] hover:bg-rose/90 transition-all duration-300 mb-4">
              Request Reschedule
            </button>

            {/* Notice */}
            <p className="text-center text-cream/50 text-[9px] uppercase tracking-[2px] leading-relaxed">
              Requests are subject to availability.
              <br />
              Our atelier will confirm within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
