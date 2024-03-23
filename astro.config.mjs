import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://dwalker11.github.io",
  base: "contemporary-it",
  trailingSlash: "always",
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
