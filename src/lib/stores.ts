import { persisted } from "svelte-local-storage-store"

const options = {
  serializer: {
    parse(text: string): boolean {
      return text == "true"
    },
    stringify(object: boolean): string {
      return object ? "true" : "false"
    },
  },
}

export const dark = persisted("dark", false, options)

export const tp = persisted("tp", false, options)

export const isLarge = persisted("cheat-sheet:is-large", false, options)

export const isPractice = persisted("cheat-sheet:is-practice", false, options)

export const isShuffled = persisted("cheat-sheet:is-shuffled", false, options)
