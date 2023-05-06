// 专门处理所有接口操作
const express = require('express')
const Router = express.Router() // 接口路由中间件
const spotRouter = require('./spot.js')
const loginRouter = require('./login.js')
const regRouter = require('./reg.js')


Router.use(express.urlencoded({ extended: false }), express.json())

Router.use('/spot', spotRouter)
Router.use('/login', loginRouter)
Router.use('/reg', regRouter)
    // 把路由接口暴露出去，导出的是一个对象
module.exports = Router