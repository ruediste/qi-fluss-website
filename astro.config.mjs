// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://ruediste.github.io",
  base: "/qi-fluss-website",
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Montserrat-VariableFont_wght.ttf"],
            weight: "100 900",
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"],
            weight: "100 900",
            style: "italic",
            display: "swap",
          },
        ],
      },
    },
  ],
  vite: {
    resolve: {
      alias: {
        "@styles": path.resolve("./src/styles"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/vars.scss" as *;\n`,
        },
      },
    },
  },
});
