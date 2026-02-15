
# Implementation Plan - Brand Voice Refinement

## Goal
To transform the website from a "Generic IT Startup" look into a "Human-Centric Partner" presence that resonates with the muddy reality of frontline operations.

## User Review Required
- **Voice Change**: The shift from "PoC/Setup 3min" to "Walking Together/Coffee Break Setup" is a significant tonal shift. Please review the specific Japanese wording proposed below.
- **Design Change**: Replacing the static image in ProductShowcase with the dynamic `PhoneMockup` component.

## Proposed Changes

### Component: Hero Section (`Hero.tsx`)
- **Stats Update**:
  - `現在フェーズ: PoC` -> `現在地: 共に歩む` (Walking Together)
  - `導入準備: 最短3分` -> `導入: お茶を淹れる間に` (While brewing tea)
  - `公開ステータス: 進行中` -> `ステータス: 毎日、少しずつ` (Daily Improvements)
- **Copy Update**:
  - Emphasize "warmth" and "relief" over "efficiency".

### Component: Product Showcase (`ProductShowcase.tsx`)
- **Roadmap Refactoring**:
  - Change "NOW / NEXT / LATER" to "始まり / 広がり / 結実" (Seed / Sprout / Harvest metaphors).
  - Rewrite descriptions to be promises of "scenery change" rather than functional modules.
- **Phone Mockup Integration**:
  - Import `<PhoneMockup />`.
  - Replace the current `figure` block.
  - Apply `transform: -rotate-1` and `shadow-2xl` (with colored shadow) to create the "living tool" feel.

### Component: Phone Mockup (`PhoneMockup.tsx`)
- Ensure it accepts `className` props for easy styling/tilting from the parent.

## Verification Plan
- **Visual Check**: Ensure the new text fits well and the tilt doesn't break layout on mobile.
- **Tone Check**: Read the new copy aloud to ensure it sounds like a partner, not a vendor.
