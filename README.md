# Charoskhon Farkhadova | Responsive Developer Portfolio

A five-page responsive portfolio website for a Management Information Systems student applying to early-career IT roles. Built with semantic **HTML5**, modern **CSS3**, and lightweight **vanilla JavaScript**. No frameworks, third-party fonts, external images, or build tools required.

> **Creation note:** This is a **new portfolio project created in October 2026 with AI assistance**, not a recovered copy of an earlier university HTML/CSS assignment. Content describing academic work links to the corresponding repositories. Review the implementation and learn how it works before presenting front-end development as an independent skill.

## Pages

- `index.html` — homepage, introduction, featured projects, and career focus.
- `projects.html` — five linked GitHub projects with interactive category filters.
- `about.html` — educational and professional background.
- `skills.html` — academic technical foundations, business skills and current coursework.
- `contact.html` — contact options and links to GitHub/LinkedIn (no backend or submitted data).

## Features

- Responsive CSS layouts for mobile, tablet, and desktop.
- Working, keyboard-accessible mobile navigation with ARIA state.
- Dark/light theme switch saved locally (graceful fallback when browser storage is unavailable).
- Filterable project cards with accessible live status text.
- Semantic landmarks, skip link, visible focus states, reduced-motion support.
- CSS-only graphic elements and a custom SVG favicon; no third-party dependencies.
- Working links to five real, published GitHub repositories.

## Run locally

Open `index.html` in any modern web browser. Alternatively run a development server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Publish with GitHub Pages

1. Create a **public repository**, for example `responsive-developer-portfolio`.
2. Upload all five `.html` files, `README.md`, and the entire `assets/` folder **at the repository root**.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`, and save.
4. After publishing, your site will be available at `https://requiembby.github.io/responsive-developer-portfolio/` (GitHub Pages availability and deployment status are controlled by GitHub).

All internal links and asset paths are relative, so the site also works under a repository subpath.

## Content and privacy

- Portfolio links: [GitHub](https://github.com/requiembby) and [LinkedIn](https://www.linkedin.com/in/charoskhon-farkhadova-2148a9307/).
- Contact includes a public-facing email address from the author's existing CV.
- The site makes no claims of professional front-end engineering experience, production deployment, or a completed prior HTML/CSS final assignment.
- The academic projects use their own repository scope notes; some are documentation-led case studies rather than executable apps.

## Suggested next improvements

- Add verified screenshots of the site on mobile and desktop.
- Run an automated accessibility audit and fix any reported issues.
- Add a resume download after final review and removal of private information.
- Keep the linked repositories updated with verified source code where available.

## License

No license has been granted. All rights reserved by the author unless a separate license is added.