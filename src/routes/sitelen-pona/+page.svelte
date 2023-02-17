<script lang="ts">
  import Checkbox from "$lib/Checkbox.svelte"
  import PracticeButton from "$lib/PracticeButton.svelte"
  import { shuffle } from "$lib/shuffle"
  import { isLarge, isPractice, isShuffled } from "$lib/stores"
  import Title from "$lib/Title.svelte"
  import Printed from "../../lib/Printed.svelte"

  let words =
    "a akesi ala alasa ale anpa ante anu awen e en epiku esun ijo ike ilo insa jaki jan jasima jelo jo kala kalama kama kasi ken kepeken kijetesantakalu kili kin kipisi kiwen ko kokosila kon ku kule kulupu kute la lanpan lape laso lawa leko len lete li lili linja lipu loje lon luka lukin lupa ma mama mani meli meso mi mije misikeke moku moli monsi monsuta mu mun musi mute n namako nanpa nasa nasin nena ni nimi noka o oko olin ona open pakala pali palisa pan pana pi pilin pimeja pini pipi poka poki pona pu sama seli selo seme sewi sijelo sike sin sina sinpin sitelen soko sona soweli suli suno supa suwi tan taso tawa telo tenpo toki tomo tonsi tu unpa uta utala walo wan waso wawa weka wile".split(
      " "
    )
</script>

<Title
  title="sitelen pona cheat sheet"
  titleTp="lipu pi pali lili pi sitelen pona"
/>

<Printed>
  <p class="mb-2">
    This page is rendered using
    <a class="link" href="https://wyub.github.io/tokipona/linjasike"
      >linja sike</a
    >.
  </p>

  <Checkbox
    bind:checked={$isLarge}
    label="Show larger symbols?"
    labelTp="o ken ala ken lukin e sitelen suli?"
  />

  <PracticeButton />
</Printed>

<div
  class="grid min-h-full {$isLarge
    ? 'grid-cols-[repeat(auto-fill,72px)]'
    : 'grid-cols-[repeat(auto-fill,52px)]'} content-start justify-center gap-2 text-center"
>
  {#each $isShuffled ? shuffle(words) : words as word}
    <div
      class="flex break-inside-avoid flex-col"
      class:col-span-2={word == "kijetesantakalu"}
    >
      <p
        class="{$isLarge
          ? '-mb-4'
          : '-mb-2'} font-['linja_sike',sans-serif] {$isLarge
          ? 'text-[64px]'
          : 'text-[40px]'}"
        class:invisible={$isPractice}
      >
        {word}
      </p>

      <p class="{$isLarge ? '' : 'text-sm'} font-light">{word}</p>
    </div>
  {/each}
</div>
