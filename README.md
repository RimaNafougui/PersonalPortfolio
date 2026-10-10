![Preview of my app](https://rimanafougui.com/images/PersonalPortfolio.png)

# Personal Portfolio Website

Live at [rimanafougui.com](https://rimanafougui.com).

## Overview

My personal portfolio, built with Next.js and Tailwind CSS. It presents my experience, projects, activities and technical writing, in English and French.

## Features

- Responsive design with smooth animations (Framer Motion)
- English at `/` and French at `/fr` (separate pages with the correct `lang` attribute and hreflang links), with a matching resume PDF for each
- Featured projects with a collapsible "More projects" section
- Experience, activities and a technical journey timeline
- Markdown blog with syntax highlighting
- Simple contact section (email, LinkedIn, GitHub)
- SEO: sitemap, Open Graph image, structured data
- Analytics and speed insights (Vercel)

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** Markdown posts via gray-matter and react-markdown
- **Monitoring:** Vercel Analytics, Vercel Speed Insights
- **Deployment:** Vercel

## Content

All site copy lives in `lib/translation.ts` (English and French side by side). Skills lists are in `lib/data.ts`. Blog posts are Markdown files in `content/posts/`; set `draft: true` in the front matter to hide one. Resume PDFs are in `public/`.

## Local Development

### Prerequisites

- Node.js 20+ and npm

### Setup

```bash
git clone https://github.com/RimaNafougui/PersonalPortfolio.git
cd PersonalPortfolio
npm install
npm run dev
```

Open `http://localhost:3000` (English) or `http://localhost:3000/fr` (French). No environment variables are required.

### Production build

```bash
npm run build
npm start
```

## Future Improvements

- Publish the remaining draft posts
- Add a project detail page per project
