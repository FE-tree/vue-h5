<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <svg-icon class="icon" icon-class="user"></svg-icon> tree
    <div class="icon-list">
      <svg-icon v-for="icon in iconList" :key="icon" class="icon" :icon-class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      iconList: [
        'dashboard',
        'example',
        'eye-open',
        'eye',
        'form',
        'link',
        'nested',
        'password',
        'table',
        'tree',
        'user',
        '404'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .icon-list {
    margin: 15px;
    font-size: 24px;
    background-color: $theme-bg;
    .icon {
      margin: 0 10px;
    }
  }
</style>
