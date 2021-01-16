<template>
  <nav class="navbar navbar-expand-lg">
    <ul class="navbar-nav">
      <router-link to="/" tag="li" exact active-class="active__class">
        <strong role="button" class="text-success">conduit</strong>
      </router-link>
    </ul>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <router-link active-class="active__class" :to="{ name: name }" tag="li"
          v-for="({ name, title }, key) in routes"
          :key="key"
        >
          <span href="#" class="btn">
            {{ title }}
          </span>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "RwlNavBar",
  data() {
    return {
      routes: [
        { url: "/register", name: "signUp", title: "Sign Up" },
        { url: "/login", name: "signIn", title: "Sign In" },
      ],
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser
    })
  }
};
</script>


<style lang="scss" scoped>
@import url("../assets/styles/navbar.scss");
</style>