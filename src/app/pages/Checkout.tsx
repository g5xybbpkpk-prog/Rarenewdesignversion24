import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";

export function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"shipping" | "payment">("shipping");
  const [shippingInfo, setShippingInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const cartTotal = 145.32; // This would come from cart context in production
  const shipping = 0; // Free shipping
  const tax = 12.72;
  const total = cartTotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and navigate to confirmation
    navigate("/order-confirmation");
  };

  return (
    <div className="bg-cream pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Back Button */}
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-mauve text-xs hover:text-rose transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.3} />
          Back to Cart
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-5xl text-dark mb-4">
            Secure <em className="text-rose">Checkout</em>
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted text-xs">
            <Lock size={14} strokeWidth={1.3} />
            <span>Encrypted & Secure</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                step === "shipping"
                  ? "bg-rose text-cream"
                  : "bg-dark text-cream"
              }`}
            >
              1
            </div>
            <span
              className={`text-xs ${
                step === "shipping" ? "text-dark" : "text-muted"
              }`}
            >
              Shipping
            </span>
          </div>
          <div className="w-12 h-px bg-rose/20"></div>
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                step === "payment"
                  ? "bg-rose text-cream"
                  : "bg-linen text-muted"
              }`}
            >
              2
            </div>
            <span
              className={`text-xs ${
                step === "payment" ? "text-dark" : "text-muted"
              }`}
            >
              Payment
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <form onSubmit={handleShippingSubmit}>
                <div className="bg-linen p-8 mb-8">
                  <h2 className="font-playfair text-2xl text-dark mb-6">
                    Shipping Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-mauve text-xs mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, email: e.target.value })
                        }
                        className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-mauve text-xs mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, firstName: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-mauve text-xs mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, lastName: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-mauve text-xs mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, address: e.target.value })
                        }
                        className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-mauve text-xs mb-2">City</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, city: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="Los Angeles"
                        />
                      </div>
                      <div>
                        <label className="block text-mauve text-xs mb-2">State</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.state}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, state: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="CA"
                        />
                      </div>
                      <div>
                        <label className="block text-mauve text-xs mb-2">ZIP</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.zip}
                          onChange={(e) =>
                            setShippingInfo({ ...shippingInfo, zip: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="90210"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark text-cream py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
                >
                  Continue to Payment →
                </button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePaymentSubmit}>
                <div className="bg-linen p-8 mb-8">
                  <h2 className="font-playfair text-2xl text-dark mb-6">
                    Payment Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-mauve text-xs mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={paymentInfo.cardNumber}
                          onChange={(e) =>
                            setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300 pl-12"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                        <CreditCard
                          size={18}
                          strokeWidth={1.3}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-mauve text-xs mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.cardName}
                        onChange={(e) =>
                          setPaymentInfo({ ...paymentInfo, cardName: e.target.value })
                        }
                        className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                        placeholder="Name on card"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-mauve text-xs mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.expiry}
                          onChange={(e) =>
                            setPaymentInfo({ ...paymentInfo, expiry: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-mauve text-xs mb-2">CVV</label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.cvv}
                          onChange={(e) =>
                            setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
                          }
                          className="w-full bg-cream border border-dark/10 px-4 py-3 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep("shipping")}
                    className="flex-1 border border-rose/20 text-mauve py-4 text-[10px] uppercase tracking-[3px] hover:bg-linen transition-all duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-dark text-cream py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
                  >
                    Complete Order
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-linen p-6 sticky top-32">
              <h3 className="font-playfair text-xl text-dark mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-dark/10">
                <div className="flex justify-between text-sm">
                  <span className="text-mauve">Subtotal (2 items)</span>
                  <span className="text-dark">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-mauve">Shipping</span>
                  <span className="text-rose">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-mauve">Tax</span>
                  <span className="text-dark">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-dark">Total</span>
                <span className="font-playfair text-2xl text-gold">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="bg-cream p-4 text-center">
                <p className="text-muted text-xs">
                  Free shipping on orders over $75
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
