const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')


// 根据build来查询数据
Router.get('/getBuildList', async function(req, res) {
        let build = req.query.manBuild
        console.log(build);
        let buildList = await find('student_build', { build })
        console.log(buildList)
        if (buildList.length > 0) {
            res.send(
                formatData({
                    code: 200,
                    msg: 'success',
                    data: buildList,

                }))
        }

    })
    // 具体的数据
Router.get('/getBuildData', async function(req, res) {
        let { room } = req.query
        console.log(room);

        let build = req.query.manBuild
            // console.log(build);
        let query = {}
        room && (query.room = new RegExp(room))
        build && (query.build = new RegExp(build))

        let data

        data = await find('student_build', query)
            // console.log(data);


        // 对data进行处理


        let buildList = await find('student_build', { build })
            // console.log(buildList1);


        res.send(
            formatData({
                code: 200,
                msg: 'success',
                data: data


            }))


    })
    // 删除功能
Router.delete('/buildDelete', async function(req, res) {
        let room = req.query.room
        let build = req.query.build
        let _id = req.query.id
            // console.log(_id);
            // 根据房间号查找对应的房间
        let roomInfo = await find('student_build', { room, build })
            // console.log(roomInfo);
        if (!roomInfo) {
            // 1、如果没有找到对应的房间，返回错误提示
            res.send(formatData({ code: 400, msg: '未找到对应的房间' }))
            return
        }
        // 2、获取房间里的学生信息/是一个数组(student里面的全部信息)
        let students = roomInfo[0].student || []
            // let students = roomInfo.student || []

        console.log(students);
        // 3、找到要删除的学生信息在数组中的索引位置
        let index = students.findIndex(item => item._id.toString() === _id)
        console.log(index);
        if (index < 0) {
            res.send(formatData({ code: 400, msg: '未找到对应的学生信息' }))
            return
        }
        // 4、使用$pull操作符删除该学生信息
        let result = await update('student_build', { room, build }, { $pull: { student: { _id: ObjectId(_id) } } })
            // let result = await remove('student_build', { room, build }, { $pull: { student: { _id: ObjectId(_id) } } })

        console.log(result);
        res.send(
            formatData({
                code: result === true ? 200 : 400
            })
        )
    })
    // 新增或者编辑
Router.post('/buildAdd', async function(req, res) {
    let buildList = req.body.form
    let room = req.body.room
    let _id = req.body._id
    let build = req.body.build1
    let roomInfo = await find('student_build', { room, build })
    console.log(roomInfo);
    if (!roomInfo) {
        res.send(formatData({ code: 400, msg: '未找到对应的房间' }))
        return
    }
    let students = roomInfo.student || []
    console.log(students);
    let students2 = roomInfo[0].student || []
    console.log(students2);
    let result
    if (_id) {
        let index = students2.findIndex(item => item._id.toString() === _id)
        console.log(index);
        if (index < 0) {
            res.send(formatData({ code: 400, msg: '未找到对应的学生信息' }))
            return
        }
        students2[index] = buildList
        result = await update('student_build', { room, build }, { $set: { student: students2 } })
    } else {
        const newObjectId = new ObjectId();
        let newStudent = {...buildList, _id: newObjectId }
        students.push(newStudent)
        let students1 = students[0]
        result = await update('student_build', { room, build }, { $push: { student: students1 } })
    }
    res.send(formatData({ code: result === true ? 200 : 400 }))
})

module.exports = Router