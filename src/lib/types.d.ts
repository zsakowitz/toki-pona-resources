// @ts-check

declare module "virtual:linku" {
  export type Word = typeof import("../../vite.config.js").words[string] & {
    usageCategory:
      | "core"
      | "widespread"
      | "common"
      | "uncommon"
      | "rare"
      | "obscure"
  }

  export const words: { [x: string]: Word }
}
