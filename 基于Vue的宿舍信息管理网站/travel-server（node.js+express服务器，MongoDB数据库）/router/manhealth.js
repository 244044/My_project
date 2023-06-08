const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const express = require('express')
const Router = express.Router() // 接口路由中间件
const { formatData } = require('../utils/index.js')

const { insert, remove, update, find, count } = require('../db/index.js')

Router.get('/manHealthList', async function(req, res) {
    let { page, size, name, number } = req.query
        // console.log(page, size, live, name, grade, college, subject);
    let build = req.query.manBuild
        // console.log(build);
    let query = {}
    name && (query.name = new RegExp(name))
    number && (query.number = new RegExp(number))
    build && (query.build = new RegExp(build))



    let data
    if (page && size) {
        data = await find('student_health', query, {
            page: Number(page),
            size: Number(size)
        })
    } else {
        data = await find('student_health', query)
            // console.log(data);
    }
    // console.log(query);

    // 获取所有景点数
    let allList = await count('student_health', query)
    console.log(allList)

    res.send({
        code: 200,
        msg: 'success',
        data: {
            data: data,
            total: allList
        }


    })
})

// 删除
Router.delete('/manHealthDelete', async function(req, res) {
    // ids: '1'               '1, 3, 4'
    let idsArr = req.query.ids.split(',') // 将字符串转成数组
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

module.exports = Router