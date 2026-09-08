# MAVIS Creative

A plain HTML/CSS/JS site (no build step) for MAVIS Creative, matching the brand board and logo files you shared:
- Colors: Dark Slate Blue `#1a2a3a`, Antique Brass `#b49141`, Gray `#5a5a5a`
- Type: Baskerville Old Face (headlines) + Corbel (body)
- Logo: `assets/logo/mavis-creative-color.png` (light backgrounds) and `assets/logo/mavis-creative-white.png` (dark backgrounds — hero header, footer). The header swaps between the two automatically depending on what's behind it. Your gray logo variants and the standalone "MAVIS" mark (without "Creative") weren't used on the site yet — they're in your uploads if you want them for something like a favicon, letterhead, or social profile picture later.

## What's inside
- `index.html` — Home
- `services.html` — Photography / Videography / Graphic Design & Branding / Digital Marketing (includes Meta & Google Ads plus OTA listing optimization)
- `portfolio.html` — Filterable placeholder gallery
- `contact.html` — Contact info + a form that opens the visitor's email app addressed to you
- `css/style.css`, `js/main.js`

## About the fonts
Baskerville Old Face and Corbel are Microsoft-installed fonts, not available as free web fonts. So visitors who don't have them installed (most Mac/mobile/Linux users) will see the closest free alternatives instead:
- **Libre Baskerville** in place of Baskerville Old Face
- **Mulish** in place of Corbel

This keeps the same character — a classic serif display paired with a clean humanist sans — without needing a paid web font license. If you own a licensed web version of the real fonts later, just add the `@font-face` rule at the top of `css/style.css` and put the real name first in `--serif` / `--sans`.

## Icons & footer
The service icons (camera, video camera, palette, megaphone) are plain inline SVG using `currentColor`, so they automatically match the brass color used everywhere else — no image files to manage. If you want a different icon for any service, just swap the `<svg>...</svg>` markup inside that `<span class="index-icon">`.

The footer is now centered (logo, nav, then WhatsApp + email icons, then a divider and the copyright line) to match the MIUTA sites' footer style. Instagram wasn't added since there's no handle on file yet — once you have one, copy the WhatsApp/email `<a>` pattern in the footer and swap in an Instagram icon and link.

## Placeholders
Every photo/video panel is a CSS gradient block labeled "— placeholder" so nothing looks like a broken image. To swap one in:
1. Replace the `<div class="ph">...</div>` with an `<img src="images/your-photo.jpg" alt="...">` (add an `images/` folder).
2. Or keep the `<div class="ph">` wrapper and set it as a background-image in CSS if you want the same crop/label treatment.

## Deploying (same flow as your resume site)
1. Create a new GitHub repo, e.g. `mavis-studio`.
2. Push this folder's contents to it.
3. In Cloudflare Pages, connect the repo — no build command needed, output directory is `/` (the repo root).
4. Your site goes live at `mavis-studio.pages.dev` (or connect a custom domain later, e.g. `mavis.studio` or `mavis-creative.com` if you buy one).

## Still to plug in
- Real portfolio photos/videos
- Instagram or other social links (footer currently only lists WhatsApp + email)
- A real form backend if you want submissions to land somewhere other than your inbox (e.g. Formspree) — right now the contact form opens the visitor's email client with the message pre-filled, which needs no backend at all.
- Analytics (GA4), the same way you set it up on mikearmawa-resume.pages.dev
