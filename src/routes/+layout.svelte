<script>
  import { browser } from "$app/environment"
  import { dark, tp } from "$lib/stores"
  import "../app.postcss"

  $: try {
    if (browser) {
      if ($dark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  } catch {}
</script>

<div class="sticky top-0 flex print:hidden">
  <a
    class="sitelen-pona-sized flex w-fit items-center justify-center rounded-br-lg bg-slate-300 px-3 pb-2 pt-1.5 transition hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700"
    href="/"
    aria-label="Go home">tomo</a
  >

  <button
    class="sitelen-pona-sized ml-auto flex w-fit items-center justify-center rounded-bl-lg bg-slate-300 px-3 pb-2 pt-1.5 transition hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700"
    on:click={() => dark.update(($dark) => !$dark)}
    >{$dark ? "walo" : "pimeja"}</button
  >
</div>

<slot />

<div class="mx-auto mt-auto max-w-screen-sm text-center print:hidden">
  <p class="mx-6 mt-6">
    {$tp ? "linja pi sitelen pona li " : "The sitelen pona font used is "}<a
      class="link"
      href="https://www.kreativekorp.com/software/fonts/sitelenselikiwen"
      >sitelen seli kiwen</a
    >.
  </p>

  <p class="mx-6 mt-1">
    <a class="link" href="https://linku.la/">lipu Linku</a>
    {$tp ? "li jo e sona pi nimi ale." : "provides the data of this website."}
  </p>

  <p class="mx-6 mt-1 mb-6">
    {$tp ? "ni li pali tan " : "Compiled by "}<a
      class="link"
      href="https://github.com/zsakowitz"
      >{$tp ? "jan Sakawi" : "Zachary Sakowitz"}</a
    >{$tp ? " li awen ala." : ". Not copyrighted or licensed."}
  </p>
</div>

<button
  class="sitelen-pona-sized fixed bottom-0 right-0 ml-auto flex w-fit items-center justify-center rounded-tl-lg bg-slate-300 px-3 pt-2 transition hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 print:hidden"
  class:pb-1.5={!$tp}
  class:pb-2={$tp}
  on:click={() => tp.update(($tp) => !$tp)}>{$tp ? "ABC" : "toki+pona"}</button
>
