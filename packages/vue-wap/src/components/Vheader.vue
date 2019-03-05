<template>
  <header class="v-header">
    <a class="v-header__menu">
    </a>
    <router-link to="/" class="v-header__body" />
    <div class="v-header__right">
      <router-link to="/" class="v-header__search"  />
      <button class="v-header__regist">注册</button>
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
  &__right {
    display: flex;
    height: inherit;
    align-items: center;
    color: #464646;
    font-weight: 600;
    button {
      color: inherit;
      font-weight: inherit;
      outline: none;
      background: transparent;
      border: none;
      &.v-header__regist {
        border-left: 1px solid #8e8e8e;
        padding: 0 24px;
      }
    }
  }
  &__search {
    width: 36px;
    height: 36px;
    background: url('../assets/images/search.svg') no-repeat;
    background-size: cover;
    margin-right: 24px;
  }
}
</style>
