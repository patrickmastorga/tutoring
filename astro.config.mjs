import { defineConfig } from "astro/config";

// Set `site` to the final URL so canonical links and sitemaps are correct.
export default defineConfig({
  site: "https://patrickmastorga.github.io/tutoring",
  build: { format: "file" },
});
