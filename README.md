# Uppala Sai Anjani — Portfolio

A single-page, self-contained developer/analyst portfolio site. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies, no framework.

## 🔗 Live Sections

The page is a single scrollable document (`index.html`) split into anchor-linked sections:

| Section | ID | Description |
|---|---|---|
| Home / Hero | `#home` | Intro headline, tagline, and primary CTAs |
| About | `#about` | Short bio and background |
| Skills | `#skills` | Technical stack and tools |
| Experience | `#experience` | Work history / roles |
| Projects | `#projects` | Featured project cards |
| Publications | `#publications` | Research / published work |
| Leadership | `#leadership` | Leadership & extracurricular activities |
| Certifications | `#certifications` | Certifications and credentials |
| Contact | `#contact` | Contact form |

## 📁 File Structure

```
.
├── index.html   # Page markup and content
├── style.css    # All styling (theme, layout, animations)
└── README.md    # This file
```

## ✨ Features

- **Scroll progress bar** — fixed indicator showing scroll position (`#scrollProgressFill`)
- **Reveal-on-scroll animations** — elements fade/slide in as they enter the viewport (`.reveal` class)
- **3D tilt project cards** — interactive hover-tilt effect on project cards
- **Code-editor themed chrome** — visual styling inspired by IDE aesthetics
- **Responsive layout** — adapts across desktop and mobile
- **Contact form** — front-end form with inline validation and status messaging (`#contactForm`)

## 🛠️ Tech Stack (of the site itself)

- HTML5 (semantic sections, no framework)
- CSS3 (custom properties, animations, grid/flexbox)
- Vanilla JavaScript (scroll listeners, IntersectionObserver-based reveals, tilt effect)

## 🚀 Running Locally

No build tools required. Just open the file directly:

```bash
open index.html
```

Or serve it with any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## ✏️ Editing Content

All visible text lives directly in `index.html` — search for the relevant section by its `id` (see table above) and edit the markup in place. Styling (colors, spacing, animations) is centralized in `style.css`.

## 📌 To Do / Placeholder Content

- [ ] Swap in real project details, links, and screenshots in the `#projects` section
- [ ] Verify publication links/citations in `#publications`
- [ ] Wire up the contact form (`#contactForm`) to an actual backend or form service (e.g. Formspree, EmailJS) since it's currently front-end only
- [ ] Add favicon / social preview meta tags if deploying publicly

## 📄 License

Personal portfolio — all rights reserved to Uppala Sai Anjani.
