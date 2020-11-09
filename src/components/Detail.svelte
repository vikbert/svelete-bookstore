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
    display: flex;
    flex-wrap: wrap;
  }

  .cover {
    display: grid;
    grid-template-columns: minmax(100%, 10rem);
    grid-template-rows: minmax(220%, 16rem);

    flex-shrink: 0;
    width: 240px;
    padding-right: 3rem;
  }
  .about {
    flex-grow: 1;
    max-width: 50rem;
    max-height: 40rem;
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
