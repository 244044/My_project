<template>
    <div>
      <div class="homeRecommend-title">热销推荐</div>
      <ul>       
        <!-- tag属性，会渲染成对应的标签，自动绑定点击事件 -->
        <router-link tag="li" :to="'/detail/' + item.id" class="homeRecommend-item border-bottom" v-for="item of  recommentList" :key="item.id">
        <img class="item-img" :src='item.imgUrl' alt/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeRecommend',
   data(){
    return{
     
      recommentList:[{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
        "title": "故宫",
        "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
        "title": "南山滑雪场",
        "desc": "北京专业级滑雪圣地"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
        "title": "天安门广场",
        "desc": "我爱北京天安门，天安门上太阳升"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
        "title": "水立方",
        "desc": "中国的荣耀，阳光下的晶莹水滴"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
        "title": "温都水城养生馆",
        "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
      }],
    "weekendList": [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "title": "北京温泉排行榜",
        "desc": "细数北京温泉，温暖你的冬天"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
        "title": "北京必游TOP10",
        "desc": "来北京必去的景点非这些地方莫属"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        "title": "寻找北京的皇城范儿",
        "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "title": "学生最爱的博物馆",
        "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
        "title": "儿童剧场，孩子的乐园",
        "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
      }] 
   
  }
    }
   }
  
  </script>
  
  <style lang="less" scoped>
   
    .homeRecommend-title{
        margin-top:.2rem;
      line-height :1rem;
      background: #eeeeee;
      text-indent: .2rem;
    }
     
    .homeRecommend-item{
        display :flex;
      height :3.05rem;
      overflow :hidden;
      border-bottom: 1px solid #ccc;
      margin: 0,2rem 0;
      .item-img{
        width :2.7rem;
        height :2.7rem;
        padding: 0.15rem 0.2rem;
      }
      
      .item-info{
        flex :1;
        padding:.1rem;
        min-width:0;
        text-align: left;
      }
     
        .item-title{
            line-height :1rem;
          font-size:.3rem;
       
        }
         
        .item-desc{
            line-height :.4rem;
          color:#ccc;
         
        }
          
        .item-button{
            background :#ff9300;
          line-height:.75rem;
          margin-top:.4rem;
          padding:0 .3rem;
          border-radius:.3rem;
          color:#fff;
        }
          
    }
     
  </style>
  