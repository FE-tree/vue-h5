<template>
    <div class="login">
        <div class="wrapper">
            <div class="title">登录</div>
            <img src="../../assets/logo.png">
            <div class="tab-item">
                <form>
                    <div class="input-item">
                        <input type="text" placeholder="用户名">
                    </div>
                    <div class="input-item">
                        <input type="password" placeholder="密码">
                    </div>
                    <div class="input-item">
                        <div class="btn">登录</div>
                        <router-link to="/register">去注册</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            login: {
                accout: '',
                pwd: ''
            }
        }
    },
    watch: {
        // active: function(cur, old) {
        //     console.log(cur)
        // }
    },
    methods: {
        tabClick: function () {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './loginregister.scss';
</style>
