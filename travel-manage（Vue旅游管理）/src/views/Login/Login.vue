<template>
  <div class="login">
    <div class="form">
      <h1>哈哈旅程</h1>
      <!-- 登录 -->
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model.trim="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model.trim="form.password" show-password></el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button el-button type="primary" @click="login">登录</el-button>
        </div> 
        <div style="text-align: right" >
          <el-button type="text" @click="goto('/reg')">您是否还未注册？</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import request from '@/api/index.js'
// import {mapState} from 'vuex';
export default{
  name: 'login',
  data(){
    return {
      form: {}
    }
  },
  methods: {
    login() {
      request.post('/login/userLogin', {
        username: this.form.username,
        password: this.form.password
      }).then(({ data: res}) => {
        if(res.code === 200) {
          // token：存起来
          let token = res.data.token 
          // 用localStorage.setItem 存数据
          localStorage.setItem('token', token)
          this.$router.push({ path: '/home'})
        } else {
          this.$message.error('登录失败，请重新再试')
        }
      })
      // this.$store.commit('changeSinglePrice', { idx: 0, changePrice: 80})
      // this.$store.dispatch('changeSinglePriceAsync', 1)
      // console.log(this.products)
      // console.log(this.$store.getters.getProducts)
    },
    goto(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    height: 100vh;
    background: url('../../assets/login-bg.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .form{
    h1{
      height: 80px;
      margin: 0;
      text-align: center;
      letter-spacing: 8px;
    }
    width: 300px;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin-right: 100px;
  }
</style>

