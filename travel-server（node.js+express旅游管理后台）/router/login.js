// 登录相关接口
const express = require('express')
const Router = express.Router() // 接口路由中间件
const { encrypt, formatData } = require('../utils/index.js')
const { find } = require('../db/index.js')
const jwt = require('jsonwebtoken')



Router.post('/userLogin', async function(req, res) {
    let { username, password } = req.body
    password = encrypt(password)
    let resultArr = await find('user', { username, password })
    console.log(username, password, resultArr)
    if (resultArr.length > 0) {
        const token = jwt.sign({
                // 数据库里的id
                _id: resultArr[0]._id
            },
            'lemon', { expiresIn: '1d' }
        )
        res.send(
            formatData({
                code: 200,
                data: {
                    token
                }
            })
        )
    } else {
        res.send(
            formatData({
                code: 400
            })
        )
    }
})

module.exports = Router