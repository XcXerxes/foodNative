<template>
  <article class="v-top">
    <figure class="v-top__image" >
      <img src="https://images.kitchenstories.io/wagtailOriginalImages/A744-photo-final/A744-photo-final-medium-landscape-150.jpg" alt="Kitchen Stories">
      <section class="v-top__caption">
        <h2>从这篇文章开始，把鹰嘴豆加入你的料理</h2>
        <p>风靡全球的健康食材</p>
        <router-link to="/" >显示更多</router-link>
      </section>
    </figure>
  </article>
</template>
<style lang="scss" scoped>
.v-top {
  &__image {
    position: relative;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  &__caption {
    padding: 64px 32px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    >p {
      margin: 24px 0;
    }
  }
}
</style>
