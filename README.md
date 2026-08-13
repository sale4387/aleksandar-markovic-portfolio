# Aleksandar Marković Portfolio

Single-page Next.js portfolio with editable content in `src/data/portfolio.ts`.

## Local development

```bash
npm install
npm run dev
```

## Static deployment (TransIP)

```bash
npm run build
```

The generated `out/` directory is a static website. Upload its **contents** to the web root on TransIP.

## Editing content

Update `src/data/portfolio.ts` for name, summary, navigation, skills, roles, projects, hobbies, and all other portfolio content. Page sections are intentionally separate files in `src/components/sections/`.

## Project screenshots and hobby photos

All project text, tags, status labels, and image paths are in `src/data/portfolio.ts`. The site does not require images to build: until a matching image is added, it shows a styled product-preview fallback instead of a broken image.

Add final assets before building, keeping these folder names and the filenames referenced in `portfolio.ts`:

```text
public/images/
├── profile/
├── ai-projects/
│   ├── decision-making/
│   ├── energy-optimizer/
│   ├── cv-optimizer/
│   ├── commercial-cv/
│   ├── dental-trip-savings/
│   └── seo-automation/
├── events/
└── hobbies/
    ├── diving/
    └── woodworking/
```

Each project supports three screenshots by default: a main screen plus two layered previews. Change the paths or add/remove entries in that project's `images` array. Hobbies can use one or more images: with one image the carousel controls are hidden; with more, it gently advances and also has manual controls.

Run `npm run build` after adding images. Upload the contents of the generated `out/` folder to your hosting web root.
