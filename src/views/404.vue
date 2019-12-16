<template>
  <div class="page404">
        <svg-icon class="icon" icon-class="404"></svg-icon><br>
        <router-link replace to="/">返回首页</router-link>
    </div>
</template>
<script>
export default {
  name: 'page404'
}
</script>

<style lang="scss">
    .page404 {
        text-align: center;
        .icon {
            width: 5rem;
        }
    }
</style>
