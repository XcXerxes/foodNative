<template>
  <a class="card-media"
    :class="`card-media__container-${size}`"
    href="javascript:;">
    <div class="card-media__container"
    >
      <img :src="imgSrc" :alt="title">
      <div class="card-media__gradient"></div>
      <div class="card-media__like">
        <i></i>
        <span>{{likeNumber}}</span>
      </div>
      <div class="card-media__time">{{time}} 分钟</div>
      <div class="card-media__play" v-if="isPlayer" />
    </div>
    <div class="card-media__footer">
      <h4 class="card-media__title" v-if="title" >{{title}}</h4>
      <p class="card-media__caption" v-if="caption">
        <slot />
      </p>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    isPlayer: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: 'https://images.kitchenstories.io/wagtailOriginalImages/R1564_photo_final/R1564_photo_final-small-portrait-150.jpg'
    },
    title: {
      type: String,
      default: ''
    },
    likeNumber: {
      type: Number,
      default: 0
    },
    caption: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.card-media {
  padding: 0 16px;
  &.card-media__container-small {
    width: 300px;
    flex: 0 0 300px;
  }
  &__container {
    >img {
      max-width: 100%;
    }
  }
}
</style>
