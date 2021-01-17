<template>
  <div>
    Feed
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "RwlFeed",
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['GET_FEED'])
  },
  mounted() {
    console.log(this.apiUrl)
    this.GET_FEED(this.apiUrl)
  }
};
</script>

<style scoped>

</style>