// 专门处理所有接口操作
const express = require('express')
const Router = express.Router() // 接口路由中间件

const studentLoginRouter = require('./login.js')
const studentRegRouter = require('./reg.js')
const manageRegRouter = require('./manreg.js')
const stuentPublicAllRouter = require('./stupublic.js')
const studentVisitorAllRouter = require('./stuvisitor.js')
const manageRepairRouter = require('./manrepair.js')
const manageVisistorRouter = require('./manregister.js')
const studentCenterRouter = require('./studentCenter.js')
const personalListRouter = require('./personList.js')
const healthListRouter = require('./health.js')
const buildRouter = require('./build.js')
const manageHealthRouter = require('./manhealth.js')


// wechat
const publicWeChatRouter = require('./publicchat.js')





Router.use(express.urlencoded({ extended: false }), express.json())

Router.use('/login', studentLoginRouter)
Router.use('/stulogin/stureg', studentRegRouter)
Router.use('/adminlogin/adminreg', manageRegRouter)
Router.use('/public', stuentPublicAllRouter)
Router.use('/visitor', studentVisitorAllRouter)
Router.use('/repair', manageRepairRouter)
Router.use('/register', manageVisistorRouter)
Router.use('/submit', manageHealthRouter)

Router.use('/center', studentCenterRouter)
Router.use('/personal', personalListRouter)
Router.use('/health', healthListRouter)
Router.use('/build', buildRouter)


// wechat
Router.use('/chatapi', publicWeChatRouter)



// 把路由接口暴露出去，导出的是一个对象
module.exports = Router