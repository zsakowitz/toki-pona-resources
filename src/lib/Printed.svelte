<script>
  import { tp } from "./stores"
</script>

<div
  class="mx-8 my-4 select-none rounded-lg bg-white px-4 py-3 dark:bg-slate-800 print:hidden"
>
  <slot />

  <p class="mt-2 text-right text-sm text-slate-400">
    {$tp ? "poki ni li len." : "This box will disappear when printing."}
  </p>
</div>
