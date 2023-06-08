const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const express = require('express')
const Router = express.Router() // 接口路由中间件
const { formatData } = require('../utils/index.js')

const { insert, remove, update, find, count } = require('../db/index.js')
Router.get('/studentList', async function(req, res) {
        let { page, size, live, name, grade, college, subject } = req.query
            // console.log(page, size, live, name, grade, college, subject);
        let build = req.query.manBuild
            // console.log(build);
        let query = {}
            // live && (query.live = new RegExp(live))
            // name && (query.name = new RegExp(name))
            // grade && (query.grade = new RegExp(grade))
            // college && (query.college = new RegExp(college))
            // subject && (query.subject = new RegExp(subject))
            // build && (query.build = new RegExp(build))
        if (live) query.live = new RegExp(live);
        if (name) query.name = new RegExp(name);
        if (grade) query.grade = new RegExp(grade);
        if (college) query.college = new RegExp(college);
        if (subject) query.subject = new RegExp(subject);
        if (build) query.build = new RegExp(build);


        let data
        if (page && size) {
            data = await find('student', query, {
                page: Number(page),
                size: Number(size)
            })
        } else {
            data = await find('student', query)
                // console.log(data);
        }
        // console.log(query);


        // let allList = await find('student', { build })
        let allList = await count('student', query)
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
Router.delete('/studentDelete', async function(req, res) {
    // ids: '1'               '1, 3, 4'
    let idsArr = req.query.ids.split(',') // 将字符串转成数组
    idsArr = idsArr.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student', { _id: { $in: idsArr } })

    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})

module.exports = Router