<script>
  import { Router, Route } from 'svelte-routing';
  import TopBar from './components/TopBar.svelte';
  import Create from './components/Create.svelte';
  import List from './components/List.svelte';
  import Detail from './components/Detail.svelte';
  import { onMount } from 'svelte';
  import { httpGet } from './http/bookClient';

  export let books = [];
  export let url = '';
  const handleBookSelected = (event) => {};

  onMount(async function () {
    const { ok, data } = await httpGet('/books?_sort=id&_order=desc');
    books = data;
  });
</script>

<TopBar />
<Router {url}>
  <main>
    <Route path="/create">
      <Create />
    </Route>
    <Route path="/books/:id" let:params>
      <Detail bookId={params.id} />
    </Route>
    <Route path="/">
      <List {books} on:book-selected={handleBookSelected} />
    </Route>
  </main>
</Router>
