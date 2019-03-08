<template>
  <div class="feed-item">
    <div class="feed-item__heading">
      <h2>新食谱</h2>
      <router-link to="/" >查看全部</router-link>
    </div>
    <div class="feed-item__content">
      <card-media v-for="i in 5" :key="i" />
    </div>
  </div>
</template>
<script>
import cardMedia from '@/components/card/card-media'
export default {
  components: {
    cardMedia
  }
}
</script>
