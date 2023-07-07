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
    stackedLayout,
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

  <Checkbox
    bind:checked={$stackedLayout}
    label="Use stacked layout?"
    labelTp="o nimi lon sewi nimi lon anpa nimi anu seme?"
  />

  <PracticeButton />
</Printed>

<div
  class="{$isLarge || $showDefinitions
    ? $stackedLayout
      ? 'columns-4'
      : 'columns-3'
    : 'columns-4'} relative left-2 [column-gap:0]"
>
  {#each finalizedWordList as [word, info]}
    <div
      class="break-inside-avoid items-baseline gap-2"
      class:grid={!$stackedLayout}
      class:grid-cols-[3rem,auto]={!$stackedLayout &&
        !($isLarge || $showDefinitions)}
      class:grid-cols-[4rem,auto]={!$stackedLayout &&
        ($isLarge || $showDefinitions)}
    >
      <p
        class="{$stackedLayout
          ? ''
          : $isLarge || $showDefinitions
          ? 'my-1 text-right'
          : 'relative -left-4 w-16 text-right'} font-semibold decoration-black underline-offset-2"
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
        class="{$isLarge ? 'text-sm' : 'text-xs'} {$stackedLayout
          ? 'relative left-4 w-[calc(100%_-_1rem)]'
          : ''} text-slate-500 print:text-black"
      >
        {$showDefinitions ? info.definition : info.short}
      </p>
    </div>
  {/each}
</div>
