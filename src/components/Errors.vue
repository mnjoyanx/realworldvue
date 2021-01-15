<template>
  <ul v-if="errors">
    <li v-for="(err, key) in errors" :key="key">
      <strong class="text-danger"> {{ err }} </strong>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RwlErrorrs",
  computed: {
    errors() {
      if (this.$store.state.auth.validationErrors) {
        return Object.keys(this.$store.state.auth.validationErrors).map(
          name => {
            let errKey = this.$store.state.auth.validationErrors[name].join(
              ", "
            );
            return `${name} ${errKey}`;
          }
        );
      } else return null;
    }
  }
};
</script>
