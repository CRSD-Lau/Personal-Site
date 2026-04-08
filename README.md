# Neil Mitchell — Personal Website

Personal professional website for Neil Mitchell, Journey Specialist – Product & Regulatory at TD Insurance.

**Live site:** https://neil-mitchell.netlify.app

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router, static export
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://netlify.com)

---

## Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
# → http://localhost:3000
```

### Build for production
```bash
npm run build
```

### Preview production build locally
```bash
npm run start
```

---

## Deployment

### Netlify (primary)

**Live URL:** https://neil-mitchell.netlify.app

```bash
npm run build
netlify deploy --dir=out --prod
```

First time only — authenticate:
```bash
netlify login
```

---

### Vercel

**Live URL:** https://neil-mitchell.vercel.app

> **Note:** Vercel's Deployment Protection may require login to view the site.
> To make it public: Vercel Dashboard → Project → Settings → Deployment Protection → Off.

**First-time setup:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Subsequent deploys:**
```bash
vercel --prod
```

**Re-apply the clean URL alias after each deploy:**
```bash
vercel alias set <new-deployment-url>.vercel.app neil-mitchell.vercel.app
```

---

### Git → Auto-deploy workflow

For changes that should go through a PR:

```bash
# 1. Make your changes locally
npm run dev                         # preview at localhost:3000

# 2. Build and test
npm run build

# 3. Commit and push to your feature branch
git add .
git commit -m "describe your change"
git push origin clean-branch

# 4. Open a PR on GitHub, merge to main

# 5. Redeploy manually after merge
npm run build
netlify deploy --dir=out --prod     # updates Netlify
vercel --prod                       # updates Vercel
```

---

## Project Structure

```
/app
  layout.tsx        # Root layout, metadata, fonts
  page.tsx          # Single-page entry point
  globals.css       # Tailwind base + custom utilities

/components
  Navigation.tsx    # Sticky nav, mobile menu, active section highlight
  DarkModeToggle.tsx
  ScrollProgress.tsx
  SectionReveal.tsx # Scroll-triggered reveal animations
  AnimatedCounter.tsx

/sections
  Hero.tsx          # Name, headline, photo, CTAs
  About.tsx         # Professional summary, working philosophy
  Experience.tsx    # Career timeline (all TD Insurance roles)
  Skills.tsx        # Skill categories + capability tag cloud
  Impact.tsx        # Key metrics and initiatives
  WorkingStyle.tsx  # Values + testimonial
  Contact.tsx       # Contact links + message form
  Footer.tsx

/public
  profile.jpg       # Headshot
  resume.pdf        # Downloadable resume
```

---

## Customisation

| What | Where |
|---|---|
| Name, headline, bio | `sections/Hero.tsx` → `HERO_CONTENT` |
| About text | `sections/About.tsx` → `ABOUT_CONTENT` |
| Work experience | `sections/Experience.tsx` → `EXPERIENCE_DATA.roles` |
| Skills | `sections/Skills.tsx` → `SKILLS_DATA` |
| Impact metrics | `sections/Impact.tsx` → `IMPACT_DATA` |
| Values | `sections/WorkingStyle.tsx` → `WORKING_STYLE` |
| Contact details | `sections/Contact.tsx` → `CONTACT_DATA` |
| Brand colours | `tailwind.config.ts` → `colors.brand` |
| SEO metadata | `app/layout.tsx` → `metadata` |
| Headshot | Replace `/public/profile.jpg` |
| Resume PDF | Replace `/public/resume.pdf` |

---

## Resume Download

Place the PDF at `/public/resume.pdf`. The download button in the Hero and Contact sections links to `/resume.pdf` automatically.

To change the button label:
- Hero: `sections/Hero.tsx` → `HERO_CONTENT.cta_secondary.label`
- Contact: `sections/Contact.tsx` → `CONTACT_DATA.links` → Resume entry `label`
