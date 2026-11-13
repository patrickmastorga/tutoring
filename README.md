# Math tutoring site

A single-page static site built with [Astro](https://astro.build), styled with
[Pico CSS](https://picocss.com) (a premade classless theme — no CSS of our own).
Publishes to GitHub Pages on every push to `main`.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
```

`npm run dev` live-reloads as you edit.

## What to edit

**Everything you need to change is in [`src/content/site.ts`](src/content/site.ts).**
Search it for `TODO`. In short:

| What | Where |
| --- | --- |
| Your name, email | `name`, `email` |
| Interest form link | `interestFormUrl` |
| Google Calendar booking | `bookingEmbed` (or `bookingUrl`) |
| Your photo | drop a file in `public/`, then set `photo` to `/yourfile.jpg` |
| Subjects list | `subjects` |
| The three "How it works" steps | `steps` |
| Rate and policies | `policies` |

Prose still marked with `[brackets]` in [`src/pages/index.astro`](src/pages/index.astro)
is placeholder text for you to replace: the bio, the background line, the
background-check line, and the contact blurb.

### The Google Calendar widget

Google Calendar → **Appointment schedules** → your schedule → **Share** → copy
the `<iframe>` embed code. Paste the whole snippet between the backticks in
`bookingEmbed`. It must stay on one line. Until you paste it, the site shows a
plain "Book a free intro call" button pointing at `bookingUrl` instead.

### Adding reviews

Add one Markdown file per review in [`src/content/reviews/`](src/content/reviews/):

```md
---
title: "[Review headline]"
author: "[Name or initials]"
source: "Knack peer-to-peer tutoring, on campus"
---

[Paste the review.]
```

The newest-first one shows as a large quote; the rest render as collapsible
items. The Reviews section stays hidden until at least one review has a body,
so you can ship the site now and add reviews as you collect them.

## Publishing

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and deploys on push to `main`. One-time setup:

1. Push this repo to GitHub.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`, or run the workflow manually from the **Actions** tab.

The site will be at `https://<user>.github.io/<repo>/`. If your repo name or
username changes, update `site` in [`astro.config.mjs`](astro.config.mjs).

## Adding your own CSS

Try not to. If you must, put it in `src/styles/extra.css` and import it in
`index.astro` — but the theme is designed to be left alone.
