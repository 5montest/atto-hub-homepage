
# Walkthrough - Layout Simplification

Refined the website layout to follow a "1 Message per Section" philosophy and adjusted visuals for better focus.

## Changes

### 1. Global Layout (`page.tsx`)
- **Vertical Rhythm**: Added large vertical gaps (`space-y-32`) between sections.
- **Effect**: Encourages scrolling and focus on single topics.

### 2. New Component: `Roadmap.tsx`
- Extracted Roadmap to a standalone component.
- **Design**: Card-based, organic growth phases (Seed/Sprout/Harvest).

### 3. Refined `ProductShowcase.tsx`
- **Focus**: Dedicated to "Ato" product intro.
- **Layout**: 2-column layout.
- **Visuals**:
  - **Phone Mockup**: Aligned to the top with padding (`pt-20`), cropping the bottom part to focus on the interface header/main content.
  - **Screenshot**: Integrated the user-provided screenshot (`/screenshots/ato-home-mobile.png`) directly into the phone frame, maintaining the clean, tilted design.

### 4. Refined `Hero.tsx`
- **De-clutter**: Simplified stats display.
- **Copy Refinements**:
  - **Stats**: "最短3分、アプリ不要" (Concrete Benefit), "日々改善、現場とともに" (Concrete Action).
  - **Studio Focus**: Updated introduction to "Atto Hub is a product studio (not just Ato)... continue to create tools that balance lightness..."
  - **Header**: Removed the "Atoへ" button to avoid over-pushing a single product at the studio level.

### 5. Refined `UseCases.tsx`
- **Tone**: Removed overly dramatic "Scorching sun/Shouting" description, replacing it with a more grounded "Guest anxiety & workload burden" description.

## Verification
- **Visuals**: The page maintains the clean, split layout with correct screenshot and balanced copy.
