// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 获取数据引用
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 //doc()查找对应_id的数据，只会查找一条数据
 //update()修改数据
 return await db.collection('haida-data').doc(event.id).update({
   data:event.newData
 }) 
}