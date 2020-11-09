<script>
  import { Router, Route } from 'svelte-routing';
  import TopBar from './components/TopBar.svelte';
  import Create from './components/create/Create.svelte';
  import List from './components/List.svelte';
  import Detail from './components/Detail.svelte';

  let url = '';
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
      <List />
    </Route>
  </main>
</Router>
