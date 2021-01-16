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
        <router-link
          exact
          :to="{name: 'home'}"
          tag="li"
          active-class="active__class"
        >
          <span role="button">Home</span>
        </router-link>
        <template v-if="isLoggedIn">
          <router-link

            :to="{name: 'homes'}"
            tag="li"
            active-class="active__class"
          >
            <span role="button">New Article</span>
          </router-link>

          <router-link
            :to="{name: 'homes'}"
            tag="li"
            active-class="active__class"
          >
            <span role="button">Settigns</span>
          </router-link>

          <router-link
            :to="{name: 'homse'}"
            tag="li"
            active-class="active__class"
          >
            <span role="button">{{ currentUser.username }}</span>
          </router-link>
        </template>
        <template v-if="!isLoggedIn">
          <router-link
            :to="{name: 'signIn'}"
            tag="li"
            active-class="active__class"
          >
            <span role="button">Sign In</span>
          </router-link>
          <router-link
            :to="{name: 'signUp'}"
            tag="li"
            active-class="active__class"
          >
           <span role="button">Sign Up</span>
          </router-link>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "RwlNavBar",
  computed: {
    ...mapGetters(['currentUser', 'isLoggedIn'])
  }
};
</script>


<style lang="scss" scoped>
@import url("../assets/styles/navbar.scss");
</style>