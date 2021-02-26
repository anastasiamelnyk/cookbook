<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
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
