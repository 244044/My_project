<template>
  <div class="self">
    <el-card  class="box-card">
        <div slot="header" class="clearfix">
          <span>个人中心</span>
          <el-button style="float: right; padding: 5px 10px" type="primary" @click="selfBack">返回</el-button>
        </div>
        <div>
            <p>
                <span>
                    <i class="el-icon-user-solid fSize"></i>
                    用户名：North</span>
                 <el-divider></el-divider>
            </p>
            <p>
                <span>
                    <i class="el-icon-s-promotion fSize"></i>
                    用户所在的省份:广东省
                </span>
                 <el-divider></el-divider>
            </p>
            <p>
                <span>
                    <i class="el-icon-s-platform fSize"></i>
                    电子名片：111112222334566778
                </span>
                 <el-divider></el-divider>
            </p>
            <p>
                <span>
                    <i class="el-icon-s-release fSize"></i>
                    修改密码：*******
                </span>
                 <el-divider></el-divider>
            </p>
           
            <p>
                <span>
                    <i class="el-icon-s-comment fSize"></i>
                    联系我们：0668-71174568 &emsp; &emsp; &emsp;邮箱：123456@1234.com
                </span>
                 <el-divider></el-divider>
            </p>
            
                       
        </div>
        <el-button type="danger" style="position: relative; left: 50%;transform: translateX(-50%); padding: 5px 10px" @click="backLogin">退出登录</el-button>

   
    </el-card>
  </div>
</template>

<script>
export default {
    name:'self',
data(){
    return{

    }
},
methods:{
    selfBack(){
this.$router.push('/home')
    },
    backLogin(){
      localStorage.removeItem('token')
        this.$router.push('/login')

    }
}

}
</script>

<style scoped lang="scss">
.self{
    height: 100vh;
    background: url('../../assets/login-bg.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .el-card{
        width: 60%;
        height: 80vh;
        margin: 20px auto;
        span{
            font-size: 20px;
        }
        .el-button{
            font-size: 20px;
        }
        .fSize{
            font-size: 26px;
        }

    }
  
}
</style>