const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')
    // 获取所有申请数据
Router.get('/getRepair', async function(req, res) {
    // let { data, title, content, build, live, telname, telphone } = req.query
    // console.log(data, title, content, build, live, telname, telphone)
    // 获取所有数据
    let { page, size } = req.query
        // console.log(page, size)
    let build = req.query.manBuild
    let complete = req.query.complete
        // console.log(complete);
        // console.log(build);
    let query = {}
    build && (query.build = new RegExp(build))
    complete && (query.complete = new RegExp(complete))

    let data
    if (page && size) {
        data = await find('student_public', query, {
            page: Number(page),
            size: Number(size)
        })
    } else {
        data = await find('student_public', query)
    }
    let repairList = await find('student_public', { build })
        // console.log(repairList)
    res.send(
        formatData({
            code: 200,
            msg: 'success',
            data: {
                data: data,
                total: data.length
            }


        }))
})

// 获取repair1的数据
Router.get('/getRepair1', async function(req, res) {
    // 获取所有数据
    let { page, size } = req.query
        // console.log(page, size)
    let build = req.query.manBuild
    let complete = req.query.complete
        // console.log(complete);
        // console.log(build);
    let query = {}
    build && (query.build = new RegExp(build))
    complete && (query.complete = new RegExp(complete))
    let data
    if (page && size) {
        data = await find('student_public', query, {
            page: Number(page),
            size: Number(size)
        })
    } else {
        data = await find('student_public', query)
    }
    let repairList = await find('student_public', { build, complete })
        // console.log(repairList)
    res.send(
        formatData({
            code: 200,
            msg: 'success',
            data: {
                data: data,
                total: repairList.length
            }


        }))
})




// 编辑
Router.get('/repairEdit', async function(req, res) {

        // ids: '1'               '1, 3, 4'
        // 单选
        let repairArr = req.query
        let Row = repairArr.Row
        let _id = repairArr._id
        console.log(_id);
        console.log(Row);
        // delete repairArr.Row
        // delete repairArr._id
        let result = await update('student_public', { _id }, { $set: { complete: 'true' } })
            // res.send(`删除景点${result ? '成功' : '失败'}`)
        console.log(result);
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // 删除
Router.delete('/repairDelete', async function(req, res) {

    // ids: '1'               '1, 3, 4'
    // 单选
    let ids = req.query.ids.split(',')
        // console.log(ids); // 将字符串转成数组
    ids = ids.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_public', { _id: { $in: ids } })
        // res.send(`删除景点${result ? '成功' : '失败'}`)
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
module.exports = Router