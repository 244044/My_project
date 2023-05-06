# 搭建express服务
1. npm init
2. npm i express   (npm i nodemon先看情况装)  (npm i supervisor)
3. ```
    // server.js
    const express = require('express')
    const app = express()
    const config = require('./config/index.js')

    const rootRouter = require('./router/index.js')
    app.use('/api', rootRouter)

    app.listen(config.PORT, function () {
      console.log(`服务已开启在端口${config.PORT}`)
    })
   ```
4. 写接口路由
  ```
    // router/index.js 总接口路由
    const express = require('express')
    const router = express.Router()

    const spotRouter = require('./spot.js')
    router.use('/spot', spotRouter)

    module.export = router

    //============================================

    // router/spot.js 景点接口路由
    const express = require('express')
    const router = express.Router()
    //增删改查的接口
    module.export = router
  ```
# 操作mongodb数据库
  1. npm i mongodb (可视化界面/mongo.exe文件)
  2. 连接数据库
    ```
      // db/index.js
        const mongodb = require('mongodb');
        const MongoClient = mongodb.MongoClient;
        // 连接mongoDB
        MongoClient.connect("mongodb://127.0.0.1:27017", function(err, client) {
          if(err) throw err;
          // 连接数据库，无则自动创建
          let db = client.db('test')
          // 操作集合、操作文档（增删改查）
          // 关闭连接，释放资源
          client.close()
        })
    ```
  3. 为了在任意地方都能使用到client、db
    ```
      // db/index.js
        const mongodb = require('mongodb');
        const MongoClient = mongodb.MongoClient;
        
        function connect () {
          return new Promise(function(resolve, reject) {
            // 连接mongoDB
            MongoClient.connect("mongodb://127.0.0.1:27017", function(err, client) {
              if(err) throw err;
              // 连接数据库，无则自动创建
              let db = client.db('test')

              resolve({
                db,
                client
              })
              
              client.close()
            })
            
          })
        }

        connect()  // promise对象.then(function(data){ data拿到的就是调用resolve方法传进来的对象}) 
        await connect()  // await promise对象 ==> data拿到的就是调用resolve方法传进来的对象=> {db,client}
    ```
  4. 封装对数据库的增删改查方法



  加密方式：安转包：npm i crypto