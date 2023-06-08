const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')

Router.post('/healthRepet', async function(req, res) {
    let number = req.body.loginId // 'lemon' || undefined
    console.log(number);
    if (!number) {
        res.send(
            formatData({
                code: 400,
                msg: 'loginId is undefined'
            })
        )
    }
    // （2）拿用户名去数据库查找
    let resultArr = await find('student', { number })
    console.log(resultArr);

    if (resultArr.length > 0) {
        res.send(
            formatData({
                code: 200,
                data: resultArr
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

// 新增
Router.post("/healthAdd", async function(req, res) {
        let healthDetails = req.body
        healthDetails.created = new Date()
        let result = await insert('student_health', healthDetails)
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // 查询：获取所有数据
Router.get('/getHealthAll', async function(req, res) {
        let { page, size } = req.query
        let number = req.query.loginId
            // console.log(number);
        let query = {}
        number && (query.number = new RegExp(number))
        let data
        if (page && size) {
            data = await find('student_health', query, {
                page: Number(page),
                size: Number(size)

            })
        } else {
            data = await find('student_health', query)
        }

        let healthList = await find('student_health', { number })
            // console.log(healthList)
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: {
                    data: data,
                    total: healthList.length
                }


            }))


    })
    // 根据build来查询数据
Router.get('/getHealthBuild', async function(req, res) {

        let build = req.query.manBuild
        console.log(build);
        let healthList = await find('student_health', { build })
            // console.log(healthList)
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: healthList,
                total: healthList.length
            }))
    })
    // 删除：
Router.delete('/healthDelete', async function(req, res) {

        // ids: '1'               '1, 3, 4'
        // 单选
        let idsArr = req.query.ids.split(',')
        console.log(idsArr); // 将字符串转成数组
        idsArr = idsArr.map(function(item) {
            return ObjectId(item)
        })
        let result = await remove('student_health', { _id: { $in: idsArr } })
            // res.send(`删除景点${result ? '成功' : '失败'}`)
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // 编辑
Router.post("/healthEdit", async function(req, res) {
    let healthEditArr = req.body
    let _id = healthEditArr._id
    console.log(_id);
    console.log(healthEditArr);
    delete healthEditArr.created
    delete healthEditArr._id
    let resultEdit = await update('student_health', { _id }, { $set: healthEditArr });
    console.log(resultEdit);
    res.send(
        formatData({
            code: resultEdit === true ? 200 : 400
        })
    )
})

module.exports = Router