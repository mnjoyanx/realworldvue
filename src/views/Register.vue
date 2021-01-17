<template>
  <div class="auth-page">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h2 class="text-center">Sign Up</h2>
          <p class="text-xs-center">
            <router-link
              tag="p"
              class="text-center text-success"
              :to="{ name: 'signIn' }"
              >Need an account?</router-link
            >
          </p>
          <rwl-errors />

          <form action="" @submit.prevent="submitForm">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
                v-model="name"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-success float-right"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RwlErrors from "@/components/Errors.vue";

export default {
  name: "RwlRegister",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  components: {
    RwlErrors
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    }
  },
  methods: {
    submitForm() {
      const credentials = {
        username: this.name,
        email: this.email,
        password: this.password
      };
      // this.$store.commit("REGISTER_START");
      this.$store.dispatch("SIGN_UP", credentials).then(user => {
        this.$router.push({ name: "globalFeed" });
        console.log("successfuly register", user);
      });
    }
  }
};
</script>
