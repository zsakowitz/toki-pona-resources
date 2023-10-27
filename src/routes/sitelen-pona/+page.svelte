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
</script>

<Title
  title="sitelen pona cheat sheet"
  titleTp="lipu pi pali lili pi sitelen pona"
/>

<Printed>
  <p class="mb-2">
    This page is rendered using
    <a
      class="link"
      href="https://www.kreativekorp.com/software/fonts/sitelenselikiwen"
      >sitelen seli kiwen</a
    >.
  </p>

  <Checkbox
    bind:checked={$isLarge}
    label="Show larger symbols?"
    labelTp="o ken ala ken lukin e sitelen suli?"
  />

  <Checkbox
    bind:checked={$showDefinitions}
    label="Show definitions?"
    labelTp="o ken ala ken lukin e nimi mute?"
  />

  <Checkbox
    bind:checked={$stackedLayout}
    label="Use stacked layout?"
    labelTp="o nimi lon sewi nimi lon anpa nimi anu seme?"
    disabled={!$showDefinitions}
  />

  <PracticeButton />
</Printed>

<div
  class="grid min-h-full {$isLarge
    ? $showDefinitions
      ? 'grid-cols-[repeat(auto-fill,128px)]'
      : 'grid-cols-[repeat(auto-fill,72px)]'
    : $showDefinitions
    ? 'grid-cols-[repeat(auto-fill,112px)]'
    : 'grid-cols-[repeat(auto-fill,52px)]'} content-start justify-center gap-2 text-center"
  class:gap-y-4={$stackedLayout && $showDefinitions}
>
  {#each $isShuffled ? shuffle($visibleWords) : $visibleWords as [word, info]}
    {#if $stackedLayout && $showDefinitions}
      <div class="flex break-inside-avoid flex-col">
        <div class="flex items-center gap-2">
          <p
            class="sitelen-pona {$isLarge
              ? 'text-[40px]'
              : 'text-[32px]'} [line-height:1]"
            class:invisible={$isPractice}
          >
            {word}
          </p>

          <p
            class="{word.length > 8
              ? 'text-xs hyphens'
              : $isLarge
              ? ''
              : 'text-sm'} font-light"
          >
            {word}
          </p>
        </div>

        {#if $showDefinitions}
          <p
            class="-mt-1 text-left text-xs text-slate-500 hyphens print:text-black"
          >
            {info.short}
          </p>
        {/if}
      </div>
    {:else}
      <div
        class="flex break-inside-avoid flex-col"
        class:col-span-2={!$showDefinitions && word.length >= 9}
      >
        <p
          class="{$isLarge ? '-mb-4' : '-mb-2'} sitelen-pona {$isLarge
            ? 'text-[64px]'
            : 'text-[40px]'}"
          class:invisible={$isPractice}
        >
          {word}
        </p>

        <p class="{$isLarge ? '' : 'text-sm'} font-light">{word}</p>

        {#if $showDefinitions}
          <p class="col-span-2 text-xs text-slate-500 hyphens print:text-black">
            {info.short}
          </p>
        {/if}
      </div>{/if}
  {/each}
</div>
