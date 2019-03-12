<template>
  <div class="feed-item">
    <div class="feed-item__heading">
      <h2>新食谱</h2>
      <router-link :class="color" to="/" >查看全部</router-link>
    </div>
    <div class="feed-item__content">
      <card-media v-for="i in 5" :key="i"
        size="small"
      />
    </div>
  </div>
</template>
<script>
import cardMedia from '@/components/card/card-media'
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  components: {
    cardMedia
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/styles/root';

.feed-item{
  margin-bottom: 40px;
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    margin-bottom: 30px;
    @each $name, $color in $vf-colors {
      a{
        &.#{$name} {
        color: getColor($name);
      }
      }
    }
  }
  &__content {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

</style>
