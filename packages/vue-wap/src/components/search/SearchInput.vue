<template>
  <div class="search-wrapper">
    <input v-bind="$attrs"
      type="search"
      class="search-wrapper__search"
      name="search"
      ref="searchInput"
      :value="value"
      v-on="listeners"
      @input="onInput"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    placeholder: {
      type: String,
      default: '搜索食谱和文章'
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: (e) => {
          this.onInput(e)
        }
      }
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  height: 84px;
  border-radius: 8px;
  border: 2px solid #d8d8d8;
  padding-left: 88px;
  position: relative;
  &__search {
    border: none;
    outline: none;
    height: inherit;
    font-size: 40px;
    width: 100%;
    color: #212121;
    padding-right: 30px;
  }
}
</style>
