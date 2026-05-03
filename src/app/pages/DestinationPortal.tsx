import { useState } from "react";
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Star, 
  Bell,
  Settings as SettingsIcon,
  FileText,
  BarChart3,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

export function DestinationPortal() {
  const [activeTab, setActiveTab] = useState<"overview" | "bookings" | "services" | "analytics">("overview");

  // Mock data
  const stats = {
    todayBookings: 12,
    monthlyRevenue: 38600,
    averageRating: 4.8,
    occupancyRate: 76,
  };

  const recentBookings = [
    { id: "BK001", guest: "Priya Sharma", service: "Deep Tissue Massage", time: "10:00 AM", status: "confirmed" },
    { id: "BK002", guest: "Rohan Mehta", service: "Swedish Massage", time: "12:00 PM", status: "in-progress" },
    { id: "BK003", guest: "Sunita Patel", service: "Facial + Body Wrap", time: "02:00 PM", status: "pending" },
    { id: "BK004", guest: "Arjun Nair", service: "Hot Stone Therapy", time: "04:00 PM", status: "confirmed" },
  ];

  const upcomingServices = [
    { name: "Swedish Massage", duration: "60 min", price: 1500, bookings: 8 },
    { name: "Deep Tissue Massage", duration: "90 min", price: 1800, bookings: 6 },
    { name: "Hot Stone Therapy", duration: "75 min", price: 2500, bookings: 4 },
    { name: "Aromatherapy", duration: "60 min", price: 1600, bookings: 5 },
  ];

  const statusColors = {
    confirmed: "bg-green-50 text-green-700 border-green-200",
    "in-progress": "bg-blue-50 text-blue-700 border-blue-200",
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    completed: "bg-rose/10 text-rose border-rose/20",
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-dark border-r border-gold/10 overflow-y-auto">
        {/* Logo */}
        <div className="p-6 border-b border-gold/10">
          <div className="flex items-center gap-3">
            <h1 className="font-playfair text-2xl text-cream tracking-[6px]">
              R<span className="text-gold">A</span>RE
            </h1>
          </div>
          <p className="text-gold/40 text-[9px] uppercase tracking-[2px] mt-2">Partner Portal</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "bookings", label: "Bookings", icon: Calendar },
            { id: "services", label: "Services", icon: Clock },
            { id: "analytics", label: "Analytics", icon: TrendingUp },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-gold/10 text-gold"
                  : "text-cream/45 hover:bg-gold/5 hover:text-gold"
              }`}
            >
              <item.icon size={16} strokeWidth={1.3} />
              <span className="text-xs tracking-wider">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gold/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose flex items-center justify-center text-cream text-xs">
              SS
            </div>
            <div>
              <p className="font-playfair text-sm text-cream">Serenity Spa</p>
              <p className="text-[9px] text-gold/40 uppercase tracking-[2px]">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top Bar */}
        <header className="h-16 bg-cream border-b border-rose/10 flex items-center justify-between px-8 sticky top-0 z-10">
          <p className="text-gold text-[9px] uppercase tracking-[5px]">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </p>
          <div className="flex items-center gap-4">
            <button className="border border-rose/20 px-6 py-2 text-[10px] uppercase tracking-[3px] text-dark hover:border-rose hover:text-rose transition-all duration-300">
              + New Booking
            </button>
            <button className="relative text-muted hover:text-rose transition-colors duration-300">
              <Bell size={18} strokeWidth={1.3} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-terra rounded-full"></span>
            </button>
            <button className="text-muted hover:text-rose transition-colors duration-300">
              <SettingsIcon size={18} strokeWidth={1.3} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === "overview" && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold text-[9px] uppercase tracking-[4px]">Today's Bookings</p>
                    <Calendar size={16} className="text-rose" strokeWidth={1.3} />
                  </div>
                  <p className="font-playfair text-4xl text-dark mb-1">{stats.todayBookings}</p>
                  <p className="text-xs text-muted">+2 from yesterday</p>
                </div>

                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold text-[9px] uppercase tracking-[4px]">Monthly Revenue</p>
                    <DollarSign size={16} className="text-rose" strokeWidth={1.3} />
                  </div>
                  <p className="font-playfair text-4xl text-dark mb-1">₹{stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-xs text-muted">+12% from last month</p>
                </div>

                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold text-[9px] uppercase tracking-[4px]">Avg Rating</p>
                    <Star size={16} className="text-rose fill-rose" strokeWidth={1.3} />
                  </div>
                  <p className="font-playfair text-4xl text-dark mb-1">{stats.averageRating}</p>
                  <p className="text-xs text-muted">Based on 87 reviews</p>
                </div>

                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold text-[9px] uppercase tracking-[4px]">Occupancy Rate</p>
                    <TrendingUp size={16} className="text-rose" strokeWidth={1.3} />
                  </div>
                  <p className="font-playfair text-4xl text-dark mb-1">{stats.occupancyRate}%</p>
                  <p className="text-xs text-muted">Above average</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Bookings */}
                <div className="bg-white border border-rose/10 p-6">
                  <h2 className="font-playfair text-xl text-dark mb-6">
                    Recent <em className="text-rose">Bookings</em>
                  </h2>
                  <div className="space-y-3">
                    {recentBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 bg-linen/50 hover:bg-linen transition-colors duration-300"
                      >
                        <div>
                          <p className="text-dark text-sm mb-1">{booking.guest}</p>
                          <p className="text-muted text-xs">{booking.service}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-dark text-xs mb-2">{booking.time}</p>
                          <span
                            className={`text-[9px] uppercase tracking-[2px] px-3 py-1 border ${
                              statusColors[booking.status as keyof typeof statusColors]
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Services */}
                <div className="bg-white border border-rose/10 p-6">
                  <h2 className="font-playfair text-xl text-dark mb-6">
                    Popular <em className="text-rose">Services</em>
                  </h2>
                  <div className="space-y-4">
                    {upcomingServices.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div>
                          <p className="text-dark text-sm mb-1">{service.name}</p>
                          <p className="text-muted text-xs">
                            {service.duration} · ₹{service.price}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gold font-playfair text-lg">{service.bookings}</p>
                          <p className="text-muted text-[9px] uppercase tracking-[2px]">Bookings</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div>
              <h1 className="font-playfair text-3xl text-dark mb-8">
                Manage <em className="text-rose">Bookings</em>
              </h1>

              {/* Bookings Table */}
              <div className="bg-white border border-rose/10 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-dark">
                    <tr>
                      <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[4px] text-gold">
                        Booking ID
                      </th>
                      <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[4px] text-gold">
                        Guest
                      </th>
                      <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[4px] text-gold">
                        Service
                      </th>
                      <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[4px] text-gold">
                        Time
                      </th>
                      <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[4px] text-gold">
                        Status
                      </th>
                      <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[4px] text-gold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking, idx) => (
                      <tr
                        key={booking.id}
                        className={`border-b border-rose/10 ${
                          idx % 2 === 0 ? "bg-white" : "bg-linen/30"
                        } hover:bg-rose/5 transition-colors duration-300`}
                      >
                        <td className="px-6 py-4 text-sm text-mauve">{booking.id}</td>
                        <td className="px-6 py-4 text-sm text-dark">{booking.guest}</td>
                        <td className="px-6 py-4 text-sm text-mauve">{booking.service}</td>
                        <td className="px-6 py-4 text-sm text-mauve">{booking.time}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-[9px] uppercase tracking-[2px] px-3 py-1 border ${
                              statusColors[booking.status as keyof typeof statusColors]
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="text-rose hover:text-terra transition-colors duration-300">
                              <CheckCircle size={16} strokeWidth={1.3} />
                            </button>
                            <button className="text-muted hover:text-red-600 transition-colors duration-300">
                              <XCircle size={16} strokeWidth={1.3} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-playfair text-3xl text-dark">
                  Services & <em className="text-rose">Availability</em>
                </h1>
                <button className="bg-dark text-cream px-6 py-3 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300">
                  + Add Service
                </button>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingServices.map((service, idx) => (
                  <div key={idx} className="bg-white border border-rose/10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-dark text-lg mb-1">{service.name}</h3>
                        <p className="text-muted text-xs">{service.duration}</p>
                      </div>
                      <p className="font-playfair text-2xl text-gold">₹{service.price}</p>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Users size={14} strokeWidth={1.3} />
                        {service.bookings} bookings this week
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-rose/30 text-dark px-4 py-2 text-[10px] uppercase tracking-[2px] hover:bg-rose/10 transition-all duration-300">
                        Edit
                      </button>
                      <button className="flex-1 bg-dark text-cream px-4 py-2 text-[10px] uppercase tracking-[2px] hover:bg-terra transition-all duration-300">
                        Manage Slots
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div>
              <h1 className="font-playfair text-3xl text-dark mb-8">
                Performance <em className="text-rose">Analytics</em>
              </h1>

              {/* Analytics Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <Users className="text-rose" size={20} strokeWidth={1.3} />
                    </div>
                    <div>
                      <p className="text-gold text-[9px] uppercase tracking-[3px]">Total Customers</p>
                      <p className="font-playfair text-2xl text-dark">234</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted">+18% from last month</p>
                </div>

                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <TrendingUp className="text-rose" size={20} strokeWidth={1.3} />
                    </div>
                    <div>
                      <p className="text-gold text-[9px] uppercase tracking-[3px]">Conversion Rate</p>
                      <p className="font-playfair text-2xl text-dark">68%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted">Above industry average</p>
                </div>

                <div className="bg-white border border-rose/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <Star className="text-rose fill-rose" size={20} strokeWidth={1.3} />
                    </div>
                    <div>
                      <p className="text-gold text-[9px] uppercase tracking-[3px]">Satisfaction</p>
                      <p className="font-playfair text-2xl text-dark">96%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted">Excellent performance</p>
                </div>
              </div>

              {/* Placeholder for charts */}
              <div className="bg-white border border-rose/10 p-8">
                <h2 className="font-playfair text-xl text-dark mb-6">
                  Revenue <em className="text-rose">Trends</em>
                </h2>
                <div className="h-64 flex items-center justify-center text-muted">
                  <div className="text-center">
                    <BarChart3 size={48} className="mx-auto mb-4 opacity-30" strokeWidth={1.3} />
                    <p className="text-sm italic">Chart visualization coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
