Design the full UI for "Mishti", a personal AI skin analysis feature inside the RARE beauty app. Target: women 20-35, luxury wellness. Use the exact brand system below.

BRAND COLOURS:
- #FAF4EE (Warm Cream – main background)
- #F2DDD5 (Blush Linen – cards, inputs)
- #C9897A (Dusty Rose – buttons, logo, italic accents, icons)
- #D4AF7A (Champagne Gold – lines, ratings, eyebrow labels. Max 3 per screen, never background)
- #A4594A (Terracotta – hover states, focus outlines)
- #2E1A1A (Dark Mocha – headings, primary buttons)
- #7A4A4A (Mauve – body copy)
- #B09080 (Warm Grey – captions)

TYPOGRAPHY:
- Headings: Playfair Display (Light 300 for large, Regular 400 for card titles). One italic word per headline, coloured Dusty Rose.
- Body: Jost 300 Light, 13-15px, #7A4A4A, no letter-spacing.
- Eyebrow: Jost 400 Regular, 9px, ALL CAPS, letter-spacing 5px, colour Gold.
- Buttons: Jost 400 Regular, 10px, ALL CAPS, letter-spacing 3px.
- Quotes: Cormorant Garamond 300 Italic, #C9897A.

BUTTONS (border-radius 100px, padding 13px 44px, transition 0.3s ease, min touch target 44px mobile):
- Primary: bg Dark Mocha, text Warm Cream. Hover: bg Terracotta.
- Outline: border 0.5px Gold, text Dark Mocha. Hover: border+text Dusty Rose.
- Ghost: border 1px Dusty Rose, text Dusty Rose. Hover: bg rgba(201,137,122,0.1).

SPACING:
- 8pt scale: 8,16,24,32,40,56,64,80,96,120.
- Desktop: 1440px, 12-col grid, margins 56px, gutters 24px.
- Mobile: 390px, 4-col grid, margins 24px, gutters 16px.
- Card padding 32px, radius 16px. Hover shadow: 0 8px 20px rgba(46,26,26,0.12).
- Focus outline: 2px Terracotta.

ICONS:
- 1.3px rounded stroke, Dusty Rose #C9897A. Sizes: 16px, 24px, 44px.

TONE:
- Calm, intimate, luxurious. Never clinical, never loud. No pure white. No cool tones. Gold is a whisper.

SCREENS TO CREATE (Both Desktop 1440px and Mobile 390px frames for each):

1. WELCOME & PHOTO UPLOAD
   - Warm Cream background, centred.
   - Small Mishti icon (leaf or "M", 48px, Dusty Rose).
   - Headline: "Hi, I’m Mishti." (Playfair 36px Light, "Mishti" italic Rose).
   - Body: "Your personal skin guide. To begin, share a bare-faced photo in soft light. I’ll keep it private — it’s just for this moment." (Jost 15px Mauve, max 380px).
   - Upload box: dashed border 0.5px Gold, radius 16px, padding 80px 40px, camera icon (24px Rose), "Upload your photo" (Eyebrow style).
   - Link: "or continue with a questionnaire only" (Jost 13px Rose).

2. QUESTIONNAIRE (4 Steps)
   Each step screen has:
   - Progress dots (4 dots, active filled Rose, others Linen).
   - Title (Playfair 28px, one italic word) + subtitle.
   - Stack of Question Cards (bg Linen, padding 32px). Inside:
     - Eyebrow (Q number, Gold).
     - Question (Playfair 20px, Mocha).
     - Answer pills: rounded border 0.5px Gold, text Jost 13px. Selected: bg rgba(201,137,122,0.1), border Rose.
       * Skin tone (Q3): each pill includes a 12px colour swatch.
       * Acne type (Q12): small line-art illustrations beside each option. "Tiny flesh-coloured bumps" has an info icon.
       * Ingredient triggers (Q19): text input below pills.
   - Bottom nav: Back (Ghost) left, Continue (Primary) right. Back hidden on first screen.

   Step 1 "Your Skin Rhythm": Q4,Q5,Q6,Q7,Q8.
   Step 2 "Your Glow & Flow": Q1,Q2,Q3,Q13,Q14,Q15,Q16.
   Step 3 "Skin Language": Q9,Q10,Q11,Q12,Q17,Q18,Q19,Q20. (If diagnosed condition selected in Q18, a soft warning card appears with left border Terracotta).
   Step 4 "Your Routine, Your Way": Q21,Q22,Q23,Q24,Q25.

3. LOADING (Optimistic UI)
   - Warm Cream, centred.
   - If photo given: 200px blurred circle (filter blur 20px). Otherwise Mishti icon.
   - Headline: "Mishti is building your *skin profile*…" (italic on "skin profile").
   - 5 animated steps: each row with checkmark icon (active 100% opacity, completed 40%). Steps: "Mapping your skin type…", "Filtering ingredients…", "Finding best actives…", "Matching products…", "Finalising…".
   - Footnote if time >12s: "This is taking a little longer than expected…" (Caption).

4. RESULTS DASHBOARD (First-Time)
   This screen is the core payoff. Design it as a scrollable, editorial-style page.

   a) Skin Summary & Concerns
      - Full-width card (bg Linen, padding 32px):
        Heading: "Your skin is *combination*, with a few dark spots." (Playfair 28px, italic on key word).
        Subtext: "Here are your top 3 concerns, prioritised just for you." (Body)
        - Concern cards (horizontal stack): each small card (bg Cream, border 0.5px Gold) with concern name, severity (mild/moderate/severe badge in Rose), and short source note ("from your photo & answers"). E.g., "Post-acne pigmentation", "Hormonal acne", "Dullness & texture".

   b) Primary Ritual
      - Eyebrow: "Your Primary Ritual"
      - Subhead: "Recommended by Mishti, based on ingredients your skin needs."
      - Horizontal scroll carousel: 2-4 Product Cards (280px, bg Linen, padding 24px). Each:
        * Eyebrow: "Step 1", "Step 2", etc.
        * Product name (Playfair 20px Mocha).
        * Match reason (Body 13px Mauve, italic for the ingredient name, e.g., "Contains *Niacinamide* to fade dark marks and control oil.").
        * Brand & price (Caption Warm Grey).
        * "Add to Ritual" button (Primary, full width).
        * Sponsored card: small "Partner" tag (Gold outline pill).
      - Hover on card: scale(1.02) and shadow.

   c) Complete Your Ritual (fold)
      - Initially a link: "+ Complete your ritual" (Body, Rose). When expanded, shows:
        - Missing step cards (e.g., cleanser if only serum/sunscreen recommended). Each card smaller (200px), with product info and "Add" button (Outline).
        - A short note: "Mishti noticed your routine is missing a gentle cleanser. These match your profile."

   d) Alternative Products by Ingredient
      - Eyebrow: "Explore by Ingredient"
      - Subhead: "Curious about other options? Here are more products with the same actives." (Body small)
      - Carousel of small ingredient cards (140px each): icon for ingredient (e.g., a little dropper), ingredient name (Playfair 16px Rose), "See alternatives" link.

   e) Ingredient Education
      - A soft section: "Why *Niacinamide*?" card (bg Linen, left accent Dusty Rose), with a brief, poetic sentence, e.g., "A master of calm and clarity, Niacinamide helps even skin tone while reducing shine." and a "Learn more" link (Outline button).

   f) Disclaimer (if needed)
      - If diagnosed condition: "For best results, consult a dermatologist. Our suggestions are a gentle guide." (Jost caption Mauve, Linen card, left border Terracotta).

5. HEALTH ADVISORY (Edge Case)
   - When scan detects a clinical concern. Centred, Warm Cream.
   - Icon: 44px Dusty Rose leaf.
   - Headline: "Your skin’s *health* comes first."
   - Body: "Our scan detected an irregular texture… Would you like us to connect you with a board-certified dermatologist?"
   - Primary button: "Find a Dermatologist"
   - Link: "Continue to cosmetic recommendations"

6. RETURNING USER & FEEDBACK LOOP
   These screens are critical for the zero-cost, post-first-analysis experience.

   a) Instant Dashboard (No Loading)
      - When returning user opens Mishti, show the Results Dashboard immediately (use stored data). No loading screen. Top of page: small avatar circle with their photo (blurred) or initial, and greeting: "Welcome back, [Name]. Your ritual is still here."

   b) Check-In / Feedback Prompt
      - A soft, non-intrusive prompt card appears in the dashboard, possibly above the Primary Routine or as a dismissable banner.
      - Card bg Linen, padding 24px, subtle.
      - Text: "How is your skin feeling with the current ritual?" (Playfair 20px, no italic).
      - Options as rounded pills (multi-select possible? but here it's single select):
        * "It’s working well" (with a small calm smile icon)
        * "No change yet" (neutral face)
        * "My skin feels worse" (concerned face)
        * "I noticed irritation" (alert icon)
      - After selection, a subtle animation: the selected pill fills with Dusty Rose, and a thank-you message appears: "Thank you. Mishti will remember this." (Caption Rose)

   c) Re-Trigger Questionnaire (If user reports irritation or change)
      - If user selects "My skin feels worse" or "I noticed irritation", the UI gently transitions to a focused re-assessment flow.
      - Show a message: "Thank you for telling us. Let’s adjust your ritual. We’ll ask you a few quick questions." (Body)
      - Then present a shortened questionnaire: only the most relevant sections (e.g., sensitivity Q17-Q20, and the specific product step that might have caused the issue). Progress dots: only 2 dots (simplified).
      - After completion, the loading screen appears again ("Mishti is re-evaluating your routine…") and then a new Results Dashboard with updated recommendations.

      - For users who said "Working well" or "No change", store that feedback and subtly update their profile; no questionnaire needed.

   d) "Update My Profile" Option
      - In the returning user dashboard, a subtle link: "Need a re-assessment? Update your skin profile." (Caption Rose). Clicking it leads to the full or abbreviated questionnaire, depending on the last feedback.

   LAYOUT NOTES:
   - All screens follow the 8pt grid and typography rules.
   - Mobile: cards stack vertically, buttons full width, spacing reduced to 80px gaps.
   - Use warm, blurred photo placeholders where appropriate.
   - The feedback prompts should feel like a natural conversation, never a survey.