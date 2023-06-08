// 注册相关接口.
const express = require('express')
const Router = express.Router() // 接口路由中间件
const { find, insert } = require('../db/index.js')
const { formatData, encrypt } = require('../utils/index.js')
Router.get('/studentRepet', async function(req, res) {
    let regname = req.query.regname // 'lemon' || undefined
    if (!regname) {
        res.send(
            formatData({
                code: 400,
                msg: 'username is undefined'
            })
        )
    }
    // （2）拿用户名去数据库查找
    let resultArr = await find('student_user', { regname })
    if (resultArr.length > 0) {
        res.send(
            formatData({
                code: 400,
                msg: '用户名已被注册'
            })
        )
    } else {
        res.send(
            formatData({
                code: 200,
                msg: '可以注册该用户名'
            })
        )
    }
})


// 2. 注册，{username，password}
Router.post('/studentReg', async function(req, res) {
    let { regname, regid, regpwd } = req.body
    regpwd = encrypt(regpwd)
    let result = await insert('student_user', { regname, regid, regpwd }) //接受的结果是true或是false
    res.send(
        formatData({
            code: result ? 200 : 400
        })
    )
})


module.exports = Router