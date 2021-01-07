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
              :to="{ name: 'signUp' }"
              >Need an account?</router-link
            >
          </p>
          VALIDATION ERRORS TODO
          <form action="" @submit.prevent="submitForm">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-success float-right" :disabled="isSubmitting">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RwlRegister",
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
  },
  methods: {
    submitForm() {
      console.log(this.$store.state.auth.isSubmitting);
      this.$store.commit("REGISTER_START");
    },
  },
};
</script>