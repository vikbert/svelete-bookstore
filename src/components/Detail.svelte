<script>
  import { onMount } from 'svelte';
  import { httpGet } from '../http/bookClient';
  import Cover from './Cover.svelte';
  import ButtonBack from './ButtonBack.svelte';
  import Header from '../elements/Header.svelte';
  export let bookId = null;

  let book = null;

  onMount(async function () {
    const { data } = await httpGet('/' + bookId);

    book = data;
    console.table(book);
  });
</script>

<style>
  .detail {
    display: flex;
    flex-wrap: wrap;
  }
  .about {
    flex-grow: 1;
    margin-right: 5rem;
    width: 60%;
  }
  .preview {
    width: 24rem;
    flex-shrink: 0;
  }
  .cover {
    display: grid;
    grid-template-columns: minmax(100%, 10rem);
    grid-template-rows: minmax(220%, 16rem);
  }
  .hero-content {
    text-align: center;
  }
</style>

<section class="hero is-primary">
  <div class="hero-content">
    {#if book}
      <h3>{book.title}</h3>
      <span>{book.author}</span>
    {/if}
  </div>
</section>
<section class="container">
  {#if book === null}
    ...loading
  {:else}
    <ButtonBack path="/" text="back to Home" />
    <div class="detail">
      <div class="about">
        <Header>{book.title}</Header>
        <h4>{book.author}</h4>
        <p>{book.about}</p>
      </div>
      <div class="preview">
        <div class="cover">
          <Cover interactive={false} {book} />
        </div>
      </div>
    </div>
  {/if}
</section>
