
# Walkthrough - Brand Voice Refinement

Shifted the website tone from "Generic SaaS" to "Organic Partner".

## Changes

### Hero Section (`Hero.tsx`)
- **Stats**: Replaced functional metrics with human-centric ones.
  - `現在フェーズ: PoC` -> `現在地: 共に歩む`
  - `導入準備: 最短3分` -> `導入: お茶を淹れる間に`
  - `公開ステータス: 進行中` -> `ステータス: 毎日、少しずつ`
- **Goal**: To show that we are "walking together" with the user, not just selling a tool.

### Product Showcase (`ProductShowcase.tsx`)
- **Roadmap**: Renamed phases to an organic lifecycle.
  - `NOW` -> `始まり` (Beginning/Seed)
  - `NEXT` -> `広がり` (Expansion/Sprout)
  - `LATER` -> `結実` (Fruition/Harvest)
  - Rewrote descriptions to focus on solving "stress" and "building assets" rather than just "features".
- **Visuals**:
  - Integrated `<PhoneMockup />` component.
  - Applied `rotate-[-2deg]` and `shadow-2xl` with a soft indigo tint to create a "living object" feel.
  - This replaces the rigorous/straight screenshot with a playful, organic element.

### Phone Mockup (`PhoneMockup.tsx`)
- Updated to accept `className` for flexible styling/positioning.

## Verification Results
- **Visuals**: The tilted phone mockup breaks the grid rigidity, adding the requested "human touch".
- **Tone**: The text now reads closer to a partner's voice ("walking together") rather than a vendor's spec sheet.
