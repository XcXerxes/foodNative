<template>
  <header class="v-header">
    <a class="v-header__menu">
    </a>
    <router-link to="/" class="v-header__body">
      
    </router-link>
    <div class="v-header__right">
      <router-link to="/" ></router-link>
      <button>注册</button>
    </div>
  </header>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/root";
.v-header {
  display: flex;
  align-items: center;
  height: 100px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transition: all .3s ease;
  padding: 16px;
  z-index: 999;
  &__menu {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url('../assets/images/menu.svg') no-repeat;
    background-size: contain;
    background-position: 50%;
    margin-right: 32px;
  }
  &__body {
    display: inline-block;
    width: 300px;
    height: 37px;
    background: url('../assets/images/logo.svg') no-repeat;
    margin-right: auto;
  }
}
</style>
