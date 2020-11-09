<script>
  export let name;
  export let label;
  export let value;
  export let textArea = false;
</script>

<style>
  textarea {
    height: 120px;
  }
  span {
    color: #6a0561;
  }
</style>

<label for={name}>
  <span>{label}</span>
  {#if textArea}
    <textarea id={'input-' + name} bind:value />
  {:else}<input type="text" {name} id={'input-' + name} bind:value />{/if}
</label>
