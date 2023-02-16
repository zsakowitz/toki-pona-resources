<script lang="ts">
  import {
    faBook,
    faImage,
    faImages,
    faMousePointer,
    faPrint,
    faVideo,
  } from "@fortawesome/free-solid-svg-icons"
  import Fa from "./Fa.svelte"
  import { tp } from "./stores"

  export let description: string
  export let descriptionTp: string
  export let href: string
  export let hrefLabel: string
  export let imageAlt: string
  export let imageSrc: string
  export let title: string
  export let titleTp: string

  export let contain = false
  export let pad = false
  export let type:
    | "article-series"
    | "image"
    | "image-series"
    | "interactive"
    | "print"
    | "video"
    | undefined = undefined
  export let white = false
</script>

<div class="relative max-w-full py-1 hover:z-10">
  <a
    {href}
    class="group peer flex h-16 w-96 min-w-72 max-w-full flex-1 rounded-md px-4 py-2 outline-none ring-0 ring-blue-500 transition hover:bg-white focus-visible:ring-2 dark:hover:bg-slate-800"
  >
    <img
      class="-my-3 mr-3 -ml-4 h-18 w-18 rounded-md object-top transition-all group-hover:scale-125 group-hover:shadow-[0_0_6px_-2px_rgba(0_0_0_/_0.5)]"
      class:bg-white={white}
      class:object-contain={contain}
      class:object-cover={!contain}
      class:p-2={pad}
      src={imageSrc}
      alt={imageAlt}
    />

    <div class="flex flex-1 flex-col justify-center">
      <p>{$tp ? titleTp : title}</p>
      <p class="text-sm text-slate-400">{hrefLabel}</p>
    </div>

    {#if type == "article-series"}
      <Fa class="-mr-2 h-4 w-4 text-green-400" icon={faBook} />
    {:else if type == "image"}
      <Fa class="-mr-2 h-4 w-4 text-orange-400" icon={faImage} />
    {:else if type == "image-series"}
      <Fa class="-mr-2 h-4 w-4 text-orange-400" icon={faImages} />
    {:else if type == "interactive"}
      <Fa class="-mr-2 h-4 w-4 text-blue-400" icon={faMousePointer} />
    {:else if type == "video"}
      <Fa class="-mr-2 h-4 w-4 text-red-400" icon={faVideo} />
    {:else if type == "print"}
      <Fa class="-mr-2 h-4 w-4 text-purple-400" icon={faPrint} />
    {/if}
  </a>

  <div
    class="card-description pointer-events-none absolute -right-2 -left-[1.125rem] -bottom-3 z-10 translate-y-[calc(100%_-_1rem)] rounded-md bg-slate-100 px-3 py-2 opacity-0 outline outline-2 outline-slate-100 backdrop-blur-lg transition before:absolute before:left-1/2 before:top-0 before:h-3 before:w-6 before:-translate-x-1/2 before:-translate-y-full before:bg-slate-100 before:transition before:content-['_'] before:clip-triangle-top peer-hover:translate-y-full peer-hover:bg-white peer-hover:opacity-100 peer-hover:before:bg-white dark:bg-slate-900 dark:outline-slate-900 dark:before:bg-slate-900 dark:peer-hover:bg-slate-800/80 dark:peer-hover:before:bg-slate-800/80"
  >
    {#if $tp}
      <slot name="description-tp">
        {descriptionTp}
      </slot>
    {:else}
      <slot name="description">
        {description}
      </slot>
    {/if}
  </div>
</div>

<style lang="postcss" global>
  .card-description ul {
    @apply ml-6 mt-1 list-disc;
  }

  .card-description ::marker {
    @apply text-slate-400 dark:text-slate-500;
  }
</style>
