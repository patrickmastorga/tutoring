import { defineConfig } from "astro/config";

// This is a GitHub *project* page, served from /<repo>/, not the domain root.
// `base` makes every asset URL (/tutoring/_astro/...) resolve correctly there.
// If you rename the repo, update `base`; if you move to a custom domain, set
// base to "/" and site to that domain.
export default defineConfig({
  site: "https://patrickmastorga.github.io",
  base: "/tutoring",
});
