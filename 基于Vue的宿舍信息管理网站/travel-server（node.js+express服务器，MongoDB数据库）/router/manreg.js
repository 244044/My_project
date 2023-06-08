// 注册相关接口
const express = require('express')
const Router = express.Router() // 接口路由中间件
const { find, insert } = require('../db/index.js')
const { formatData, encrypt } = require('../utils/index.js')
Router.get('/manageRepet', async function(req, res) {
    let manname = req.query.manname // 'lemon' || undefined
    if (!manname) {
        res.send(
            formatData({
                code: 400,
                msg: 'manname is undefined'
            })
        )
    }
    // （2）拿用户名去数据库查找
    let resultArr = await find('manage_user', { manname })
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
Router.post('/manageReg', async function(req, res) {
    let { manname, manid, manpwd, build } = req.body
    console.log(manname, manid, manpwd, build);
    manpwd = encrypt(manpwd)
    let result = await insert('manage_user', { manname, manid, manpwd, build }) //接受的结果是true或是false
    res.send(
        formatData({
            code: result ? 200 : 400
        })
    )
})


module.exports = Router