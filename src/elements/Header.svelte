<script>
  export let type = 'h2';
  export let size = 'medium';
</script>

<style>
  h1,
  h2 {
    text-transform: uppercase;
    font-weight: var(--typeWeightBold);
  }
  .medium {
    font-size: var(--typeSizeMedium);
    margin-bottom: var(--spacingMedium);
  }
  .large {
    font-size: var(--typeSizeXLarge);
    margin-bottom: var(--spacingXLarge);
  }
</style>

{#if type === 'h1'}
  <h1 class={size}>
    <slot />
  </h1>
{:else}
  <h2 class={size}>
    <slot />
  </h2>
{/if}
