# Personal Engineering Portfolio — Irish U. Mercado

> **create a read me everytime you create new edits to the website**

## Project overview
A static, single-page portfolio for an Aerospace Engineering student. Visual direction (from the UI/UX Pro Max skill): Minimalism / Swiss style with a technical grid, deep navy + graphite + off-white and a restrained aerospace blue; Exo 2 (headings), Inter (body), Roboto Mono (technical labels); square 3px corners; subtle motion that respects `prefers-reduced-motion`.

## Features
Sticky nav with active-section indicator · smooth scroll · hero with resume/projects/contact buttons · project filter by category · project technical-details dialog · image gallery (prev/next, thumbnails, arrow keys) · CAD section split into OJT (compact rows) and academic/personal (large cards) · dark/light toggle · copy-email button · mailto contact form · back-to-top · skip link and visible focus states.

## Technologies
Plain HTML, CSS and JavaScript. No build step, no frameworks, no Firebase. Google Fonts only.

## Folder structure
```
index.html          page structure + SEO metadata
css/styles.css      design tokens and styles
js/data.js          ALL editable content (projects, CAD, certs, contact…)
js/main.js          rendering + interactions
assets/images/      project images (PNG, JPG, JPEG, WebP)
assets/pdf/         resume.pdf, certificates, 3D PDFs
CHANGELOG.md        dated edit log
```

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Edit content
Open `js/data.js`. Change text, add tools, set `contact.email`, `contact.linkedin`, `contact.github`. Empty fields display "To be added". Never add confidential company drawings, proprietary dimensions or internal documents — use approved/sanitized renders only.

## Add images, PDFs and the resume
1. Put images in `assets/images/` (use WebP/optimized JPG, ~1600px wide max).
2. In `js/data.js`, set `images: ["assets/images/my-image.webp"]` for that project (works for projects and CAD entries).
3. Add `pdf: "assets/pdf/model-3d.pdf"` for a PDF or 3D PDF, `link: "https://…"` for an external link.
4. Save your resume as `assets/pdf/resume.pdf` (the Download Resume button points there). Add your profile photo as `assets/images/profile.jpg` and replace the placeholder in `index.html` with an `<img>`.

## Deploy on GitHub Pages
1. Create a GitHub repository and push this folder to the `main` branch.
2. Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Visit the URL GitHub shows after a minute. All paths are relative, so it works under a project subpath.

## Known to-dos
Real email/LinkedIn/GitHub, profile photo, resume PDF, project images, sanitized CAD renders, missing project descriptions (DataSaster, CJUTHINK, CAD items), OJT period dates.
