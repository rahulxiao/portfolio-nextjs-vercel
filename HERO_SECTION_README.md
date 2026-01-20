# Hero Section Component

## Overview
A premium, fully Server-Side Rendered (SSR) hero section component for your Next.js portfolio. No client-side JavaScript required - pure React Server Components.

## Features
✅ **100% SSR** - No "use client" directive needed
✅ **Animated Gradients** - Beautiful pulsing gradient orbs in the background
✅ **Glassmorphism** - Modern frosted glass effects on cards and buttons
✅ **Staggered Animations** - Smooth fade-in effects with delays
✅ **Responsive Design** - Looks great on all screen sizes
✅ **Dark Mode Support** - Automatic dark mode styling
✅ **Accessibility** - Proper ARIA labels and semantic HTML

## Customization Guide

### 1. Personal Information
Update these sections in `components/hero-section.tsx`:

```tsx
// Line 28-30: Your name
<span className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
  Your Name  // ← Change this
</span>

// Line 34-36: Your title
<p className="mb-4 max-w-2xl text-center text-xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-2xl md:text-3xl animate-fade-in-up [animation-delay:200ms]">
  Full Stack Developer & Designer  // ← Change this
</p>

// Line 39-42: Your description
<p className="mb-12 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl animate-fade-in-up [animation-delay:400ms]">
  Crafting beautiful, performant web experiences...  // ← Change this
</p>
```

### 2. Social Links
Update the URLs in the social links section (lines 64-92):

```tsx
// GitHub
href="https://github.com/yourusername"  // ← Change this

// LinkedIn
href="https://linkedin.com/in/yourusername"  // ← Change this

// Email
href="mailto:your.email@example.com"  // ← Change this
```

### 3. Button Actions
The buttons currently don't have actions. You can:
- Convert them to `<Link>` components from Next.js
- Add `href` attributes to navigate to sections
- Keep them as visual elements for now

Example with Next.js Link:
```tsx
import Link from "next/link";

<Link href="#projects">
  <Button size="lg" className="...">
    View My Work
  </Button>
</Link>
```

### 4. Color Scheme
The component uses gradient colors. To change them:

**Purple/Pink/Blue gradient** (current):
```tsx
from-purple-600 via-pink-600 to-blue-600
```

**Other options**:
- Green/Blue: `from-emerald-600 via-teal-600 to-blue-600`
- Orange/Red: `from-orange-600 via-red-600 to-pink-600`
- Blue/Purple: `from-blue-600 via-indigo-600 to-purple-600`

### 5. Availability Badge
To hide or change the "Available for opportunities" badge:

```tsx
// Line 17-23: Remove or modify
<div className="mb-8 inline-flex items-center gap-2...">
  Available for opportunities  // ← Change text or remove entire div
</div>
```

## Animation Delays
The staggered animation uses these delays:
- Badge: 0ms (immediate)
- Heading: 0ms (immediate)
- Subtitle: 200ms
- Description: 400ms
- Buttons: 600ms
- Social Links: 800ms

To adjust, modify the `[animation-delay:XXXms]` classes.

## Background Effects

### Gradient Orbs
Three animated gradient orbs create depth:
1. **Top-left**: Purple/Pink
2. **Right**: Blue/Cyan
3. **Bottom**: Violet/Fuchsia

To disable, remove lines 11-13 in the component.

### Grid Pattern
The subtle grid pattern can be removed by deleting line 10.

## Responsive Breakpoints
- **Mobile**: Base styles
- **sm**: 640px (text-xl → text-2xl)
- **md**: 768px (text-2xl → text-3xl)
- **lg**: 1024px (text-3xl → text-8xl)

## Dark Mode
Dark mode is automatic based on the `.dark` class on the root element. All colors have dark mode variants using the `dark:` prefix.

## Next Steps
1. ✅ Component created and integrated
2. 📝 Customize personal information
3. 🔗 Update social links
4. 🎨 Adjust colors if desired
5. 🔘 Add button functionality
6. 📱 Test on mobile devices
7. 🌙 Test dark mode toggle

## File Structure
```
portfolio-nextjs-vercel/
├── app/
│   ├── page.tsx              # Uses HeroSection
│   └── globals.css           # Contains animations
└── components/
    ├── hero-section.tsx      # Main hero component
    └── ui/
        └── button.tsx        # Button component
```

## Performance
- **SSR**: Fully rendered on the server
- **No JavaScript**: Animations use pure CSS
- **Lighthouse Score**: Should be 100/100
- **Bundle Size**: Minimal impact

Enjoy your new hero section! 🚀
