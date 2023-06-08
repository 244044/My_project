const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')
    // 获取所有申请数据

Router.get('/getVisitorAll', async function(req, res) {
    // let { data, title, content, build, live, telname, telphone } = req.query
    // console.log(data, title, content, build, live, telname, telphone)
    // 获取所有数据
    let { page, size } = req.query
    let number = req.query.loginId
        // console.log(page, size)

    if (page && size) {
        data = await find('student_visitor', {
            page: Number(page),
            size: Number(size)
        })
    }
    // else {
    //     data = await find('student_visitor')
    // }
    let visitorList = await find('student_visitor', { number })
    console.log(visitorList)
    if (visitorList.length > 0) {
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: visitorList,

            }))
    }

})
Router.get('/getVisitorAll1', async function(req, res) {
        let { page, size } = req.query
        let number = req.query.loginId
        let vcomplete = req.query.vcomplete
            // console.log(page, size)
        let query = {}
        number && (query.number = new RegExp(number))
        vcomplete && (query.vcomplete = new RegExp(vcomplete))
        if (page && size) {
            data = await find('student_visitor', query, {
                page: Number(page),
                size: Number(size)
            })
        } else {
            data = await find('student_visitor', query)
        }
        let visitorList = await find('student_visitor', { number, vcomplete })
        console.log(visitorList)

        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: {
                    data: data,
                    total: visitorList.length
                }

            }))


    })
    // 新增
Router.post("/visitorAdd", async function(req, res) {
        let visitorDetails = req.body.allData
        let number = req.body.loginId
        console.log(visitorDetails);
        visitorDetails.created = new Date()
        visitorDetails.vcomplete = '0'
        visitorDetails.number = number
        let result = await insert('student_visitor', visitorDetails)
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // 编辑
Router.post("/visitorEdit", async function(req, res) {
        let visitorEditArr = req.body
        let _id = visitorEditArr._id
        console.log(_id);
        console.log(visitorEditArr);
        delete visitorEditArr.created
        delete visitorEditArr._id
        let resultEdit = await update('student_visitor', { _id }, { $set: visitorEditArr });
        console.log(resultEdit);
        res.send(
            formatData({
                code: resultEdit === true ? 200 : 400
            })
        )
    })
    // 删除
Router.delete('/visitorDelete', async function(req, res) {

    // ids: '1'               '1, 3, 4'
    // 单选
    let idsArr = req.query.ids.split(',')
    console.log(idsArr); // 将字符串转成数组
    idsArr = idsArr.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_visitor', { _id: { $in: idsArr } })
        // res.send(`删除景点${result ? '成功' : '失败'}`)
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
module.exports = Router