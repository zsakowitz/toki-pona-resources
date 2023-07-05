<script lang="ts">
  import Checkbox from "./Checkbox.svelte"
  import { showNimiKu, showNimiPu } from "./stores"

  export let allowBothToBeUnchecked = false
</script>

<Checkbox
  bind:checked={$showNimiPu}
  on:input={() => {
    setTimeout(() => {
      if (allowBothToBeUnchecked) {
        return
      }

      if (!$showNimiPu && !$showNimiKu) {
        showNimiKu.set(true)
      }
    })
  }}
  label="Show nimi pu?"
  labelTp="o kepeken ala kepeken nimi pu?"
/>

<Checkbox
  bind:checked={$showNimiKu}
  on:input={() => {
    if (allowBothToBeUnchecked) {
      return
    }

    setTimeout(() => {
      if (!$showNimiPu && !$showNimiKu) {
        showNimiPu.set(true)
      }
    })
  }}
  label="Show nimi ku suli?"
  labelTp="o kepeken ala kepeken nimi ku?"
/>
