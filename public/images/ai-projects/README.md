# AI project covers

Each project card uses a matching editable three-image set: `cover.svg` is the 16:10 hero mockup, while `workflow.svg` and `output.svg` are the overlapping supporting views. Open an SVG in a code editor, Figma, Illustrator, or Inkscape to revise its labels, colors, or UI layout. To replace an image with a PNG, update its path in `src/data/portfolio.ts`.

# Supporting product-story screenshots

Add up to three screenshots per project in the folders below. The portfolio already points to the preferred filenames; missing images automatically show a polished product-preview frame instead of a broken image.

- `decision-making/01-main.png`, `02-workflow.png`, `03-output.png`
- `energy-optimizer/01-main.png`, `02-patterns.png`, `03-recommendations.png`
- `cv-optimizer/01-main.png`, `02-validation.png`, `03-prep.png`
- `commercial-cv/01-main.png`, `02-validation.png`, `03-delivery.png`
- `dental-trip-savings/01-main.png`, `02-comparison.png`, `03-report.png`
- `seo-automation/01-main.png`, `02-research.png`, `03-brief.png`

Use wide interface screenshots for `01-main.png`; the second and third images can be supporting screens or workflow/output views. To use different names or more/less images, edit the `screenshots` array for that project in `src/data/portfolio.ts`.
