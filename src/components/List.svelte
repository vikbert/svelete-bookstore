<script>
  import { onMount } from 'svelte';
  import { httpGet } from '../http/bookClient';

  import ButtonBack from './ButtonBack.svelte';
  import Cover from './Cover.svelte';

  let books = [];

  onMount(async function () {
    const { ok, data } = await httpGet('?_sort=createdAt&_order=desc');
    books = data;

    console.table(books);
  });
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    grid-auto-rows: minmax(19.5rem, auto);
    gap: 2.5rem;
    list-style: none;
    max-width: 100%;
    padding: 0;
  }
</style>

<section class="hero is-primary">
  <div class="hero-content">
    <h3>Top Coding Book</h3>
    <span>The best books for programmers</span>
  </div>
</section>
<div class="container">
  <ButtonBack path={'/create'} text={'Add a new book'} />
  {#if books.length === 0}
    ... loading data
  {:else}
    <div class="grid-container">
      {#each books as book}
        <Cover {book} />
      {/each}
    </div>
  {/if}
</div>
