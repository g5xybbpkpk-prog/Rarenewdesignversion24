import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-dark text-cream py-12 sm:py-16 md:py-20 px-6 sm:px-8 mt-16 sm:mt-24 md:mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Brand Column - Logo Version C (inverted for dark backgrounds) */}
          <div>
            <div className="mb-4">
              <span className="font-playfair text-2xl tracking-[14px] pr-[14px] text-cream">
                R<span className="text-rose">A</span>RE
              </span>
            </div>
            {/* Caption: Jost 300 Light, 11px, Warm Grey */}
            <p className="text-[11px] text-cream/50 leading-relaxed font-light">
              Relaxed &amp; Refresh
            </p>
          </div>

          {/* Discover Column */}
          <div>
            {/* Eyebrow: 9px, ALL CAPS, +5px spacing, Gold (but limit usage) */}
            <h4 className="text-rose text-[9px] uppercase tracking-[5px] mb-6 font-normal">
              Discover
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/mishti"
                  className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light"
                >
                  AI Skin Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-rose text-[9px] uppercase tracking-[5px] mb-6 font-normal">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-rose text-[9px] uppercase tracking-[5px] mb-6 font-normal">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[11px] text-cream/70 hover:text-rose transition-colors duration-300 font-light">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rose/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Caption: 11px, Warm Grey */}
            <p className="text-[10px] text-cream/30 font-light text-center md:text-left">
              © 2026 RARE. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://instagram.com/rare.wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cream/50 hover:text-rose transition-colors duration-300 font-light"
                aria-label="Follow RARE on Instagram"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com/rarewellness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cream/50 hover:text-rose transition-colors duration-300 font-light"
                aria-label="Follow RARE on Pinterest"
              >
                Pinterest
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cream/50 hover:text-rose transition-colors duration-300 font-light"
                aria-label="Contact RARE on WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}