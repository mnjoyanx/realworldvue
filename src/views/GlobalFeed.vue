<template>
  <div class="home-page">
  <div class="container-page">
    <div class="row">
      <div class="col-md-9">
        <rwl-feed :apiUrl="apiUrl" />
      </div>
      <div class="col-md-3">
        POPULAR TAGS
      </div>
    </div>
    <rwl-pagination />
  </div>
  </div>
</template>

<script>
import RwlFeed from '@/components/Feed'
import RwlPagination from '@/components/Pagination'

export default {
  name: "RwlGlobalFeed",
  components: {
    RwlFeed,
    RwlPagination
  },
  data() {
    return {
      apiUrl: 'articles'
    }
  }
};
</script>

<style scoped>

</style>