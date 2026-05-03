Figma Design Brief: RARE – Relaxed & Refresh (Beauty & Wellness Super-Platform)

Project Overview
Create a high-fidelity, fully interactive design system for RARE, a luxury beauty and wellness platform combining destination booking (salons, spas, yoga) with a curated e‑commerce shop and an AI skin‑analysis feature (“Mishti”). The design must exude calm luxury, using a warm earthy palette, clean typography, and subtle animations. The final output should include all key screens, a component library, and documented user flows.

Brand Identity

Mood: Relaxed, refined, natural, modern heritage.
Colors:

Primary: #FAF4EE (cream) – backgrounds, spacious areas.
Accent: #C9897A (rose) – buttons, accents, interactive elements.
Secondary: #D4AF7A (gold) – highlights, borders, call‑to‑actions.
Dark: #2E1A1A – text, navigation, hero overlays.
Neutrals: #F2DDD5, #A4594A, #7A4A4A, #B09080.
Typography:

Headlines: Playfair Display (serif, elegant, light weight).
Body text: Jost (sans-serif, clean, modern).
Decorative italics: Cormorant Garamond for testimonials and special quotes.
Shapes: Soft, minimal borders (0.5px), subtle rounded corners (2‑4px), generous white space.
Icons: Simple line icons or subtle emojis (use Feather or similar style).
Atmosphere: Use high‑quality imagery of serene spa settings, natural skincare, and textured backgrounds.
Design System Components (to be built as reusable components)

Navbar (fixed top, transparent/blurred background).
Buttons (primary, outline, ghost, split‑hero).
Cards (destination card, product card, journal card, testimonial).
Forms (search bars, filters, booking panel inputs, loyalty toggle).
Modals (booking panel, confirmation modal).
Rating & tags (stars, category pills, match badges).
Tabs (product details, dashboard panels).
Icons (heart, cart, location, etc.)
Footer (multi‑column, dark background).
Key Screens & Layouts

Homepage

Hero section with large centered title, tagline, and two CTA buttons (Book a destination / Ask Mishti).
Split hero panels (2 columns): left = Destinations (image of spa), right = Shop (image of beauty products). Each panel has a headline, description, list of features, and a button. Hover effects with scale/underline.
Marquee (scroll animation) with rotating brand words.
Category strip (5 items) with icons and labels (Salons, Spas, Yoga, Massage, Shop).
Mishti band (left text + right avatar ring) describing AI skin companion.
Featured destinations grid (3 cards) with images, name, location, tags, price, rating.
Shop preview grid (4 cards) with product image, brand, name, price, and “Add” / “Heart” buttons.
Testimonial section (rotating quotes with dot navigation).
Footer (4 columns: Brand, Discover, Help, Company).
Services (Destinations)

Page header with eyebrow, title, description.
Search bar with location, service, date, search button.
Filter pills (All, Salons, Spas, Yoga, etc.)
Services grid (6 cards) each with image, name, location, service tags, price, rating.
Booking modal triggered by clicking any card: includes service selection, time slots, payment options, summary, and confirm button.
Shop Page

Hero with profile display (skin result) and matching products teaser.
Category filters (Skincare, Makeup, Hair, Body, Wellness, Fragrance, Tools).
Sort by dropdown.
Product grid (8+ products) with product image, brand, name, price, “Add to bag” and “Wishlist” icons.
Product detail page (separate screen):

Image gallery (main + thumbnails)
Product info: brand, name, rating, “Mishti match” percentage, price, size selector, quantity, add to bag.
Tabs: About, Ingredients, How to use, Reviews.
Mishti (AI Skin Analysis)

Hero explaining Mishti with stats.
How it works (4‑step visual).
Upload card with drag‑drop zone, tips, consent notice, and a “Analyse my skin” button.
Loading state (spinner with pulsing dots).
Result state showing:

Selfie thumbnail, skin type, timestamp.
Detected concerns (pills)
Concern intensity bars
Recommended ingredients (with strength)
In‑clinic treatments (if any)
CTAs to view matched products / treatments.
Quiz fallback (in‑chat style) with a few questions if user prefers.
Journal (Blog)

Hero with headline, subhead.
Category tabs (Trending, Skincare, Wellness, etc.)
Featured article (large, with image and excerpt).
Article grid (3 columns) with image, title, category, excerpt, read‑more link.
Article reader (separate screen) with header, byline, rich content (quotes, ingredient boxes, Mishti CTA, related articles).
Dashboard (My Ritual)

Sidebar (dark) with user avatar, name, status, and navigation items (Overview, Skin Profile, Bookings, Orders, Wallet).
Main content area with panels:

Stats cards (Spend, Orders, Points, Reviews).
Trust score card with ring progress.
Skin profile card with concern bars and update option.
Booking history list.
Order history list.
Wallet card with balance and recent activity.
Cart

Two‑column layout: left – cart items, right – order summary.
Cart items include image, name, brand, variation, quantity, price, remove button.
Also‑like section (horizontal scroll) with product suggestions.
Order summary: subtotal, discounts, taxes, total, coupon input, loyalty toggle, checkout button.
Additional Pages

Product detail (already mentioned).
Confirmation page after booking (with countdown timer for pending status).
Login/Sign‑up (minimal overlay style, not shown in current HTML but should be considered).
Interactions & Micro‑interactions

Hover effects on cards: subtle scale, border highlight, overlay.
Buttons: background or border change on hover.
Modal animations: slide‑in/fade.
Form elements (slots, tabs, radio‑style selections) should have clear active states.
Toast notifications (non‑intrusive message bar) for user actions (e.g., “Added to cart”).
Responsive behavior: though desktop‑first, elements should stack gracefully on smaller screens (e.g., grids go to 2‑1 columns, navigation collapses).
Content & Imagery

Use placeholder images from Unsplash (spa, skincare, beauty products).
Use dummy text but follow the brand voice (luxury, calm, inclusive).
Icons can be simple Unicode characters (e.g., 🛍, ✨, 📍) or Font Awesome style; designer may replace with custom icons.
Deliverables

A Figma file with separate pages for each screen.
Component library (buttons, cards, form elements, typography styles, color variables).
Annotations for interactions (e.g., “on click, open modal”, “hover shows scale”).
A user flow diagram showing navigation between main pages.
Additional Notes

The design should feel cohesive with the existing HTML/CSS, but can be enhanced with more refined spacing and interactions.
Ensure accessibility (contrast, focus states).
The “Mishti” character avatar is a simple illustration (could be a circle with a face or a leaf motif).
All layouts should be pixel‑perfect for desktop (1440px width) and responsive to tablet/mobile.
Style References

Current HTML/CSS (provided)
Brands like Aesop, Glossier, or minimalist luxury spas.
Soft gradients and subtle shadows.
