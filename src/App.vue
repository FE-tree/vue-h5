<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view class="router"></router-view>
            </keep-alive>
            <router-view class="router" v-else></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    computed: {
        transitionName() {
            return this.$store.state.direction
        }
    }
}
</script>

<style lang="scss">
    @import '@style/common.scss';
</style>