import { Link } from "react-router";
import { CheckCircle2, Package, Mail } from "lucide-react";

export function OrderConfirmation() {
  const orderNumber = "RA-" + Math.random().toString(36).substring(7).toUpperCase();
  const orderDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const orderItems = [
    {
      id: 1,
      name: "The Dewy Skin Cream",
      brand: "Tatcha",
      quantity: 1,
      price: 68.0,
      image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?w=200&q=80",
    },
    {
      id: 2,
      name: "Super Bounce Serum",
      brand: "Glossier",
      quantity: 2,
      price: 64.0,
      image: "https://images.unsplash.com/photo-1605619082574-e92eee603b95?w=200&q=80",
    },
  ];

  return (
    <div className="bg-cream pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8">
        {/* Success Message */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose/10 mb-6">
            <CheckCircle2 size={40} className="text-rose" strokeWidth={1.3} />
          </div>
          <h1 className="font-playfair text-5xl text-dark mb-4">
            Order <em className="text-rose">Confirmed</em>
          </h1>
          <p className="text-mauve text-sm mb-2">
            Thank you for your order! Your ritual awaits.
          </p>
          <p className="text-muted text-xs">
            Order #{orderNumber} • {orderDate}
          </p>
        </div>

        {/* Confirmation Details */}
        <div className="bg-linen p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-dark/10">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Mail size={18} strokeWidth={1.3} className="text-rose mt-1" />
                <div>
                  <p className="text-dark text-sm mb-1">Confirmation Sent</p>
                  <p className="text-muted text-xs">
                    A confirmation email has been sent to your email address with order
                    details and tracking information.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <Package size={18} strokeWidth={1.3} className="text-rose mt-1" />
                <div>
                  <p className="text-dark text-sm mb-1">Estimated Delivery</p>
                  <p className="text-muted text-xs">
                    Your order will arrive within 3-5 business days. You'll receive
                    tracking details via email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <h3 className="font-playfair text-xl text-dark mb-6">Order Details</h3>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-16 h-16 bg-cream flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gold text-[9px] uppercase tracking-[3px] mb-1">
                    {item.brand}
                  </p>
                  <p className="text-mauve text-sm mb-1">{item.name}</p>
                  <p className="text-muted text-xs">Qty: {item.quantity}</p>
                </div>
                <div>
                  <p className="text-dark text-sm">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-dark/10">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-mauve">Subtotal</span>
              <span className="text-dark">$132.00</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-mauve">Shipping</span>
              <span className="text-rose">Free</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-mauve">Tax</span>
              <span className="text-dark">$11.55</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-dark/10">
              <span className="text-dark">Total</span>
              <span className="font-playfair text-2xl text-gold">$143.55</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="inline-block bg-dark text-cream px-8 py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300 text-center"
          >
            View Order Status
          </Link>
          <Link
            to="/shop"
            className="inline-block border border-rose/20 text-dark px-8 py-4 text-[10px] uppercase tracking-[3px] hover:bg-linen transition-all duration-300 text-center"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Reward Points */}
        <div className="mt-12 bg-dark p-6 text-center">
          <p className="text-cream text-sm mb-2">
            You've earned <span className="text-gold">286 loyalty points</span> with this
            order
          </p>
          <p className="text-cream/60 text-xs">
            Use them on your next purchase for exclusive rewards
          </p>
        </div>
      </div>
    </div>
  );
}
