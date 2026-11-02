# Math tutoring site

A small, one-page Jekyll site using GitHub Pages' built-in `jekyll-theme-minimal` theme and Markdown. No custom layouts, stylesheet, JavaScript, or Actions workflow.

## Fill in the page

Edit `index.md` and replace the bracketed placeholders with your own details. Keep the review section empty or use its note until you have permission to publish reviews. For a Google Calendar schedule, you can start with its booking link; an embed can be added later if you want one.

## Initialize Git and push to GitHub

This folder has not been initialized as a Git repository. When ready:

```sh
git init
git add .
git commit -m "Create tutoring site"
git branch -M main
```

Create an empty GitHub repository, then connect it and push:

```sh
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Publish with GitHub Pages

After pushing `main`:

1. Open the repository on GitHub and choose **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **`main`** and **`/(root)`**, then click **Save**.
4. GitHub Pages will build and publish the site. Check the Pages settings for the URL and status.

Subsequent pushes to `main` will publish updates automatically. No Actions workflow or local Ruby installation is required for this branch-publishing setup.
