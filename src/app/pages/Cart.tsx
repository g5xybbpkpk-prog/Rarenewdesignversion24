import { Minus, Plus, X, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";

export function Cart() {
  const [loyaltyEnabled, setLoyaltyEnabled] = useState(false);

  const cartItems = [
    {
      id: 1,
      brand: "Tatcha",
      name: "The Dewy Skin Cream",
      image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDQzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 68,
      quantity: 1,
      variation: "50ml",
    },
    {
      id: 2,
      brand: "Glossier",
      name: "Super Bounce Serum",
      image: "https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc0MDQzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 32,
      quantity: 2,
      variation: "30ml",
    },
  ];

  const suggestedProducts = [
    {
      id: 3,
      brand: "Aesop",
      name: "Resurrection Aromatique Hand Balm",
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMHNraW5jYXJlfGVufDF8fHx8MTc3Mzk4ODA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$28",
    },
    {
      id: 4,
      brand: "La Mer",
      name: "The Concentrate",
      image: "https://images.unsplash.com/photo-1761864293818-603c23655cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc0MDM4MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$450",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = loyaltyEnabled ? 13.2 : 0;
  const tax = (subtotal - discount) * 0.0875;
  const total = subtotal - discount + tax;

  return (
    <div className="bg-cream pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-playfair text-5xl text-dark text-center mb-6">
            Your <em className="text-rose">Ritual</em>
          </h1>
          <p className="text-muted text-sm text-center">
            {cartItems.length} items awaiting you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-linen p-6 flex gap-6">
                <div className="w-24 h-24 bg-cream flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-gold text-[9px] uppercase tracking-[3px] mb-1">
                        {item.brand}
                      </p>
                      <h3 className="text-mauve text-base mb-1">{item.name}</h3>
                      <p className="text-muted text-xs">{item.variation}</p>
                    </div>
                    <button
                      className="text-mauve hover:text-rose transition-colors duration-300"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X size={18} strokeWidth={1.3} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        className="w-11 h-11 border border-dark/20 flex items-center justify-center hover:border-rose hover:text-rose transition-all duration-300"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.3} />
                      </button>
                      <span className="text-dark text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="w-11 h-11 border border-dark/20 flex items-center justify-center hover:border-rose hover:text-rose transition-all duration-300"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.3} />
                      </button>
                    </div>
                    <span className="font-playfair text-lg text-gold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* You Might Also Like */}
            <div className="mt-12">
              <h3 className="font-playfair text-2xl text-dark mb-6">
                You Might Also <em className="text-rose">Like</em>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {suggestedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-cream p-4 cursor-pointer hover:shadow-[0_8px_20px_rgba(46,26,26,0.12)] transition-all duration-300"
                  >
                    <div className="relative h-32 mb-3 overflow-hidden bg-linen">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button className="absolute top-2 right-2 text-rose hover:scale-110 transition-transform duration-300">
                        <Heart size={14} strokeWidth={1.3} />
                      </button>
                    </div>
                    <p className="text-muted text-[9px] uppercase tracking-[3px] mb-1">
                      {product.brand}
                    </p>
                    <h4 className="text-dark text-xs mb-2 leading-tight">{product.name}</h4>
                    <span className="text-gold text-sm">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-linen p-8 sticky top-32">
              <h3 className="font-playfair text-2xl text-dark mb-8">
                Order Summary
              </h3>

              {/* Summary Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-dark/10">
                <div className="flex justify-between text-sm">
                  <span className="text-mauve">Subtotal</span>
                  <span className="text-dark">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-mauve">Loyalty Discount (10%)</span>
                    <span className="text-rose">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-mauve">Tax</span>
                  <span className="text-dark">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-dark/10">
                <span className="text-dark text-lg">Total</span>
                <span className="font-playfair text-3xl text-gold">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Coupon Input */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-dark placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                />
              </div>

              {/* Loyalty Toggle */}
              <div className="mb-8 p-4 bg-dark">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-cream text-sm">
                    Use Loyalty Points (2,450)
                  </span>
                  <button
                    onClick={() => setLoyaltyEnabled(!loyaltyEnabled)}
                    className={`w-12 h-6 rounded-full transition-all duration-300 relative ${
                      loyaltyEnabled ? "bg-rose" : "bg-cream/20"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-cream absolute top-1 transition-all duration-300 ${
                        loyaltyEnabled ? "left-7" : "left-1"
                      }`}
                    />
                  </button>
                </label>
                {loyaltyEnabled && (
                  <p className="text-gold text-xs mt-2">
                    Save $13.20 with your points
                  </p>
                )}
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="block w-full bg-dark text-cream py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300 mb-4 text-center"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/shop"
                className="block text-center text-rose text-xs uppercase tracking-[3px] hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}