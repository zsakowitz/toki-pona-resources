// @ts-check

declare module "virtual:linku" {
  export type Word = typeof import("../../vite.config.js").words[string] & {
    usage: "core" | "widespread" | "common" | "uncommon" | "rare" | "obscure"
    book: "pu" | "ku suli" | "ku lili" | "nimi sin"
  }

  export const words: { [x: string]: Word }
}
