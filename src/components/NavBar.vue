<template>
  <nav class="navbar navbar-expand-lg">
    <router-link to="/" exact class="nav-link">Navbar</router-link>
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
        <li
          class="nav-item"
          v-for="({ name, title }, key) in routes"
          :key="key"
        >
          <router-link class="nav-link text-dark" :to="{ name: name }">
            {{ title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "RwlNavBar",
  data() {
    return {
      routes: [
        { url: "/register", name: "signUp", title: "Sign Up" },
        { url: "/login", name: "signIn", title: "Sign In" },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
    @import url('../assets/styles/navbar.scss')
</style>