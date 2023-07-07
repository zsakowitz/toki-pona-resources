<script lang="ts">
  import Checkbox from "./Checkbox.svelte"
  import {
    filterByLinku,
    tp,
    useCommonWords,
    useCoreWords,
    useKuLili,
    useKuSuli,
    useNimiSin,
    useObscureWords,
    usePu,
    useRareWords,
    useUncommonWords,
    useWidespreadWords,
  } from "./stores"
</script>

<div
  class="mx-8 my-4 select-none grid-cols-2 gap-x-8 rounded-lg bg-white px-4 py-3 dark:bg-slate-800 print:hidden sm:grid"
>
  <div>
    <slot />
  </div>

  <div>
    <Checkbox
      bind:checked={$filterByLinku}
      label="Filter using linku.la data?"
      labelTp="o len e nimi kepeken sona pi lipu linku?"
    />

    {#if $filterByLinku}
      <Checkbox
        bind:checked={$useCoreWords}
        label="Show core words?"
        labelTp="o lukin ala lukin e nimi pi suli mute?"
      />

      <Checkbox
        bind:checked={$useWidespreadWords}
        label="Show widespread words?"
        labelTp="o lukin ala lukin e nimi suli?"
      />

      <Checkbox
        bind:checked={$useCommonWords}
        label="Show common words?"
        labelTp="o lukin ala lukin e nimi pi suli pi mute ala?"
      />

      <Checkbox
        bind:checked={$useUncommonWords}
        label="Show uncommon words?"
        labelTp="o lukin ala lukin e nimi pi lili pi mute ala?"
      />

      <Checkbox
        bind:checked={$useRareWords}
        label="Show rare words?"
        labelTp="o lukin ala lukin e nimi lili?"
      />

      <Checkbox
        bind:checked={$useObscureWords}
        label="Show obscure words?"
        labelTp="o lukin ala lukin e nimi pi lili mute?"
      />
    {:else}
      <Checkbox
        bind:checked={$usePu}
        label="Show nimi pu?"
        labelTp="o lukin ala lukin e nimi pu?"
      />

      <Checkbox
        bind:checked={$useKuSuli}
        label="Show nimi ku suli?"
        labelTp="o lukin ala lukin e nimi ku suli?"
      />

      <Checkbox
        bind:checked={$useKuLili}
        label="Show nimi ku lili?"
        labelTp="o lukin ala lukin e nimi ku lili?"
      />

      <Checkbox
        bind:checked={$useNimiSin}
        label="Show nimi sin?"
        labelTp="o lukin ala lukin e nimi sin?"
      />
    {/if}
  </div>

  <p class="col-span-2 mt-2 text-right text-sm text-slate-400">
    {$tp
      ? "lipu ni li lon ma la poki ni li len."
      : "This box will disappear when printing."}
  </p>
</div>
