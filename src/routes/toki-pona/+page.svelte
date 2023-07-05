<script lang="ts">
  import Checkbox from "$lib/Checkbox.svelte"
  import PracticeButton from "$lib/PracticeButton.svelte"
  import Title from "$lib/Title.svelte"
  import WordTypeCheckbox from "$lib/WordTypeCheckbox.svelte"
  import { shuffle } from "$lib/shuffle"
  import {
    isLarge,
    isPractice,
    isShuffled,
    showDefinitions,
    showNimiKu,
    showNimiPu,
  } from "$lib/stores"
  import { words } from "virtual:linku"
  import Printed from "../../lib/Printed.svelte"

  const nimiPu =
    "a akesi ala alasa ale anpa ante anu awen e en esun ijo ike ilo insa jaki jan jelo jo kala kalama kama kasi ken kepeken kili kiwen ko kon kule kulupu kute la lape laso lawa len lete li lili linja lipu loje lon luka lukin lupa ma mama mani meli mi mije moku moli monsi mu mun musi mute nanpa nasa nasin nena ni nimi noka o olin ona open pakala pali palisa pan pana pi pilin pimeja pini pipi poka poki pona pu sama seli selo seme sewi sijelo sike sin sina sinpin sitelen sona soweli suli suno supa suwi tan taso tawa telo tenpo toki tomo tu unpa uta utala walo wan waso wawa weka wile".split(
      " "
    )

  const nimiKu =
    "epiku jasima kijetesantakalu kin kipisi kokosila ku lanpan leko meso misikeke monsuta n namako oko soko tonsi yupekosi".split(
      " "
    )

  $: wordList = [
    ...($showNimiPu || !$showNimiKu ? nimiPu : []),
    ...($showNimiKu ? nimiKu : []),
  ].sort()

  $: finalizedWordList = $isShuffled ? shuffle(wordList) : wordList
</script>

<Title title="toki pona cheat sheet" titleTp="lipu pi pali lili pi toki pona" />

<Printed>
  <Checkbox
    bind:checked={$isLarge}
    label="Show larger words?"
    labelTp="o ken ala ken lukin e nimi suli?"
  />

  <Checkbox
    bind:checked={$showDefinitions}
    label="Show full definitions?"
    labelTp="o ken ala ken lukin e toki pi nimi ale?"
  />

  <WordTypeCheckbox />

  <PracticeButton />
</Printed>

<div
  class="{$isLarge || $showDefinitions
    ? 'columns-3'
    : 'columns-4'} relative left-2 [column-gap:0]"
>
  {#each finalizedWordList as word}
    <div
      class="grid break-inside-avoid items-baseline gap-2"
      class:grid-cols-[3rem,auto]={!($isLarge || $showDefinitions)}
      class:grid-cols-[4rem,auto]={$isLarge || $showDefinitions}
    >
      <p
        class="{$isLarge || $showDefinitions
          ? 'my-1'
          : '-left-4 w-16'} relative text-right font-semibold decoration-black underline-offset-2"
        class:underline={$isPractice}
        class:text-transparent={$isPractice}
        class:text-sm={!$isLarge}
      >
        {$isPractice ? "QQQQ" : word == "kijetesantakalu" ? "kijete..." : word}
      </p>

      <p
        class="{$isLarge
          ? 'text-sm'
          : 'text-xs'} text-slate-500 print:text-black"
      >
        {$showDefinitions ? words[word]?.definition : words[word]?.short}
      </p>
    </div>
  {/each}
</div>
