// 登录相关接口
const express = require('express')
const Router = express.Router() // 接口路由中间件
const { encrypt, formatData } = require('../utils/index.js')
const { find } = require('../db/index.js')
const jwt = require('jsonwebtoken')



Router.post('/studentLogin', async function(req, res) {
        let { regid, regpwd } = req.body
        regpwd = encrypt(regpwd)
        let resultArr = await find('student_user', { regid, regpwd })
        if (resultArr.length > 0) {
            const token = jwt.sign({
                    _id: resultArr[0]._id
                },
                '2019111209', { expiresIn: '1d' }
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
    // 管理员登录.
Router.post('/manageLogin', async function(req, res) {
    let { manid, manpwd } = req.body
    manpwd = encrypt(manpwd)
    console.log(manid, manpwd)
    let resultArr = await find('manage_user', { manid, manpwd })
    console.log(resultArr)
    if (resultArr.length > 0) {
        const token1 = jwt.sign({
                    // 数据库里的id
                    _id: resultArr[0]._id
                },
                '2011030401', { expiresIn: '1d' }
            )
            // 把数组转换成对象
        let resultObj = resultArr[0]
        console.log(resultObj);

        res.send(
            formatData({
                code: 200,
                data: {
                    token1,
                    resultObj

                },

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
Router.post('/getManageUser', async function(req, res) {
    let manid = req.body.loginManId
    console.log(manid);
    let manageUser = await find('manage_user', { manid })
    console.log(manageUser);
    if (manageUser.length > 0) {
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: manageUser

            }))
    }
})

module.exports = Router