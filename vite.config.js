// @ts-check

import { sveltekit } from "@sveltejs/kit/vite"
import linku from "./src/linku.json"

export const words = Object.fromEntries(
  Object.entries(linku.data).map(([key, word]) => [
    key,
    {
      book: word.book == "none" ? undefined : word.book,
      definition: word.def.en,
      sitelenPona: "sitelen_pona" in word ? word.sitelen_pona : undefined,
      sitelenSitelen:
        "sitelen_sitelen" in word ? word.sitelen_sitelen : undefined,
      word: word.word,
      usageCategory: word.usage_category,
    },
  ])
)

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    {
      name: "vite-plugin-linku",
      resolveId(id) {
        if (id === "virtual:linku") {
          return "\0virtual:linku"
        }
      },
      load(id) {
        if (id === "\0virtual:linku") {
          return `export const words = ` + JSON.stringify(words)
        }
      },
    },
  ],
}

export default config
