const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')
    // 获取所有申请数据
Router.get('/getRegister', async function(req, res) {
        // let { data, title, content, build, live, telname, telphone } = req.query
        // console.log(data, title, content, build, live, telname, telphone)
        // 获取所有数据
        let { page, size } = req.query
            // console.log(page, size)
        let build = req.query.manBuild
        console.log(build);

        if (page && size) {
            data = await find('student_visitor', {
                page: Number(page),
                size: Number(size)
            })
        }
        // else {
        //     data = await find('student_visitor')
        // }
        let registerList = await find('student_visitor', { build })
        console.log(registerList)
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: {
                    data: registerList,
                    total: registerList.length
                },

            }))
    })
    // 分页查询
Router.get('/getRegister1', async function(req, res) {
    let { page, size } = req.query
        // console.log(page, size)
    let build = req.query.manBuild
    let vcomplete = req.query.vcomplete
        // console.log(build);

    let query = {}
    build && (query.build = new RegExp(build))
    vcomplete && (query.vcomplete = new RegExp(vcomplete))
    if (page && size) {
        data = await find('student_visitor', query, {
            page: Number(page),
            size: Number(size)
        })
    } else {
        data = await find('student_visitor', query)
    }

    let registerList = await find('student_visitor', { build, vcomplete })
    console.log(registerList)
    res.send(
        formatData({
            code: 200,
            msg: 'success',
            data: {
                data: data,
                total: registerList.length
            },

        }))
})

// 编辑
Router.get('/registerEdit', async function(req, res) {

        // let registerArr = req.query
        let Row = req.query.Row
        console.log(Row);
        let _id = req.query._id
        console.log(_id);
        delete Row.cteated
        delete Row._id
        let result = await update('student_visitor', { _id }, { $set: Row })
            // res.send(`删除景点${result ? '成功' : '失败'}`)
        console.log(result);
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // Router.get('/registerEdit1', async function(req, res) {

//         let registerArr = req.query
//         let Row1 = registerArr.Row1
//         let _id = registerArr._id
//         console.log(_id);
//         console.log(Row1);
//         // delete repairArr.Row
//         // delete repairArr._id
//         let result = await update('student_visitor', { _id }, { $set: Row1 })
//             // res.send(`删除景点${result ? '成功' : '失败'}`)
//         console.log(result);
//         res.send(
//             formatData({
//                 code: result === true ? 200 : 400
//             })
//         )
//     })
// 删除
Router.delete('/registerDelete', async function(req, res) {

    // ids: '1'               '1, 3, 4'
    // 单选
    let ids = req.query.ids.split(',')
    console.log(ids); // 将字符串转成数组
    ids = ids.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_visitor', { _id: { $in: ids } })
        // res.send(`删除景点${result ? '成功' : '失败'}`)
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
module.exports = Router