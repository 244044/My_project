<template>
  <div class="login">
    <div class="form">
      <h1>趣学旅程</h1>
      <!-- 注册 -->
      <el-form ref="form" :rules="rules" :model="form" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入您的大名" v-model.trim="form.username">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model.trim="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input placeholder="请输入确认密码" v-model.trim="form.checkPass" show-password></el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button  el-button type="primary" @click="reg">注册</el-button>
        </div> 
        <div style="text-align: right" >
          <el-button type="text" @click="goto('/login')">我已注册，去登录！</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import request from '@/api/index.js'
export default{
  name: 'reg',
  data(){
    return {
      form: {},
      rules: {
        username: [
          { validator: this.validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: this.validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: this.validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path)
    },
    reg () {
     
      let that = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 对接接口，接口把值插入数据库.
          request.post('/reg/userReg',  {
            username: this.form.username,
            password: this.form.password
          }).then(function ({ data: res}) {
            if(res.code === 200) {
              that.$router.push('/login')
              // 可以把注册时写的用户名跟密码，带到登录页。触发登录页直接登录！！！
            } else  {
              that.$message.error("注册失败，请重新再试")
            }
          })
        } else {
          return false;
        }
      });
    },
    // 注册时，校验用户名
    async validateUserName(rule, value, callback) {
      // (1)输入内容为空
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      // (2) 去数据库校验该用户名有没有被使用，有的话报用户名已被使用，没有的话就直接callback()  { data: res }：解构重命名为res
      let { data: res } = await request.get(`/reg/userRepeat?username=${value}`) 
      // { data: {code: 200, data: {}, msg: '用户名可用'}}
      console.log(res)
      if(res.code === 400) {
        return callback(new Error(res.msg));
      }
      callback()
    },
    // 注册时，校验密码
    validatePass(rule, value, callback) {
      console.log(value)
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          // 让form表单去校验确认密码那个函数
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    },
    // 注册时，校验确认密码
    validatePass2(rule, value, callback) {
      console.log(value)
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
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

