<template>
  <div class="search-wrapper">
    <i></i>
    <input v-bind="$attrs"
      type="search"
      class="search-wrapper__search"
      name="search"
      :placeholder="placeholder"
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
  height: 64px;
  border-radius: 8px;
  border: 2px solid #d8d8d8;
  padding-left: 64px;
  position: relative;
  i {
    position: absolute;
    left: 0;
    width: 64px;
    height: 64px;
    background: url('../../assets/images/search.svg') no-repeat;
    background-position: 50%;
    background-size: 42%;
  }
  &__search {
    border: none;
    outline: none;
    height: inherit;
    font-size: 30px;
    width: 100%;
    color: #212121;
    padding-right: 30px;
  }
}
</style>
