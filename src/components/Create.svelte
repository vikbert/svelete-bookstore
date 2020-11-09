<script>
  import Header from '../elements/Header.svelte';

  import ButtonBack from './ButtonBack.svelte';
  import Cover from './Cover.svelte';

  let formData = {
    title: 'your book title',
    author: 'author',
    cover: '',
    about: 'about the book',
  };

  $: {
    console.log(formData);
  }
</script>

<style>
  form {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    gap: var(--spacingXLarge);
  }
  .fields {
    display: grid;
    grid-auto-rows: auto;
    gap: var(--spacingMedium);
  }
  .preview {
    display: grid;
    grid-template-columns: minmax(20vw, 10rem);
    grid-template-rows: minmax(32vw, 16rem);
  }
  @media (min-width: 48rem) {
    form {
      grid-template-columns: 60vw 20vw;
    }
  }
</style>

<section class="hero is-primary">
  <div class="flex-centered">
    <h3>Add New Book</h3>
  </div>
</section>

<section class="container">
  <ButtonBack path="/" text="back to home" />
  <form>
    <div class="fields">
      <label for="title">Book title</label>
      <input type="text" name="title" id="input-title" />

      <label for="author">Book author</label>
      <input type="text" name="author" id="input-author" />

      <label for="cover">Book cover URL</label>
      <input type="text" name="cover" id="input-cover" />

      <label for="about">Book description</label>
      <input type="text" name="about" id="inuput-about" />

      <button
        class="is-primary is-rounded submit"
        type="submit"
        id="button-submit">SAVE</button>
    </div>
    <div>
      <Header>Preview</Header>
      <div class="preview">
        <Cover interactive={false} book={formData} />
      </div>
    </div>
    <!-- <form>
      

      


    </form> -->
  </form>
</section>
