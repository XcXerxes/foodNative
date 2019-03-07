<template>
  <section class="search-combobox">
    <h3>搜索食谱</h3>
    <SearchInput
      v-model="searchResult"
      @keyup.enter="keyupEnter"
      class="search-combobox__input"
    />
    <router-link class="search-combobox__advanced" to="/">高级搜索</router-link>
  </section>
</template>
<script>
import SearchInput from '@/components/search/SearchInput'
export default {
  name: 'Search',
  data: () => ({
    searchResult: ''
  }),
  components: {
    SearchInput
  },
  methods: {
    keyupEnter (e) {
      console.log('cccc')
    }
  }
}
</script>
<style lang="scss" scoped>
.search-combobox {
  padding: 0 5px 32px;
  margin-bottom: 32px;
  h3 {
    text-align: center;
    margin: 30px 0;
  }
  &__advanced {
    display: block;
    text-align: center;
    margin: 30px 0;
    &::after {
      content: '>';
      display: inline-block;
      margin-left: 8px;
    }
  }
}
</style>
