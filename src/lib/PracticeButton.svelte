<script>
  import Checkbox from "./Checkbox.svelte"
  import { isPractice, isShuffled, tp } from "./stores"

  $: if ($isPractice) {
    isShuffled.set(true)
  }
</script>

<Checkbox
  bind:checked={$isPractice}
  label="Create a practice sheet?"
  labelTp="o pali ala pali e lipu pi sitelen ala?"
/>

<div class="flex flex-wrap gap-x-4">
  <Checkbox
    bind:checked={$isShuffled}
    label="Shuffle items?"
    labelTp="o pali ala pali e nasin ala?"
  />

  {#if $isShuffled}
    <button
      class="link ml-auto"
      on:click={() => {
        isShuffled.set(false)
        isShuffled.set(true)
      }}>{$tp ? "o pana e nasin ala." : "Reshuffle"}</button
    >
  {/if}
</div>
