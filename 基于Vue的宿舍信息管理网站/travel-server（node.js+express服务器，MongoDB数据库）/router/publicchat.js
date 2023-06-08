const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { encrypt, formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')
    // submit插入数据
Router.post("/publicSubmit", async function(req, res) {
    let publicList = req.body
    publicList.created = new Date()
    publicList.complete = 'false'
    let result = await insert('student_public', publicList)
    res.send(
        formatData({ code: result === true ? 200 : 400 })
    )
})

// health插入数据
Router.post("/healthSubmit", async function(req, res) {
        // console.log(res.body);
        let healthList = req.body
        console.log(healthList);
        healthList.created = new Date()
            // healthList.complete = 'false'

        let result = await insert('student_health', healthList)
        console.log(result);
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // visitor插入数据
Router.post("/visitorSubmit", async function(req, res) {
    // console.log(res.body);
    let visitorList = req.body
    console.log(visitorList);
    visitorList.created = new Date()
    visitorList.vcomplete = '0'

    let result = await insert('student_visitor', visitorList)
    console.log(result);
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})


// 查询某位学生公物报修的数据
Router.get('/publicList', async function(req, res) {
        let number = req.query.studentId
        console.log(number);
        let publicList = await find('student_public', { number })
            // console.log(publicList)
        if (publicList.length > 0) {
            res.send(
                formatData({
                    code: 200,
                    msg: 'success',
                    data: publicList,
                    total: publicList.length
                }))
        }
    })
    // 查询健康上报的数据
Router.get('/healthList', async function(req, res) {
        let number = req.query.studentId
        console.log(number);
        let healthList = await find('student_health', { number })
        console.log(healthList)
        if (healthList.length > 0) {
            res.send(
                formatData({
                    code: 200,
                    msg: 'success',
                    data: healthList,
                    total: healthList.length
                }))
        }
    })
    // 查询来访登记的数据
Router.get('/visitorList', async function(req, res) {
        let number = req.query.studentId
        console.log(number);
        let visitorList = await find('student_visitor', { number })
            // console.log(visitorList)
        if (visitorList.length > 0) {
            res.send(
                formatData({
                    code: 200,
                    msg: 'success',
                    data: visitorList,
                    total: visitorList.length
                }))
        }
    })
    // 查询学生信息
Router.get('/studentList', async function(req, res) {
    let number = req.query.studentId
    console.log(number);
    let studentList = await find('student', { number })
        // console.log(visitorList)
    if (studentList.length > 0) {
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: studentList,
            }))
    }
})

// 单条数据的查询
Router.get('/publicDetails', async function(req, res) {
    let _id = req.query.id
    console.log(_id);
    let publicDetails = await find('student_public', { _id })
    console.log(publicDetails)
    if (publicDetails.length > 0) {
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: publicDetails,

            }))
    }
})
Router.get('/healthDetails', async function(req, res) {
    let _id = req.query.id
    console.log(_id);
    let healthDetails = await find('student_health', { _id })
    console.log(healthDetails)
    if (healthDetails.length > 0) {
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: healthDetails,

            }))
    }
})
Router.get('/visitorDetails', async function(req, res) {
    let _id = req.query.id
    console.log(_id);
    let visitorDetails = await find('student_visitor', { _id })
    console.log(visitorDetails)
    if (visitorDetails.length > 0) {
        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: visitorDetails,

            }))
    }
})


// 删除数据
Router.get('/publicDelete', async function(req, res) {
    let idsArr = req.query.id.split(',')
    idsArr = idsArr.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_public', { _id: { $in: idsArr } })
    res.send(
        formatData({ code: result === true ? 200 : 400 })
    )
})
Router.get('/healthDelete', async function(req, res) {
    // 单选
    let idsArr = req.query.id.split(',')
    console.log(idsArr); // 将字符串转成数组
    idsArr = idsArr.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_health', { _id: { $in: idsArr } })
        // res.send(`删除景点${result ? '成功' : '失败'}`)
    console.log(result);
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
Router.get('/visitorDelete', async function(req, res) {
    // 单选
    let idsArr = req.query.id.split(',')
    console.log(idsArr); // 将字符串转成数组
    idsArr = idsArr.map(function(item) {
        return ObjectId(item)
    })
    let result = await remove('student_visitor', { _id: { $in: idsArr } })
        // res.send(`删除景点${result ? '成功' : '失败'}`)
    console.log(result);
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})

//更新数据
Router.post("/publicEdit", async function(req, res) {
    let publicEdit = req.body.formData
    let publicEditObj = publicEdit[0]
    let _id = publicEditObj._id
    delete publicEditObj.created
    delete publicEditObj._id
    let result = await update('student_public', { _id }, { $set: publicEditObj });
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
Router.post("/healthEdit", async function(req, res) {
    let healthEdit = req.body.formData
    console.log(healthEdit);
    let healthEditObj = healthEdit[0]
    console.log(healthEditObj);
    let _id = healthEditObj._id
    console.log(_id);
    delete healthEditObj.created
    delete healthEditObj._id
        // let _id = req.body.id
        // console.log(_id);
        // 插入数据库的是一个对象不是数组
    let result = await update('student_health', { _id }, { $set: healthEditObj });
    console.log(result);
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
Router.post("/visitorEdit", async function(req, res) {
    let visitorEdit = req.body.formData
    console.log(visitorEdit);
    let visitorEditObj = visitorEdit[0]
    console.log(visitorEditObj);
    let _id = visitorEditObj._id
    console.log(_id);
    delete visitorEditObj.created
    delete visitorEditObj._id
        // let _id = req.body.id
        // console.log(_id);
        // 插入数据库的是一个对象不是数组
    let result = await update('student_visitor', { _id }, { $set: visitorEditObj });
    console.log(result);
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})
Router.post("/studentEdit", async function(req, res) {
    let studentEdit = req.body.formData
    console.log(studentEdit);
    let studentEditObj = studentEdit[0]
    console.log(studentEditObj);
    let _id = studentEditObj._id
    console.log(_id);
    delete studentEditObj.created
    delete studentEditObj._id
        // let _id = req.body.id
        // console.log(_id);
        // 插入数据库的是一个对象不是数组
    let result = await update('student', { _id }, { $set: studentEditObj });
    console.log(result);
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})

// 登录
Router.post('/login', async function(req, res) {
    let loginList = req.body
    let regpwd = encrypt(loginList.password)
    let regid = loginList.studentId
    let resultArr = await find('student_user', { regid, regpwd })
    if (resultArr.length > 0) {
        res.send(formatData({ code: 200, data: resultArr }))
    } else {
        res.send(formatData({ code: 400 }))
    }
})

module.exports = Router