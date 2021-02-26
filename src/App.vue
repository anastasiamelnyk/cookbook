<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from '~features/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
