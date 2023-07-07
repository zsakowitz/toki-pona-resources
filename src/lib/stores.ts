import { persisted } from "svelte-local-storage-store"
import { readable } from "svelte/store"
import { words } from "virtual:linku"

const entries = Object.entries(words)

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

export const showDefinitions = persisted(
  "cheat-sheet:show-definitions",
  false,
  options
)

export const showWords = persisted("sitelen-sitelen:show-words", true, options)

export const showWordsWithoutGlyphs = persisted(
  "sitelen-sitelen:show-words-without-glyphs",
  false,
  options
)

export const showPunctuation = persisted(
  "sitelen-sitelen:show-punctuation",
  true,
  options
)

export const showSyllables = persisted(
  "sitelen-sitelen:show-syllables",
  true,
  options
)

export const filterByLinku = persisted(
  "cheat-sheet:filter-by-linku",
  false,
  options
)

export const usePu = persisted("book:pu", true, options)
export const useKuSuli = persisted("book:ku-suli", true, options)
export const useKuLili = persisted("book:ku-lili", false, options)
export const useNimiSin = persisted("book:nimi-sin", false, options)

export const useCoreWords = persisted("type:core", true, options)
export const useWidespreadWords = persisted("type:widespread", true, options)
export const useCommonWords = persisted("type:common", true, options)
export const useUncommonWords = persisted("type:uncommon", false, options)
export const useRareWords = persisted("type:rare", false, options)
export const useObscureWords = persisted("type:obscure", false, options)

export const visibleWords = readable(entries, (set) => {
  let $filterByLinku = false
  let $usePu = false
  let $useKuSuli = false
  let $useKuLili = false
  let $useNimiSin = false
  let $useCoreWords = false
  let $useWidespreadWords = false
  let $useCommonWords = false
  let $useUncommonWords = false
  let $useRareWords = false
  let $useObscureWords = false

  let canCheck = false

  filterByLinku.subscribe((x) => (($filterByLinku = x), check()))
  usePu.subscribe((x) => (($usePu = x), check()))
  useKuSuli.subscribe((x) => (($useKuSuli = x), check()))
  useKuLili.subscribe((x) => (($useKuLili = x), check()))
  useNimiSin.subscribe((x) => (($useNimiSin = x), check()))
  useCoreWords.subscribe((x) => (($useCoreWords = x), check()))
  useWidespreadWords.subscribe((x) => (($useWidespreadWords = x), check()))
  useCommonWords.subscribe((x) => (($useCommonWords = x), check()))
  useUncommonWords.subscribe((x) => (($useUncommonWords = x), check()))
  useRareWords.subscribe((x) => (($useRareWords = x), check()))
  useObscureWords.subscribe((x) => (($useObscureWords = x), check()))

  canCheck = true

  check()

  function check() {
    if (!canCheck) {
      return
    }

    if ($filterByLinku) {
      const usage = {
        core: $useCoreWords,
        widespread: $useWidespreadWords,
        common: $useCommonWords,
        uncommon: $useUncommonWords,
        rare: $useRareWords,
        obscure: $useObscureWords,
      }

      set(entries.filter(([, word]) => usage[word.usage]))
    } else {
      const book = {
        pu: $usePu,
        "ku suli": $useKuSuli,
        "ku lili": $useKuLili,
        "nimi sin": $useNimiSin,
      }

      set(entries.filter(([, word]) => book[word.book]))
    }
  }
})
