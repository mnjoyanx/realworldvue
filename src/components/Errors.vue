<template>
  <ul v-if="errors">
    <li v-for="(err, key) in errors" :key="key">
      <p> {{ key }} {{ err[0]}} </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RwlErrorrs',
  computed: {
    errors() {
      return this.$store.state.auth.validationErrors;
    }
  },
};
</script>
