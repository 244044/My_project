const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')
    // 获取所有申请数据
Router.get('/getPublicAll', async function(req, res) {
    // let { data, title, content, build, live, telname, telphone } = req.query
    // console.log(data, title, content, build, live, telname, telphone)
    // 获取所有数据
    let { page } = req.query.page
    let number = req.query.loginId
        // console.log(page, size)
    let query = {}
    number && (query.number = new RegExp(number))
    let data
    if (page) {
        data = await find('student_public', query, {
            page: Number(page),
            // size: Number(size)
        })
    } else {
        data = await find('student_public', query)
    }
    let publicList = await find('student_public', { number })
    console.log(publicList)
    res.send(
        formatData({
            code: 200,
            msg: 'success',
            data: publicList,


        }))


})
Router.get('/getPublicAll1', async function(req, res) {

        let { page, size } = req.query
        let number = req.query.loginId
        let complete = req.query.complete
        let query = {}
        number && (query.number = new RegExp(number))
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
        let publicList = await find('student_public', { number, complete })
            // console.log(publicList)
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: {
                    data: data,
                    total: publicList.length
                }


            }))


    })
    // 新增
Router.post("/publicAdd", async function(req, res) {
    let publicDetails = req.body.allData
    let number = req.body.loginId
    publicDetails.created = new Date()
    publicDetails.complete = 'false'
    publicDetails.number = number
    let result = await insert('student_public', publicDetails)
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})

// 编辑
Router.post("/publicEdit", async function(req, res) {
        let publicEditArr = req.body
        let _id = publicEditArr._id
        console.log(_id);
        console.log(publicEditArr);
        delete publicEditArr.created
        delete publicEditArr._id
        let resultEdit = await update('student_public', { _id }, { $set: publicEditArr });
        console.log(resultEdit);
        res.send(
            formatData({
                code: resultEdit === true ? 200 : 400
            })
        )
    })
    // 删除
Router.delete('/publicDelete', async function(req, res) {
    let idsArr = req.query.ids.split(',')
    idsArr = idsArr.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_public', { _id: { $in: idsArr } })
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})

module.exports = Router