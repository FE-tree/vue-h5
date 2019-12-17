<template>
    <div class="about">
        <router-link to="/">Home</router-link>
        <h1>This is an about page</h1>
    </div>
</template>

<style lang='scss' scoped>
.about {
    width: 100%;
    height: 100vh;
    text-align: center;
    color: #2c3e50;
    @include gradual(#efefef, $theme-color);
    h1 {
        padding: 1rem 0;
    }
}
</style>