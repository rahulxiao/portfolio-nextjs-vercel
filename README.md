# Portfolio Project - Technical Documentation & Q&A

This document serves as a comprehensive guide to the Personal Portfolio project. It is structured to anticipate and answer questions a Project Manager or Technical Lead might ask regarding the architecture, design choices, features, and maintainability of the codebase.

## 🚀 Project Overview

**Q: What is the primary goal of this project?**
**A:** The goal is to build a high-performance, visually stunning, and responsive personal portfolio website to showcase my skills, projects, and professional experience. It serves as a central hub for potential employers and clients to evaluate my technical capabilities (Web, Game Dev, Mobile) and view my work.

## 🛠 Tech Stack & Architecture

**Q: What technology stack are you using and why?**
**A:**
*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) - Chosen for its server-side rendering (SSR) capabilities, SEO benefits, and robust routing system.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - Ensures type safety, reduces runtime errors, and improves developer experience with better autocomplete and refactoring tools.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Allows for rapid UI development with utility-first classes, ensuring easier responsiveness and consistent design tokens.
*   **UI Components:** Custom components inspired by [shadcn/ui](https://ui.shadcn.com/) and [Aceternity UI](https://ui.aceternity.com/) for modern, accessible, and high-quality design elements (e.g., Bento Grids, Moving Borders).
*   **Icons:** [Lucide React](https://lucide.dev/) - A consistent and lightweight icon library.
*   **Fonts:** `Geist Sans` and `Geist Mono` for a modern, clean typographic aesthetic.

**Q: Why use Server-Side Rendering (SSR)?**
**A:** We use SSR (via Next.js App Router) for critical pages to ensure:
1.  **Fast Initial Load:** The server sends pre-rendered HTML, reducing the time to First Contentful Paint.
2.  **SEO Optimization:** Search engines can easily crawl the content without needing to execute complex JavaScript.

## 🎨 Design & UI/UX

**Q: Is the design responsive?**
**A:** Yes, fully responsive.
*   We use Tailwind's responsive modifiers (e.g., `md:`, `lg:`) to adapt layouts for Mobile, Tablet, and Desktop.
*   Complex components like the `BentoGrid` automatically adjust their column counts and row heights based on screen width.

**Q: How are you handling animations?**
**A:** We use CSS animations (Tailwind `animate-*` classes) and lightweight React animations. This keeps the bundle size small while adding "delight" factors like hover effects, pulses, and smooth transitions.

## 🧩 Key Features & Components

**Q: What are the standout features implementing so far?**
**A:**
1.  **Hero Section:** High-impact introduction with clear CTA and social links.
2.  **Bento Grid (Grid Info):** A modern, grid-based layout to visualize skills (Web, Game, Mobile), education, and achievements in a compact, scannable format.
3.  **Featured Projects:** A showcase section highlighting key work with descriptions and links.
4.  **Sticky Scroll/Workflow:** (Planned/In-progress) To demonstrate process flows or timelines.
5.  **Contact Section:** Direct means for engagement.

**Q: I saw a "Bento Grid". Why use that layout?**
**A:** The Bento pattern (popularized by Apple and Linear) allows us to display heterogeneous content (maps, stats, text, icons) in a unified, visually interesting way. It breaks the monotony of standard list views.

## 📉 Performance & SEO

**Q: How is the site optimized for performance?**
**A:**
*   **Image Optimization:** Utilizing `next/image` to automatically resize, compress, and serve images in modern formats like WebP.
*   **Code Splitting:** Next.js automatically splits code by route, so users only download what they need.
*   **Font Optimization:** Using `next/font` to host fonts locally and prevent layout shift (CLS).

**Q: Is the site SEO-friendly?**
**A:** Yes.
*   Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<h1>`).
*   Metadata API used in `layout.tsx` and `page.tsx` to define titles and descriptions.
*   Descriptive alt text for accessibility and search engines.

## 💻 Development Workflow

**Q: How do I run the project locally?**
**A:**
1.  Install dependencies: `bun install` (or npm/yarn).
2.  Run dev server: `bun run dev`.
3.  Open `http://localhost:3000`.

**Q: How do we identify and fix bugs?**
**A:**
*   **Linting:** `eslint` is configured to catch code quality issues.
*   **Types:** TypeScript compiler strict mode checks for type errors during build.
*   **Debugging:** We use the browser console and Next.js error overlay for runtime issues.

## 🔮 Future Roadmap

**Q: What's next for the project?**
**A:**
*   **Blog Integration:** Adding a CMS (like Sanity or MDX) for writing articles.
*   **Dark/Light Mode Toggle:** Full theme switching support (infrastructure is already partially in place with `dark:` classes).
*   **Interactive 3D Elements:** Potential addition of Three.js/Canvas elements if performance allows.

---

*This document is maintained by the Development Team. Last Updated: Jan 2026*
