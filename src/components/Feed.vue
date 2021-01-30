<template>
<div>
    <div v-if="isLoading">Loading...</div>
   <div v-if="error"> somthing goes wrong </div>
  <div v-if="feed">
    <div class="article-preview" v-for="(article, key) in feed.articles" :key="key">
      <div class="article-meta">
        <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
          <img :src="article.author.image" alt="article">
        </router-link>
        <div class="info">
          <router-link class="author" :to="{name: 'userProfile', params: {slug: article.author.username}}">
            {{article.author.username}}
          </router-link>
          <span class="date">{{ article.createdAt }}</span>
        </div>
        <div class="pull-xs-right">
          ADD TO FAVORITES
        </div>
      </div>
      <router-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
        <h2> {{ article.title }} </h2>
        <p> {{ article.description }} </p>
        <span>Read more...</span>
      </router-link>
    </div>
  </div>
    <rwl-pagination />
  </div>
</template>

<script>
import RwlPagination from '@/components/Pagination'
import {mapState} from 'vuex'

export default {
  name: "RwlFeed",
  props: {
    apiUrl: {
      type: String,
      requried: true
    }
  },
  components: {
    RwlPagination
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    })
  },
  mounted() {
    this.$store.dispatch('GET_FEED', this.apiUrl)
  }
};
</script>

<style scoped>

</style>