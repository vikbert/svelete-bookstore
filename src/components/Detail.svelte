<script>
  import { onMount } from 'svelte';
  import { httpGet } from '../http/bookClient';
  import Cover from './Cover.svelte';
  import ButtonBack from './ButtonBack.svelte';
  import Header from '../elements/Header.svelte';
  export let bookId = null;

  let book = null;

  onMount(async function () {
    const { data } = await httpGet('/books/' + bookId);

    book = data;
    console.table(book);
  });
</script>

<style>
  .detail {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40vw, 20rem));
    grid-template-rows: minmax(64vw, 32rem) auto;
    gap: var(--spacingXLarge);
  }
  .cover {
    display: flex;
    position: relative;
    margin-bottom: var(--spacingXLarge);
  }
</style>

<section class="hero is-primary">
  <div class="flex-centered">
    <h3>Book Details</h3>
  </div>
</section>
<div class="container">
  {#if book === null}
    ...loading
  {:else}
    <ButtonBack path="/" text="back to Home" />
    <div class="detail">
      <div class="cover">
        <Cover {book} interactive={false} />
      </div>
      <div class="about">
        <Header size="large">{book.title}</Header>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit id
          quibusdam pariatur eius. Eaque, ut odio ab deleniti, odit fugit
          exercitationem voluptatibus doloribus, nobis quas repellendus aut
          incidunt minus ipsum.
        </p>
      </div>
    </div>
  {/if}
</div>
