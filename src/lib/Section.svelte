<script lang="ts">
  import { tp } from "./stores"

  export let title: string
  export let titleTp: string
</script>

<div class="flex flex-col gap-2">
  <h2 class="text-center text-lg font-light">{$tp ? titleTp : title}</h2>

  <slot />
</div>
