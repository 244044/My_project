const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId
const MongoClient = mongodb.MongoClient // 连接客户端对象

const { DB_NAME } = require('../config/index.js')

//1. 连接mongoDB


function connect() {
    return new Promise(function(resolve, reject) {

        MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client) {
            if (err) throw err
                // 2.连接数据库，无则自动创建
            let db = client.db(DB_NAME)
            resolve({
                client,
                db
            })

        })
    })
}

/**
 * insert 插入（增加）
 * @param {*} colName 集合名
 * @param {*} data 数据，可以是数组（多条），可以是对象（一条）
 * @returns
 */
/*
db跟client怎么拿到
*/

async function insert(colName, data) {
    let { client, db } = await connect() // 等的是promise对象的结果
    let col = db.collection(colName)
        // 4.操作文档

    let result
    try {
        if (Array.isArray(data)) {
            await col.insertMany(data)
        } else {
            await col.insertOne(data)
        }
        result = true
    } catch (err) {
        result = false
    }
    // 5. 关闭连接, 释放资源
    client.close()
    return result // new Promise(function(resolve){resolve(result)})
}

/**
 * remove 删除
 * @param {*} colName 集合名
 * @param {*} query 条件，满足条件的都被删掉
 * @returns
 */
async function remove(colName, query) {
    let { client, db } = await connect()
    let col = db.collection(colName)

    if (query && query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }

    let result
    try {
        await col.deleteMany(query)
        result = true
    } catch (err) {
        result = false
    }
    client.close()
    return result
}

/**
 * update 更新
 * @param {*} colName 集合名
 * @param {*} query 语句
 * @param {*} newData 数据 {$set: 数据对象}
 * @returns
 */
async function update(colName, query, newData) {
    let { db, client } = await connect()
    let col = db.collection(colName)

    if (query && query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }

    let result
    try {
        await col.updateMany(query, newData)
        result = true
    } catch (err) {
        result = false
    }
    client.close()
    return result
}

/**
 * find 查询
 * @param {*} colName  集合名
 * @param {*} query 查询语句,{}代表查询所有
 * @param {*} filterObj 筛选{page, size}
 * @returns
 */
async function find(colName, query, filterObj = {}) {
    // 1. 连接数据库
    let { db, client } = await connect()
    let col = db.collection(colName)

    if (query && query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }


    let result = await col.find(query)

    // 第3页， 每页有两条
    let page = filterObj.page
    let size = filterObj.size
    if (page && size) {
        result.skip((page - 1) * size).limit(size)
    }

    let data = await result.toArray()
    console.log(data)
        // 关闭连接
    client.close()

    return data // 数组
}

async function count(colName, query) {
    let { client, db } = await connect();
    let col = db.collection(colName);

    if (query && query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id);
    }

    try {
        const count = await col.countDocuments(query);
        return count;
    } catch (err) {
        console.error('Error while counting documents:', err);
        throw err;
    } finally {
        client.close();
    }
}
module.exports = {
    insert,
    remove,
    update,
    find,
    count
}