<script lang="ts">
  import Baseliner from './lib/Baseliner.svelte'
  import Ruler from './lib/Ruler.svelte'
</script>

<main class="font-sans p-4">
  <Baseliner />
  <Ruler />

  <div class="max-w-3xl mx-auto mt-12">
    <div class="flex">
      <div class="w-md mt-6">
        <div
          class="text-xs tracking-widest font-medium uppercase leading-loose text-gray-500"
        >
          Typescale
        </div>
        <div class="text-h1 font-semibold dark:text-gray-50">
          Your digital transformation begins here
        </div>

        <div class="text-base font-medium leading-relaxed mt-4 text-gray-500">
          Unlock the full potential of your business. Start your journey today
          and experience the future of business software.
        </div>

        <!-- two buttons -->
        <div class="flex gap-4 mt-4">
          <div class="button regular">Explore features</div>
          <div class="button regular">Get started</div>
        </div>
      </div>
      <div class="w-md">
        <div
          class="text-c2 tracking-widest font-medium uppercase baseline-7 text-gray-500"
        >
          Typescale
        </div>
        <div class="text-x6 font-semibold baseline-13 dark:text-gray-50">
          Your digital transformation begins here
        </div>

        <div class="text-x2 font-medium baseline-7 mt-4 text-gray-500">
          Unlock the full potential of your business. Start your journey today
          and experience the future of business software.
        </div>

        <!-- two buttons -->
        <div class="flex gap-4 mt-6">
          <div class="button baselined">Explore features</div>
          <div class="button baselined">Get started</div>
        </div>
      </div>
    </div>

    <!-- test -->
    <div class="hidden">
      <div class="text-gray-100 dark:text-gray-900 mt-12">
        <div class="text-x8 baseline-14">the quick brown fox</div>
        <div class="text-x7 baseline-13">jumps over the lazy dog</div>
        <div class="text-x6 baseline-12">pack my box with five dozen</div>
        <div class="text-x5 baseline-9">how vexingly quick daft zebras</div>
        <div class="text-x4 baseline-8">
          sphinx of black quartz judge my vow
        </div>
        <div class="text-x3 baseline-7">
          two driven jocks help fax my big quiz
        </div>
        <div class="text-x2 baseline-5">
          five quacking zephyrs jolt my wax bed
        </div>
      </div>

      <div class="uppercase text-gray-100 dark:text-gray-900">
        <div class="text-c8 baseline-13">the quick brown fox</div>
        <div class="text-c7 baseline-11">jumps over the lazy dog</div>
        <div class="text-c6 baseline-10">pack my box with five dozen</div>
        <div class="text-c5 baseline-8">how vexingly quick daft zebras</div>
        <div class="text-c4 baseline-7">
          sphinx of black quartz judge my vow
        </div>
        <div class="text-c3 baseline-6">
          two driven jocks help fax my big quiz
        </div>
        <div class="text-c2 baseline-5">
          five quacking zephyrs jolt my wax bed
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="postcss">
  :global(body) {
    @apply m-0 p-0 dark:bg-gray-950 dark:text-white h-full;
  }
  :global(:root) {
    @apply dark:bg-gray-950 dark:text-white h-full;
  }

  .button {
    @apply px-4 rounded-full cursor-pointer;
    @apply bg-gray-100 hover:bg-gray-200;
    @apply dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white;
  }

  .button.regular {
    @apply text-base font-medium py-3;
  }

  .button.baselined {
    @apply text-x2 font-medium baseline-6;
  }
</style>
