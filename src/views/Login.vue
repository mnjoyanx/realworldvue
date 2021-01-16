<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h2 class="text-center">Sign In</h2>
        <p class="text-xs-center">
          <router-link
            tag="p"
            class="text-center text-success"
            :to="{ name: 'signUp' }"
            >Need an account?</router-link
          >
        </p>

        <rwl-errors />

        <form @submit.prevent="submitForm">
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
</template>

<script>
import { mapGetters } from "vuex";

import RwlErrors from "@/components/Errors";

export default {
  name: "RwlLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    RwlErrors
  },
  computed: {
    ...mapGetters(["isSubmitting"])
  },
  methods: {
    submitForm() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("SIGN_IN", user)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          console.log(err, "err");
        });
    }
  }
};
</script>
