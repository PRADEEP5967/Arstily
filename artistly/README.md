# Artistly.com (Demo App)

A functional, mobile-responsive web demo of a fictional platform for booking performing artists. Built with Next.js, React, and Tailwind CSS.

## Features
- Homepage with hero, category cards, and navigation
- Artist listing with filtering (category, location, price)
- Responsive grid/list layout
- Artist onboarding form (multi-section, validation, image upload)
- Manager dashboard with table of artist submissions (view/delete)
- All data handled via static JSON or localStorage (no backend)

## Tech Stack
- Next.js 13+ (App Router)
- React Functional Components
- Tailwind CSS
- React Hook Form + Yup (form validation)

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Deploying to Vercel
1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **New Project** and import your repo.
4. Use default settings (Vercel auto-detects Next.js).
5. Click **Deploy**. Your app will be live on a Vercel URL!

## Folder Structure
- `/src/app` — All pages (homepage, browse, manager, etc.)
- `/src/components` — Reusable UI components (ArtistCard, FilterBlock, Table, etc.)
- `/src/utils` — Utility functions for localStorage, etc.
- `/src/mock-artists.json` — Static artist data

## Notes
- No backend or real API—uses static/mock data only.
- UI is intentionally simple and clean for assignment clarity.

---

**Demo built for assignment purposes.**
