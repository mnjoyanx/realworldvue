<template>
  <div id="app">
    <div class="container">
      <rwl-nav-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import RwlNavBar from "@/components/NavBar"

export default {
  name: "App",
  components: {
    RwlNavBar,
  },
  computed: {
    ...mapActions(["FETCH_CURRENT_USER"])
  },
  mounted() {
    this.$store.dispatch("FETCH_CURRENT_USER");
  }
};
</script>

<style lang="scss">
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
</style>
