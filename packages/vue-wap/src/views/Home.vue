<template>
  <div class="home">
    <Vheader />
    <section class="content-home">
      <article-media />
      <Search />
      <div class="feed-wrapper">
        <feed-item v-for="(item, key) in feeds" :key="key" :item="item" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Vheader from '@/components/Vheader'
import articleMedia from '@/views/home/components/article-media'
import Search from '@/views/home/components/search'
import feedItem from '@/views/home/components/feed-item'

export default {
  name: 'home',
  components: {
    Vheader,
    articleMedia,
    Search,
    feedItem
  },
  data: () => ({
    feeds: [
      {},
      {},
      {},
      {}
    ]
  })
}
</script>
<style lang="scss" scoped>
.feed-wrapper {
  padding: 0 20px;
}
</style>
