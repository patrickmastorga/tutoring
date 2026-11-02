# Math, Made Clear — tutoring site starter

A one-page, static Jekyll site designed to grow into a personal high-school math tutoring website. The starter intentionally uses no Jekyll plugins beyond GitHub Pages' supported bundle and keeps its styling and tiny navigation script in separate asset files.

## Before your first commit

1. Replace the obvious placeholders in `index.md`:
   - `[Your name]`, `[Your rate]`, background-check details, policies, and email address.
   - Replace the photo placeholder in the About section with your own image when ready. Put it under `assets/images/` and add an `<img>` in `index.md` with useful alt text.
   - Replace `[YOUR_GOOGLE_CALENDAR_BOOKING_LINK]` with your booking page URL. If you choose to embed the booking page, replace the calendar placeholder with Google's embed code.
   - Change the page title and description in `index.md` and `_config.yml` if you want different branding.
2. Leave reviews as placeholders until you have permission to publish the wording and attribution.
3. Decide how to receive interest-form submissions before adding a form. A static Jekyll page does not process or store form entries; connect a form service or use a `mailto:` link.
4. If using GitHub Pages under a project repository URL (for example `username.github.io/tutoring`), set `baseurl: "/tutoring"` in `_config.yml`. For a user site (`username.github.io`) or a custom domain at the root, keep `baseurl: ""`.

## Initialize Git and make the first commit

This folder is deliberately not initialized as a Git repository. When ready, run:

```sh
git init
git add .
git commit -m "Create tutoring site starter"
git branch -M main
```

Create an empty GitHub repository, connect it as `origin`, then push `main`:

```sh
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy with GitHub Pages

This starter uses GitHub Pages' built-in Jekyll publishing from a branch; it does not need a custom GitHub Actions workflow. After you push your first commit to `main`:

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select branch **`main`** and folder **`/(root)`**, then click **Save**.
4. GitHub Pages will build and publish the Jekyll site from the repository root. Check **Settings → Pages** for the published URL and the build status.

Later pushes to `main` will automatically trigger publishing. If the page doesn't appear right away, allow a few minutes and check the Pages build/deployment status in repository settings. You do not need to set up an Actions workflow or install Ruby locally just to publish this site.

## Preview locally (optional)

Ruby and Bundler are required. This project uses the GitHub Pages-compatible Jekyll environment through the `github-pages` gem. GitHub Pages' published dependency list currently uses Jekyll 3.10.0, Liquid 4.0.4, and Ruby 3.3.4. GitHub's local-testing guide cautions that the `github-pages` bundle can have compatibility errors on Ruby 3.2 and later, and recommends Ruby 3.1.x or earlier if you hit them. Ruby 4.0 is not a good target for this bundle. Use a separate Ruby 3.1 installation for local preview; don't alter macOS system Ruby:

```sh
bundle install
bundle exec jekyll serve
```

Then open the local URL printed by Jekyll, usually `http://127.0.0.1:4000`.

## Where things live

- `index.md` — one-page content and section placeholders.
- `_layouts/default.html` — shared document shell, metadata, header/navigation.
- `_includes/footer-scripts.html` — reserved spot for small optional integrations.
- `Gemfile` — GitHub Pages-compatible dependencies if you later want to preview locally.
- `assets/css/style.css` — responsive visual design and styles.
- `assets/js/main.js` — accessible mobile navigation enhancement.
- `_config.yml` — Jekyll configuration and site metadata.
- `Gemfile` — GitHub Pages-compatible Jekyll dependencies for optional local preview.
