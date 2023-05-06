<template>
  <div class="home">
    <!-- 100vh代表整个浏览器可视区域的高度 -->
    <el-container style="height: 100vh;">
      <el-aside :width="ifCollapse ? 'fit-content' : '200px'" style="background: #05245c">
        <h1 v-show="ifCollapse === false"></h1>
        <!-- <div class="sub-menu">
          <h3>景点管理</h3>
          <div class="menu-item">
            <router-link to="/spot">景点信息管理</router-link>
            <router-link to="">景点评论管理</router-link>
          </div>
        </div> -->
        <el-menu
          background-color="#05245c"
          text-color="#fff"
          active-text-color="#409EFF"
          :router="true"
          :collapse="ifCollapse"
          :collapse-transition="false"
        >
          <template v-for="item in menuList">
            <el-submenu v-if="item.children" :index="item.path" :key="item.name">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item 
                v-for="sonItem in item.children"
                :index="sonItem.path"
                :key="sonItem.name"
              > 
                <i v-if="sonItem.icon !== ''"  :class="sonItem.icon"></i>
                {{sonItem.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.path"  :key="item.name">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>酒店管理</span>
            </template>
            <el-menu-item index="1-3">酒店信息管理</el-menu-item>
            <el-menu-item index="1-3">酒店评论管理</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-3">
            <i class="el-icon-location-information"></i>
            <span slot="title">攻略信息管理</span>
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-location-information"></i>
            <span slot="title">游记信息管理</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="left">
            <span class="fold mr10">
              <!-- 这个图标是折叠图标。menu展开时,点击该图标要折叠效果 -->
              <i v-if="ifCollapse === false" class="el-icon-s-fold" @click="ifCollapse = true"></i>
              <!-- 这个图标是展开图标。menu收起来时,点击该图标要展开效果 -->
              <i v-else class="el-icon-s-unfold" @click="ifCollapse = false" ></i>
            </span>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="item in breadList" :key="item">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="right">
            <el-dropdown>
              <span class="el-dropdown-link">
                <el-avatar size="small" :src="avatarUrl" class="mr10" ></el-avatar>
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
               
                  <el-dropdown-item > 
                     <router-link to="/seft" style="list-style:normal; color: #000;">个人中心</router-link>
                     </el-dropdown-item>
                
               
                <el-dropdown-item>
                  <span @click="logout">
                    退出登录
                  </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <!-- 根据不同的路由，显示不同的内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'layout',
  components: {
  },
  data() {
    return {
      menuList: [
        {
          name: '景点管理',
          path: '/spot',
          icon: 'el-icon-location-information',
          children: [
            {
              name: '景点信息管理',
              path: '/spot/index',
              icon: ''
            }, {
              name: '热门景点管理',
              path: '/spot/comment',
              icon: ''
            }
          ]
        }, {
          name: '酒店管理',
          path: '/hotel',
          icon: 'el-icon-s-home',
          children: [
            {
              name: '酒店信息管理',
              path: '/hotel/index',
              icon: ''
            }, {
              name: '酒店评论管理',
              path: '/hotel/comment',
              icon: ''
            }
          ]
        }
        // }, {
        //   name: '攻略信息管理',
        //   path: '',
        //   icon: 'el-icon-location-information'
        // }, {
        //   name: '游记信息管理',
        //   path: '',
        //   icon: 'el-icon-location-information',
        // }
      ],
      // 是否折叠
      ifCollapse: false,
      avatarUrl: ''
    }
  },
  computed: {
    breadList(){
      return this.$store.state.breadList
    }
  },
  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/login')
      /* 登录时:
          用户名+密码=>数据库校验=>登录成功=> 后端返回一个token(有效期)
          前端要把token存起来=> 部分路由在路由跳转前先判断有没有token，有才允许用户进入
                          => 接口对接时，用请求头将token传过去。当请求头的token满足时，才返回数据。
          前端可能还会存储一些相关的用户信息（用户名、头像）
      */
      /* 退出：
        1.清除所有相关用户信息的存储
        2.跳回登录页
      */

    },
    moveSelf(){
      // localStorage.removeItem('token')
      this.$router.push('/self')
    }
  }
}
</script>
<style lang="scss" scoped>
  .mr10{
    margin-right: 10px;
  }
  h1{
    height: 80px;
    background: url('../assets/logo_white.svg') no-repeat;
    background-size: 100% 100%;
    // 让背景从内容区域开始摆放
    background-origin: content-box;
    margin: 0;
    padding: 0 20px;
  }
  .el-menu{
    border: 0 none;
  }
  .el-breadcrumb{
    display: inline-block;
  }
  .el-header.header{
    display: flex; 
    justify-content: space-between;
    align-items: center;
    span, i, .el-breadcrumb{
      vertical-align: middle;
    }
  }
  .el-main{
    background: #ddd;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>