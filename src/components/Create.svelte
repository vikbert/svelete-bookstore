<script>
  import ButtonBack from './ButtonBack.svelte';

  let formData = {
    title: '',
    author: '',
    cover: '',
    about: '',
  };

  $: {
    console.log(formData);
  }
</script>

<style>
  .book-form button.submit {
    float: right;
  }
</style>

<section class="hero is-primary">
  <div class="flex-centered">
    <h3>Add New Book</h3>
  </div>
</section>

<section class="container">
  <ButtonBack path="/" text="back to home" />
  <div class="book-form">
    new form
    <!-- <form>
      <label for="title">Book title</label>
      <input
        type="text"
        name="title"
        id="input-title"
        on:input={formData.title} />

      <label for="author">Book author</label>
      <input
        type="text"
        name="author"
        id="input-author"
        on:input={formData.author} />

      <label for="cover">Book cover URL</label>
      <input
        type="text"
        name="cover"
        id="input-cover"
        on:input={formData.cover} />

      <label for="about">Book description</label>
      <input
        type="text"
        name="about"
        id="inuput-about"
        on:input={formData.author} />

      <button
        class="is-primary is-rounded submit"
        type="submit"
        id="button-submit">SAVE</button>
    </form> -->
  </div>
</section>
