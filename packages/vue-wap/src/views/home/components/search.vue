<template>
  <section class="search-combobox">
    <h3>搜索食谱</h3>
    <SearchInput
      v-model="searchResult"
    />
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
  }
}
</script>
<style lang="scss" scoped>
.search-combobox {
  padding: 0 5px 32px;
  margin-bottom: 32px;
}
</style>
