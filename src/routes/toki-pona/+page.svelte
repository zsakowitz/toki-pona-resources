<script lang="ts">
  import Checkbox from "$lib/Checkbox.svelte"
  import PracticeButton from "$lib/PracticeButton.svelte"
  import Title from "$lib/Title.svelte"
  import { shuffle } from "$lib/shuffle"
  import {
    isLarge,
    isPractice,
    isShuffled,
    showDefinitions,
    visibleWords,
  } from "$lib/stores"
  import Printed from "../../lib/Printed.svelte"

  $: finalizedWordList = $isShuffled ? shuffle($visibleWords) : $visibleWords
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

  <PracticeButton />
</Printed>

<div
  class="{$isLarge || $showDefinitions
    ? 'columns-3'
    : 'columns-4'} relative left-2 [column-gap:0]"
>
  {#each finalizedWordList as [word, info]}
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
        {$isPractice
          ? "QQQQ"
          : word.length >= 8
          ? word.slice(0, 7) + "..."
          : word}
      </p>

      <p
        class="{$isLarge
          ? 'text-sm'
          : 'text-xs'} text-slate-500 print:text-black"
      >
        {$showDefinitions ? info.definition : info.short}
      </p>
    </div>
  {/each}
</div>
