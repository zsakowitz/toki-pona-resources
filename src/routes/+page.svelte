<script>
  import Title from "$lib/Title.svelte"
  import janPepaEnSoweliKawa from "../assets/jan-pepa-en-soweli-kawa.png"
  import lipuKu from "../assets/lipu-ku.jpg"
  import lipuLawaPiEsunKama from "../assets/lipu-lawa-pi-esun-kama.png"
  import lipuPu from "../assets/lipu-pu.jpg"
  import lipuTenpo from "../assets/lipu-tenpo.png"
  import nasinNasa from "../assets/nasin-nasa.jpg"
  import oKamaSonaESitelenPona from "../assets/o-kama-sona-e-sitelen-pona.jpg"
  import sitelenPonaSmall from "../assets/sitelen-pona-small.png"
  import sitelenSitelenCheatSheet from "../assets/sitelen-sitelen-cheat.png"
  import sitelenSitelen from "../assets/sitelen-sitelen-main.png"
  import sitelenSitelenRenderer from "../assets/sitelen-sitelen-renderer.png"
  import sonaPonaLogo from "../assets/sona-pona.png"
  import tokiPonaCheatSheet from "../assets/toki-pona-cheat.png"
  import tokiPonaLogo from "../assets/toki-pona.svg"
  import Card from "../lib/Card.svelte"
  import Section from "../lib/Section.svelte"
</script>

<div class="mx-3 flex flex-1 flex-col md:px-4 lg:px-6">
  <Title title="toki pona resources" titleTp="lipu mute pi toki pona" />

  <div class="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2">
    <Card
      contain
      description="The original toki pona website, with links to many other resources."
      descriptionTp="lipu pi toki pona. ona jo e lipu ante mute."
      href="https://tokipona.org"
      hrefLabel="tokipona.org"
      imageAlt="A yellow circle with a blue border and blue 'smiling' semicircle inside. Above the yellow circle are three blue strokes perpendicular to the edge of the yellow circle."
      imageSrc={tokiPonaLogo}
      pad
      title="Official toki pona website"
      titleTp="lipu pi toki pona"
      white
    />

    <Card
      description="Resources recommended by the 'kama sona' Discord server to aid with learning."
      descriptionTp="lipu pi kama sona."
      href="https://sona.pona.la/wiki/Toki_Pona_Learning_Resources"
      hrefLabel="sona.pona.la"
      imageAlt="Six bright yellow hexagons arranged around a darker yellow one with a white background."
      imageSrc={sonaPonaLogo}
      pad
      title="All learning resources"
      titleTp="lipu sona mute"
      white
    />
  </div>

  <div class="mt-2 flex flex-wrap justify-center gap-x-8 gap-y-2">
    <Card
      description="The official toki pona book."
      descriptionTp="lipu lawa pi toki pona"
      href="https://www.amazon.com/gp/product/0978292308"
      hrefLabel="amazon.com"
      imageAlt="A white background. At the center, a yellow circle with a blue border and blue 'smiling' semicircle inside. Above the yellow circle are three blue strokes perpendicular to the edge of the yellow circle. A heading reading 'Toki Pona' with a subheading below it reading 'The Language of Good' are present at the top of the image. At the bottom, 'Sonja Lang' is captioned as the author."
      imageSrc={lipuPu}
      title="Toki Pona: The Language of Good"
      titleTp="pu"
    />

    <Card
      description="An official dictionary containing two-way English to toki pona translations."
      descriptionTp="lipu ni: ona li jo e nimi pi toki Inli e nimi pi toki pona."
      href="https://www.amazon.com/dp/0978292367/"
      hrefLabel="amazon.com"
      imageAlt="The text 'toki pona' is in blue at the top left. Below it reads 'dictionary' in yellow. To the right of it all is a shirt with the toki pona logo on it."
      imageSrc={lipuKu}
      title="Toki Pona Dictionary"
      titleTp="ku"
    />
  </div>

  <div
    class="mx-auto mt-8 grid w-[76rem] max-w-full grid-cols-[repeat(auto-fill,min(24rem,100%))] justify-center gap-8"
  >
    <Section title="toki pona" titleTp="toki pona pi sitelen Lasina">
      <Card
        description="A printable cheat sheet labeling every toki pona word with its corresponding definition."
        descriptionTp="lipu ni: ona jo e nimi ale pi toki pona e toki pi nimi ni."
        href="/toki-pona"
        hrefLabel=""
        imageAlt="The toki pona words 'lape', 'laso', 'lawa', 'leko', and 'len' next to their definitions."
        imageSrc={tokiPonaCheatSheet}
        title="Cheat sheet"
        titleTp="lipu pi pali lili"
        type="print"
      />

      <Card
        description="A newsletter about all kinds of things written in pure toki pona."
        descriptionTp="lipu tenpo ni: ona li jo e sitelen pi toki pona."
        href="https://liputenpo.org/"
        hrefLabel="liputenpo.org"
        imageAlt="A yellow square with a blue square in its top right. Both have black borders."
        imageSrc={lipuTenpo}
        title="lipu tenpo: a newsletter"
        titleTp="lipu tenpo"
        type="article-series"
      />

      <Card
        description="A multilingual comic about the adventures of Pepper and Carrot."
        descriptionTp="lipu sitelen ni: ona li jo e tawa pi jan Pepa en soweli Kawa."
        href="https://www.peppercarrot.com/tp/"
        hrefLabel="peppercarrot.com"
        imageAlt="A yellow square with a blue square in its top right. Both have black borders."
        imageSrc={janPepaEnSoweliKawa}
        title="jan Pepa en soweli Kawa"
        titleTp="jan Pepa en soweli Kawa"
        type="image-series"
      />
    </Section>

    <Section title="sitelen pona (iconographic script)" titleTp="sitelen pona">
      <Card
        description="A printable cheat sheet labeling every sitelen pona glyph with its corresponding word."
        descriptionTp="lipu ni: ona jo e sitelen pona e toki pona."
        href="/sitelen-pona"
        hrefLabel=""
        imageAlt="The sitelen pona glyphs for len, lete, moli, and monsi."
        imageSrc={sitelenPonaSmall}
        title="Cheat sheet"
        titleTp="lipu pi pali lili"
        type="print"
      />

      <Card
        description="A series introducing sitelen pona in 13 short videos."
        descriptionTp="sitelen tawa mute ni: ona li kama e sitelen pona tawa sina."
        href="https://www.youtube.com/watch?v=Uze2LKVN-2E&list=PLJjeLfR6etE69KRFWQB1guBjfWIw8NN75&index=1"
        hrefLabel="youtube.com @ musi lili"
        imageAlt="TODO"
        imageSrc={oKamaSonaESitelenPona}
        title="Introductory video series"
        titleTp="sitelen tawa mute kama"
        type="video"
      />
    </Section>

    <Section
      title="sitelen sitelen (hieroglyphic script)"
      titleTp="sitelen sitelen"
    >
      <Card
        description="A printable cheat sheet labeling every sitelen sitelen glyph with its corresponding word."
        descriptionTp="lipu ni: ona jo e sitelen sitelen e toki pona."
        href="/sitelen-sitelen"
        hrefLabel=""
        imageAlt="lanpan"
        imageSrc={sitelenSitelenCheatSheet}
        title="Cheat sheet"
        titleTp="lipu pi pali lili"
        type="print"
      />

      <Card
        description=""
        descriptionTp=""
        href="https://jonathangabel.com/toki-pona/"
        hrefLabel="jonathangabel.com"
        imageAlt="tenpo pimeja la seli suno li weka. mun laso li kama lon. anpa kasi jelo la soweli pimeja li alasa e pipi loje. waso walo li lon kasi suli. oko jelo ona li lukin e waso lili. waso lili li kule ma. oko ona li pini. waso lili o lape pona."
        imageSrc={sitelenSitelen}
        title="Jonathan Gabel's articles"
        titleTp="lipu pi jan Jonatan"
        type="article-series"
      >
        <svelte:fragment slot="description">
          <p>A website by the creator of sitelen sitelen with</p>

          <ul>
            <li>16 short articles introducing sitelen sitelen,</li>
            <li>examples of sentences and paragraphs, and</li>
            <li>links to other resources.</li>
          </ul>
        </svelte:fragment>

        <svelte:fragment slot="description-tp">
          <p>lipu pi tan ni: ona li pali e sitelen sitelen. ona li jo</p>

          <ul>
            <li>e lipu ni: ona li kama e sitelen sitelen tawa sina;</li>
            <li>e toki mute e toki mute suli;</li>
            <li>e lipu ante.</li>
          </ul>
        </svelte:fragment>
      </Card>

      <Card
        description="A live renderer that converts toki pona text into sitelen sitelen."
        descriptionTp="sitelen ni: ona li sitelen pi tenpo ni e sitelen sitelen."
        href="http://livingtokipona.smoishele.com/examples/liveinput/liveinput.html"
        hrefLabel="livingtokipona.smoishele.com"
        imageAlt="mi toki e toki pona kepeken uta mi."
        imageSrc={sitelenSitelenRenderer}
        title="Live renderer"
        titleTp="sitelen pi tenpo ni"
        type="interactive"
      />

      <Card
        description="&quot;A weird comic about weird creatures acting weird in a weird place. Also the first comic series ever fully in hieroglyphic toki pona.&quot;"
        descriptionTp="lipu sitelen nasa ni: ona li jo e soweli nasa pi pali nasa lon lon nasa. lipu sitelen nanpa wan ni: ona li sitelen e sitelen sitelen."
        href="https://tapas.io/series/Nasin-Nasa/info"
        hrefLabel="tapas.io @ Nasin Nasa"
        imageAlt="The front cover of nasin nasa."
        imageSrc={nasinNasa}
        title="Nasin Nasa, a comic"
        titleTp="lipu sitelen Nasin Nasa"
        type="image-series"
      />

      <Card
        description="A contract written in sitelen sitelen."
        descriptionTp="lipu lawa pi esun kama ni: ona li sitelen e sitelen sitelen."
        href="https://jonathangabel.com/2012/lipu-lawa-pi-esun-kama/"
        hrefLabel="jonathangabel.com"
        imageAlt="mi toki e toki pona kepeken uta mi."
        imageSrc={lipuLawaPiEsunKama}
        title="A business contract"
        titleTp="lipu lawa pi esun kama"
        type="image"
      />
    </Section>
  </div>
</div>
