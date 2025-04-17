<script lang="ts">
  import { onMount } from 'svelte';
  import { accent, lightFlavor, darkFlavor, type Accent, type Flavor } from '../stores/theme';

  const flavorOptions: { value: Flavor; label: string }[] = [
    {
      value: 'latte',
      label: 'latte'
    },
    {
      value: 'frappe',
      label: 'frappe'
    },
    {
      value: 'macchiato',
      label: 'macchiato'
    },
    {
      value: 'mocha',
      label: 'mocha'
    }
  ];

  const accentOptions: { value: Accent; label: string }[] = [
    {
      value: 'rosewater',
      label: 'rosewater'
    },
    {
      value: 'flamingo',
      label: 'flamingo'
    },
    {
      value: 'pink',
      label: 'pink'
    },
    {
      value: 'mauve',
      label: 'mauve'
    },
    {
      value: 'red',
      label: 'red'
    },
    {
      value: 'maroon',
      label: 'maroon'
    },
    {
      value: 'peach',
      label: 'peach'
    },
    {
      value: 'yellow',
      label: 'yellow'
    },
    {
      value: 'green',
      label: 'green'
    },
    {
      value: 'teal',
      label: 'teal'
    },
    {
      value: 'sky',
      label: 'sky'
    },
    {
      value: 'sapphire',
      label: 'sapphire'
    },
    {
      value: 'blue',
      label: 'blue'
    },
    {
      value: 'lavender',
      label: 'lavender'
    },
  ];

  let loading = $state(true);

  onMount(() => {
    loading = false
  })

  function setAccent(ev: Event) {
    const selectedAccent = (ev.target as HTMLSelectElement).value as Accent;
    accent.set(selectedAccent)
  }

  function setLightFlavor(ev: Event) {
    const selectedFlavor = (ev.target as HTMLSelectElement).value as Flavor;
    lightFlavor.set(selectedFlavor)
  }

  function setDarkFlavor(ev: Event) {
    const selectedFlavor = (ev.target as HTMLSelectElement).value as Flavor;
    darkFlavor.set(selectedFlavor)
  }
</script>

<div class="theme-switcher elevated-card" class:loading={loading}>
  <noscript>You need JavaScript to customize the theme.</noscript>
  <label for="accent-selector">
    Accent colour
    <select name="accent-selector" id="accent-selector" value={$accent} onchange={setAccent}>
        {#each accentOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
    </select>
  </label>

  <label for="light-flavor-selector">
    Light flavor
    <select name="light-flavor-selector" id="light-flavor-selector" value={$lightFlavor} onchange={setLightFlavor}>
        {#each flavorOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
    </select>
  </label>

  <label for="dark-flavor-selector">
    Dark flavor
    <select name="dark-flavor-selector" id="dark-flavor-selector" value={$darkFlavor} onchange={setDarkFlavor}>
        {#each flavorOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
    </select>
  </label>
</div>

<style>
  .theme-switcher {
    --elevation: 3;
    display: flex;
    flex-wrap: wrap;
    gap: calc(0.5rem * var(--space));
    & > * {
      transition: 300ms filter;
    }
  }

  .loading > *:not(noscript) {
    will-change: filter;
    filter: blur(6px);
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    gap: calc(1rem * var(--space));
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .theme-switcher {
      flex-direction: column;
      position: absolute;
      inset-block-start: calc(1rem * var(--pad));
      inset-inline-end: calc(1rem * var(--pad));
    }
  }
</style>