<script>
  import { navigate } from 'svelte-routing';
  import Header from '../../elements/Header.svelte';
  import { httpPost } from '../../http/bookClient';
  import ButtonBack from '../ButtonBack.svelte';
  import Cover from '../Cover.svelte';
  import TextInput from './TextInput.svelte';

  let invalidForm = false;
  let data = {
    id: null,
    title: 'your book title',
    author: 'your book author',
    cover: '',
    about: '',
    variation: 0,
  };

  const isTooShort = (value) => value.length < 3;

  async function handleSubmit(event) {
    data = {
      ...data,
      id: Math.random().toString(36).substr(2, 9), // 8 characters
      createdAt: new Date().getTime(),
    };

    if (invalidForm) {
      return;
    }

    const res = await httpPost('/', data);
    console.log(res);
    if (res.ok) {
      navigate('/');
    }
  }

  $: invalidForm = isTooShort(data.title) || isTooShort(data.author);
</script>

<style>
  form {
    display: flex;
    flex-wrap: wrap;
  }
  .fields {
    flex-grow: 1;
    padding-right: 5rem;
  }
  .preview {
    width: 24rem;
    flex-shrink: 0;
  }
  .cover {
    display: grid;
    grid-template-columns: minmax(100%, 10rem);
    grid-template-rows: minmax(200%, 16rem);
  }
</style>

<section class="hero is-primary">
  <div class="flex-centered">
    <h3>Add New Book</h3>
  </div>
</section>

<section class="container">
  <ButtonBack path="/" text="back to home" />
  {#if invalidForm}
    <span class="error">Title and author should have min. 3 characters!</span>
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <div class="fields">
      <TextInput bind:value={data.title} name="title" label="Title" />
      <TextInput bind:value={data.author} name="author" label="Author" />
      <TextInput bind:value={data.cover} name="cover" label="Cover Url" />
      <TextInput
        bind:value={data.about}
        name="about"
        label="Descripton"
        textArea />

      <button
        class="is-primary is-rounded submit"
        type="submit"
        id="button-submit">SAVE</button>
    </div>
    <div class="preview">
      <Header>Preview</Header>
      <div class="cover">
        <Cover interactive={false} book={data} />
      </div>
    </div>
  </form>
</section>
