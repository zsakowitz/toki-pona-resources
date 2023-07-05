<script lang="ts">
  import { browser } from "$app/environment"
  import { tp } from "./stores"

  export let checked: boolean
  export let label: string
  export let labelTp: string
</script>

<label class="block">
  <input
    bind:checked
    on:input
    class="mr-1 border"
    disabled={!browser}
    type="checkbox"
  />

  {$tp ? labelTp : label}
</label>
