<script lang="ts">
  import { tp } from "./stores"

  export let title: string
  export let titleTp: string
</script>

<svelte:head>
  <title>{$tp ? titleTp : title}</title>
</svelte:head>

<h1 class="text-center text-lg font-light print:hidden">
  {$tp ? titleTp : title}
</h1>
