<template>
  <div class="home">
    <Vheader />
    <section class="content-home">
      <article-media />
      <Search />
      <feed-item />
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
  }
}
</script>
