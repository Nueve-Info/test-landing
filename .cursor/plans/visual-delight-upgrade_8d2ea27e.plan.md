---
name: visual-delight-upgrade
overview: I will enhance the visual delight of the website by applying Hero-style effects (gradients, glows, animations) to the Pricing, Curriculum, FAQ, Transformation, and WhoIsFor sections. This involves creating a reusable background component and adding specific interaction details to each section.
todos:
  - id: create-bg-glow
    content: Create src/components/ui/BackgroundGlow.tsx
    status: completed
  - id: enhance-pricing
    content: Enhance Pricing.tsx with background, floating card, and better CTA
    status: completed
  - id: enhance-curriculum
    content: Enhance Curriculum.tsx with hover effects and gradient numbers
    status: completed
  - id: enhance-faq
    content: Enhance FAQ.tsx with smooth animations and active states
    status: completed
  - id: enhance-others
    content: Enhance Transformation.tsx and WhoIsFor.tsx with specific glows and card styles
    status: completed
isProject: false
---

I will upgrade the visual design of key sections to match the "delightful" aesthetic of the Hero section.

### 1. Create Reusable Background Component

- Create `src/components/ui/BackgroundGlow.tsx` extracting the subtle texture and ambient gradients from `Hero.tsx`.
- This ensures consistency and makes it easy to add "atmosphere" to any section.

### 2. Enhance Pricing Section (`Pricing.tsx`)

- Add `BackgroundGlow`.
- Add a subtle floating animation to the main pricing card.
- Enhance the "Total Value" strike-through with a subtle glow.
- Make the main CTA button have a "shiny" effect or stronger hover state.
- Add a gradient border effect to the card.

### 3. Enhance Curriculum Section (`Curriculum.tsx`)

- Add `BackgroundGlow`.
- Add hover effects to module cards: subtle scale up (`scale-[1.02]`) and border glow (`shadow-primary`).
- Apply gradient text effect to the module numbers (01, 02, etc.).

### 4. Enhance FAQ Section (`FAQ.tsx`)

- Add `BackgroundGlow`.
- Implement smooth open/close animations using `framer-motion` or CSS transitions.
- Add a subtle active state glow when a question is open.

### 5. Enhance Transformation & WhoIsFor Sections

- **Transformation**: Add a glow to the "Certified Design Engineer" badge and enhance the Before/After connector visuals.
- **WhoIsFor**: Add distinct glow effects to the "For You" (Primary/Accent glow) and "Not For You" (Red/Warning glow) cards to reinforce the message.

### 6. Global CSS Polish

- Ensure `index.css` has necessary utility classes for glows and animations if not already present (checking for `animate-float`, etc.).