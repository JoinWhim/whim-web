# 🛸 Whim: Find Your Next Move. Right Now.

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2014-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Styling: Tailwind](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Animations: Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-ff0055?style=flat-square&logo=framer)](https://framer.com/motion/)
[![3D: Spline](https://img.shields.io/badge/3D-Spline-FFAB00?style=flat-square&logo=spline)](https://spline.design/)

**Whim** is the spontaneous social network for Gen Z college students. This repository houses the high-conversion landing page designed to bridge the gap between bored students and local campus events.

---

## ✨ The Vision
In a world of "planning for weeks," Whim is about "doing something now." The website reflects this through a fast, futuristic, and premium dark-mode aesthetic.

- **Swipe Interface:** Mimicking the app's core mechanic via interactive web components.
- **.edu Exclusivity:** A gated ecosystem ensuring safety and real-world peer connections.
- **Spontaneity:** Ephemeral event cards and real-time group chats.

---

## 🎨 Design DNA (Tokens)

To maintain the "Whim Vibe," adhere strictly to these tokens defined in `tailwind.config.ts` and `.cursorrules`:

| Token | Value | Role |
| :--- | :--- | :--- |
| **Marketing BG** | `#0A0E1E` | Primary page background |
| **App Shell BG** | `#101628` | Secondary sections/In-app feel |
| **Brand Primary** | `#7C3AED` | Start of gradients / Main CTA |
| **Brand Accent** | `#8B6FF0` | End of gradients / Hover states |
| **Action: Join** | `#22c55e` | Success/Right-swipe glows |
| **Action: Skip** | `#ef4444` | Alert/Left-swipe glows |
| **Card Radius** | `24px` | Bento boxes and event cards |
| **Button Radius** | `16px` | Interactive CTAs |

### The "Premium" Rule
* **Glassmorphism:** Use `rgba(255, 255, 255, 0.04)` with a `1px` border of `rgba(255, 255, 255, 0.1)`.
* **Typography:** Tight letter-spacing (`-0.02em`) for headlines. No periods on headers.
* **Texture:** Every dark background should have a subtle SVG noise filter to prevent a "flat" AI look.

---

## 🚀 Technical Stack

- **Next.js 14:** App Router for high-performance routing.
- **Framer Motion:** Powering the "Swipe" animations and staggered entrance effects.
- **Spline:** Interactive 3D iPhone mockup that tracks the user's cursor.
- **Lucide React:** Minimalist, thin-stroke iconography.
- **Shadcn/UI:** Radix-based accessible primitives.

---

## 🛠️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/your-repo/whim-web.git
cd whim-web
npm install
```

### 2. Configure Environment
Create a `.env.local` for any analytics or waitlist API keys:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### 3. Run Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the spontaneous magic.

---

## 📂 Architecture

- `/components/hero`: The 3D interaction layer and value prop.
- `/components/bento`: The "How it Works" (Swipe/Join/Go) grid.
- `/components/vault`: The .edu exclusivity and trust section.
- `/public/models`: Spline scenes and 3D assets.

---

## 🤝 Contribution & Workflow

We use **Cursor** with specialized AI Agents to maintain quality:
- **@design:** Audits for visual polish and token compliance.
- **@motion:** Manages complex Framer Motion and 3D logic.
- **@growth:** Optimizes copy and conversion for the .edu gate.

Refer to `agents.md` for specific persona instructions.

---

## 📜 License
© 2026 Whim. Verified Students Only.