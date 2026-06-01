/**
 * GlobalBackground — no longer used as a fixed z:-1 layer (that was broken).
 * Background is now injected three ways:
 *
 * 1. globals.css `body` → static radial orbs + dot grid (background-attachment: fixed)
 *    Visible on any section that doesn't override background-color.
 *
 * 2. globals.css `body::after` → SVG grain noise (fixed, z:9998, blend:multiply)
 *    Visible on every surface including white and navy sections.
 *
 * 3. Animated orbs inside ClinicalFocus & QuoteSection (absolute divs, z:0)
 *    These "breathe" behind the content of those open transparent sections.
 *
 * This file is kept for reference only — it exports nothing used in layout.tsx.
 */
export {};
