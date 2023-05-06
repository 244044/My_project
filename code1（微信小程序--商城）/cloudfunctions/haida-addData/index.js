// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 获取数据引用
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  //return:调用云函数时反回的数据
  // await：确保获取到数据后在返回数据
  // collection（集合名称）：获取集合引用
  // add（），添加数据的方法
  return await db.collection('haida-data').add({
    data:event
  })

  
}