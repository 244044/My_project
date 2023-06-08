const express = require('express')
const Router = express.Router() // 接口路由中间件
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const { encrypt, formatData } = require('../utils/index.js')
const { insert, remove, update, find } = require('../db/index.js')

// Router.post('/personalRepet', async function(req, res) {
//         let number = req.body.loginId // 'lemon' || undefined
//         console.log(number);
//         if (!number) {
//             res.send(
//                 formatData({
//                     code: 400,
//                     msg: 'loginId is undefined'
//                 })
//             )
//         }
//         // （2）拿用户名去数据库查找
//         let resultArr = await find('student', { number })
//         console.log(resultArr);

//         if (resultArr.length > 0) {
//             res.send(
//                 formatData({
//                     code: 200,
//                     data: resultArr
//                 })
//             )
//         } else {
//             res.send(
//                 formatData({
//                     code: 400

//                 })
//             )
//         }
//     })
// 新增和编辑的接口
Router.post('/getPersonal', async function(req, res) {
    let personalList = req.body
    let _id = personalList._id
    let result
    if (_id) {
        // 编辑
        delete personalList.created
        delete personalList._id
        console.log(personalList)
        result = await update('student', { _id }, { $set: personalList })
    } else {
        // 新增
        personalList.created = new Date()
        result = await insert('student', personalList)
    }
    res.send(
        formatData({
            code: result === true ? 200 : 400
        })
    )
})

// 修改密码
Router.post("/changePwd", async function(req, res) {
    // 获取数据
    let regid = req.body.loginId
    let oldPwd = req.body.oldPwd
    let newPwd = req.body.newPwd
        // console.log(regid, oldPwd, newPwd);
        // oldPwd = encrypt(oldPwd)
        // newPwd = encrypt(newPwd)
        // console.log(oldPwd);
        // 获取学生的信息
    let student = await find('student_user', { regid })
        // console.log(student);
        // console.log(student.regpwd);
        // 验证旧密码是否正确
    if (encrypt(oldPwd) !== student[0].regpwd) {
        res.send(
            formatData({
                code: 400,
                msg: '密码错误，请再次输入密码'
            })
        )
        return false;
    } else if (encrypt(newPwd) === student[0].regpwd) {
        // 验证新密码与旧密码是否重复
        formatData({
            code: 400,
            msg: '密码重复，请重新输入密码'
        })
        return false;
    } else {
        let pwdUpdata = await update('student_user', { regid }, { $set: { regpwd: encrypt(newPwd) } });
        res.send(
            formatData({
                code: pwdUpdata === true ? 200 : 400
            })
        )
    }







})


module.exports = Router