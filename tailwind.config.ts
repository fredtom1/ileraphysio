import type { Config } from "tailwindcss";

/**
 * IleraPhysio design tokens — ported from the shared design system (css/ilera.css).
 * Posture: clinical trust over consumer flash. Ìlera green, deep green-charcoal ink,
 * a near-white canvas with a faint green cast — calm, never beige.
 * Hex approximations of the source oklch tokens so Tailwind alpha modifiers keep working.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // canvas + ink
        clinic: "#f4f8f5", // --bg  near-white, faint green cast
        surface: "#ffffff", // --surface
        ink: "#16211d", // --fg  deep green-charcoal (~12:1 on canvas)
        muted: "#526760", // --muted  secondary text, still high contrast
        line: "#dae4df", // --border

        // the one accent — Ìlera green: recovery, growth, calm authority
        palm: "#177a66", // --accent
        "palm-strong": "#115849", // --accent-strong
        leaf: "#e2f0ea", // --accent-tint  (soft green surface)
        lagoon: "#e3edf1", // soft blue-green wayfinding tint

        // functional status — colour with meaning, used sparingly
        clay: "#177a66", // eyebrows/labels resolve to the accent, not orange
        success: "#1c855a",
        "success-tint": "#e4f3ea",
        warning: "#8a5a12",
        "warning-tint": "#faf1dd",
        danger: "#b23a2b",
        "danger-tint": "#f9e8e4",

        // sub-specialty identity tints — calm wayfinding only
        "paeds-tint": "#e4f0e8",
        "vest-tint": "#e8e8f3",
        "resp-tint": "#e2ecf2",
        "msk-tint": "#efe9e1"
      },
      fontFamily: {
        serif: ["'Iowan Old Style'", "'Charter'", "'Palatino Linotype'", "Georgia", "'Times New Roman'", "serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "system-ui", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "'Cascadia Mono'", "'SF Mono'", "Menlo", "monospace"]
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 34, 30, 0.05), 0 12px 40px rgba(20, 34, 30, 0.07)",
        lift: "0 2px 6px rgba(20, 34, 30, 0.06), 0 24px 60px rgba(20, 34, 30, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
