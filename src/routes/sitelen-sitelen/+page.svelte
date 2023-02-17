<script lang="ts">
  import Checkbox from "$lib/Checkbox.svelte"
  import PracticeButton from "$lib/PracticeButton.svelte"
  import { shuffle } from "$lib/shuffle"
  import { isPractice, isShuffled, tp } from "$lib/stores"
  import Title from "$lib/Title.svelte"
  import { persisted } from "svelte-local-storage-store"
  import Printed from "../../lib/Printed.svelte"

  const showWords = persisted("sitelen-sitelen:show-words", true)
  const showPunctuation = persisted("sitelen-sitelen:show-punctuation", true)
  const showSyllables = persisted("sitelen-sitelen:show-syllables", true)

  let nimi_mute: [string, string][] =
    "a akesi ala alasa ale anpa ante anu awen e en epiku esun ijo ike ilo insa jaki jan jasima jelo jo kala kalama kama kasi ken kepeken kijetesantakalu kili kin kipisi kiwen ko kokosila kon kule kulupu kute la lanpan lape laso lawa leko len lete li lili linja lipu loje lon luka lukin lupa ma mama mama_old mani meli meso mi mije misikeke moku moli monsi monsuta mu mun musi mute n namako nanpa nasa nasin nena ni nimi noka o oko olin ona open pakala pali palisa pan pana pi pilin pimeja pini pipi poka poki pona sama seli selo seme sewi sijelo sike sin sina sinpin sitelen soko sona soweli suli suno supa suwi tan taso tawa telo tenpo toki tomo tonsi tu unpa uta utala walo wan waso wawa weka wile"
      .split(" ")
      .map((nimi) => [
        nimi == "mama_old" ? "mama (old)" : nimi,
        `https://jonathangabel.com/images/t47_tokipona/nimi/t47_nimi_${
          nimi == "misikeke" ? "misekeke" : nimi
        }.jpg`,
      ])

  let nmpi_mute: [string, string][] = [
    ["[.]", "period"],
    ["[,]", "comma"],
    ["[!]", "exclamation"],
    ["[?]", "question"],
    ["[:]", "colon"],
    ["[cartouche]", "cartouche"],
    ["[capsule]", "capsule"],
  ].map(([symbol, name]) => [
    symbol,
    `https://jonathangabel.com/images/t47_tokipona/nimi/t47_nmpi_${name}.jpg`,
  ])

  let kala_lili_mute: [string, string][] =
    "-- j- k- l- m- n- p- s- t- w- -a -e -i -o -u -n"
      .split(" ")
      .map((x) => [
        x,
        `https://jonathangabel.com/images/t47_tokipona/kalalili/t47_kalalili_x${x
          .replace("--", "x")
          .replace("-n", "xn")
          .replace("-", "")}.jpg`,
      ])

  $: words = [
    ...($showWords ? nimi_mute : []),
    ...($showPunctuation ? nmpi_mute : []),
    ...($showSyllables ? kala_lili_mute : []),
  ]
</script>

<Title
  title="sitelen sitelen cheat sheet"
  titleTp="lipu pi pali lili pi sitelen sitelen"
/>

<Printed>
  <p class="mb-2">
    {$tp ? "sitelen sitelen tan " : "These glyphs are taken from "}<a
      class="link"
      href="https://jonathangabel.com/toki-pona/dictionaries/glyphs/"
      >{$tp ? "lipu pi jan Jonatan" : "Jonathan Gabel's website"}</a
    >.
  </p>

  <Checkbox
    bind:checked={$showWords}
    label="Show words?"
    labelTp="o ken lukin e nimi mute?"
  />

  <Checkbox
    bind:checked={$showPunctuation}
    label="Show punctuation?"
    labelTp="o ken lukin e sitelen pini?"
  />

  <Checkbox
    bind:checked={$showSyllables}
    label="Show syllables?"
    labelTp="o ken lukin e kalama nimi lili?"
  />

  <PracticeButton />
</Printed>

<div
  class="mt-4 grid min-h-full grid-cols-[repeat(auto-fill,72px)] content-start justify-center gap-x-2 gap-y-3 text-center"
>
  {#each $isShuffled ? shuffle(words) : words as [word, src]}
    <div
      class="flex break-inside-avoid flex-col items-center"
      class:col-span-2={word == "kijetesantakalu"}
    >
      <div
        role="img"
        aria-label="sitelen sitelen glyph for {word}"
        class="bg mb-1 h-16 w-16 bg-contain bg-bottom bg-no-repeat bg-blend-darken dark:bg-[rgb(240_232_210)] dark:invert print:hidden"
        class:invisible={$isPractice}
        style:background-image="url({src})"
      />

      <img
        aria-hidden="true"
        alt="sitelen sitelen glyph for {word}"
        class="bg mb-1 hidden h-16 w-16 bg-contain object-contain object-bottom print:block"
        class:invisible={$isPractice}
        {src}
      />

      <p class="whitespace-nowrap font-light">{word}</p>
    </div>
  {/each}
</div>
