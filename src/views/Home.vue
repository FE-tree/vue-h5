<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <router-link to="/about">About</router-link>
    </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@c/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld
    }
}
</script>

<style lang="scss">
.home {
    text-align: center;
    color: #2c3e50;
}
</style>