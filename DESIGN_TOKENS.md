# Jottr Design Token System

A minimal, refined design language for a quiet note-taking experience.

---

## Philosophy

> "Write Yourself. Something beautiful."

Jottr's design removes noise and creates space for thought. Every token serves clarity, restraint, and focus.

---

## Color Palette

### Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--color-stone-0` | `oklch(1 0 0)` | Pure white (rarely used) |
| `--color-stone-50` | `oklch(98.5% 0.002 264.542)` | Primary background |
| `--color-stone-100` | `oklch(96.7% 0.003 264.542)` | Secondary background |
| `--color-stone-200` | `oklch(92.8% 0.006 264.531)` | Subtle borders |
| `--color-stone-300` | `oklch(87.2% 0.01 258.338)` | Disabled states |
| `--color-stone-400` | `oklch(70.7% 0.022 261.325)` | Placeholder text |
| `--color-stone-500` | `oklch(55.1% 0.027 264.364)` | Secondary text |
| `--color-stone-600` | `oklch(44.6% 0.03 256.802)` | Body text |
| `--color-stone-700` | `oklch(37.1% 0 0)` | Heading text |
| `--color-stone-800` | `oklch(26.9% 0 0)` | Primary text |
| `--color-stone-900` | `oklch(20.5% 0 0)` | Near black |
| `--color-stone-950` | `oklch(15% 0 0)` | Pure black |

### Accent

| Token | Value | Usage |
|-------|-------|-------|
| `--color-orange-500` | `oklch(70.5% 0.213 47.604)` | YC badge, highlights |
| `--color-blue-600` | `oklch(54.6% 0.245 262.881)` | Links, interactive |

### Semantic

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `oklch(62.7% 0.194 149.214)` | Success states |
| `--color-error` | `oklch(63.7% 0.237 25.331)` | Error states |

---

## Typography

### Font Families

```css
--font-display: var(--font-figtree), sans-serif;  /* Marketing, headlines */
--font-body: var(--font-geist-sans), sans-serif;  /* App UI, body text */
--font-mono: var(--font-geist-mono), monospace;   /* Code, technical */
```

### Font Sizes (Marketing / Display)

| Token | Size | Line Height | Letter Spacing |
|-------|------|-------------|----------------|
| `--text-display-xl` | `4.5rem` (72px) | `1` | `-0.02em` |
| `--text-display-lg` | `3.5rem` (56px) | `1` | `-0.02em` |
| `--text-display-md` | `2.5rem` (40px) | `1` | `-0.01em` |
| `--text-display-sm` | `2rem` (32px) | `1.1` | `0` |

### Font Sizes (App / Body)

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `--text-xs` | `0.75rem` (12px) | `1.25` | Captions, labels |
| `--text-sm` | `0.875rem` (14px) | `1.5` | Secondary text |
| `--text-base` | `1rem` (16px) | `1.5` | Body text |
| `--text-lg` | `1.125rem` (18px) | `1.625` | Lead paragraphs |
| `--text-xl` | `1.25rem` (20px) | `1.625` | Subheadings |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-extralight` | `200` | Large display (delicate) |
| `--font-light` | `300` | Display headings |
| `--font-normal` | `400` | Body text |
| `--font-medium` | `500` | Emphasis, buttons |
| `--font-semibold` | `600` | Subheadings |
| `--font-bold` | `700` | Strong emphasis |

---

## Spacing

### Base Scale (4px grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-0` | `0` | No spacing |
| `--space-1` | `0.25rem` (4px) | Tight internal |
| `--space-2` | `0.5rem` (8px) | Internal padding |
| `--space-3` | `0.75rem` (12px) | Component gaps |
| `--space-4` | `1rem` (16px) | Standard gap |
| `--space-5` | `1.25rem` (20px) | Section padding |
| `--space-6` | `1.5rem` (24px) | Component margins |
| `--space-8` | `2rem` (32px) | Section gaps |
| `--space-10` | `2.5rem` (40px) | Large sections |
| `--space-12` | `3rem` (48px) | Page sections |
| `--space-16` | `4rem` (64px) | Major divisions |
| `--space-20` | `5rem` (80px) | Hero spacing |
| `--space-24` | `6rem` (96px) | Full sections |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `0.375rem` (6px) | Small buttons, tags |
| `--radius-md` | `0.5rem` (8px) | Inputs, cards |
| `--radius-lg` | `0.75rem` (12px) | Modals, dropdowns |
| `--radius-xl` | `1rem` (16px) | Large cards |
| `--radius-2xl` | `1.5rem` (24px) | Hero elements |
| `--radius-full` | `9999px` | Pills, avatars |

---

## Shadows

### Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px oklch(0 0 0 / 0.05)` | Subtle lift |
| `--shadow-sm` | `0 2px 4px oklch(0 0 0 / 0.06)` | Cards, buttons |
| `--shadow-md` | `0 4px 12px oklch(0 0 0 / 0.08)` | Dropdowns, modals |
| `--shadow-lg` | `0 8px 24px oklch(0 0 0 / 0.1)` | Floating elements |
| `--shadow-xl` | `0 12px 40px oklch(0 0 0 / 0.12)` | Hero elements |

### Dark Mode

Multiply opacity values by `1.5` for equivalent visual weight.

---

## Motion

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | Micro-interactions |
| `--duration-normal` | `250ms` | Standard transitions |
| `--duration-slow` | `400ms` | Page transitions |
| `--duration-slower` | `600ms` | Hero reveals |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-linear` | `linear` | Continuous motion |
| `--ease-out` | `cubic-bezier(0.215, 0.61, 0.355, 1)` | Enter animations |
| `--ease-in-out` | `cubic-bezier(0.645, 0.045, 0.355, 1)` | Complex transitions |

### Stagger Delay

| Token | Value | Usage |
|-------|-------|-------|
| `--stagger-xs` | `50ms` | Tight lists |
| `--stagger-sm` | `100ms` | Standard lists |
| `--stagger-md` | `150ms` | Card grids |
| `--stagger-lg` | `200ms` | Hero elements |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | `0` | Default |
| `--z-raised` | `10` | Raised elements |
| `--z-dropdown` | `100` | Dropdowns |
| `--z-sticky` | `200` | Sticky headers |
| `--z-modal` | `300` | Modals, dialogs |
| `--z-popover` | `400` | Popovers, tooltips |
| `--z-toast` | `500` | Notifications |

---

## Glassmorphism (Optional)

For layered depth effects:

```css
--glass-bg: oklch(1 0 0 / 0.7);
--glass-bg-subtle: oklch(1 0 0 / 0.5);
--glass-bg-strong: oklch(1 0 0 / 0.85);
--glass-border: oklch(0 0 0 / 0.08);
--glass-blur: 12px;
--glass-shadow: 0 8px 32px oklch(0 0 0 / 0.1);
```

---

## Usage Guidelines

### DO
- Use `stone-50` as the primary background for warmth
- Keep body text at `stone-600` for readability
- Use `font-light` (300) for large display text
- Apply generous spacing (`--space-8` and above) for breathing room
- Animate with `--ease-out` for natural entry

### DON'T
- Use pure white (`stone-0`) as large backgrounds
- Mix font families within the same context
- Use shadows heavier than `--shadow-lg`
- Animate with durations under `150ms`

---

## Implementation

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-stone-50: oklch(98.5% 0.002 264.542);
  --color-stone-900: oklch(20.5% 0 0);
  
  /* Typography */
  --font-display: var(--font-figtree), sans-serif;
  --font-body: var(--font-geist-sans), sans-serif;
  
  /* Spacing */
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Motion */
  --duration-normal: 250ms;
  --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
}
```

### Tailwind Configuration

Extend the default theme:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        stone: {
          50: 'oklch(98.5% 0.002 264.542)',
          // ... etc
        }
      },
      fontFamily: {
        display: ['var(--font-figtree)', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'sans-serif'],
      }
    }
  }
}
```

---

*Last updated: March 2026*
