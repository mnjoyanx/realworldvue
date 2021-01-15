<template>
  <div id="app">
    <div class="container">
      <rwl-nav-bar></rwl-nav-bar>
    <router-view />
    </div>
  </div>
</template>

<script>
import RwlNavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    RwlNavBar
  }
}
</script>

<style lang="scss">
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
</style>

