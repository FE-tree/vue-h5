<template>
    <div class="login">
        <div class="wrapper">
            <div class="title">注册</div>
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
                        <div class="btn">注册</div>
                        <router-link to="/login">去登录</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            register: {
                accout: '',
                pwd: ''
            }
        }
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
