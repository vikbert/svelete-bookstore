<script>
  import { links } from 'svelte-routing';
  export let path = '/';
  export let text = 'Home';
</script>

<style>
  button {
    text-transform: capitalize;
  }
</style>

<nav>
  <a href={path} on:click use:links>
    <button class="is-primary is-rounded is-outlined">{text}</button>
  </a>
</nav>
