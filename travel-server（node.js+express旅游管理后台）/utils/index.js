const crypto = require('crypto')
/**
 * formatData 格式化返回值
 */
function formatData(obj = {}) {
  // 允许obj为{}， code默认为200
  let { code = 200, msg, data = {} } = obj
  if (code === 200 && msg === undefined) {
    msg = 'success'
  } else if (code === 400 && msg === undefined) {
    msg = 'fail'
  }
  return {
    code: code,
    msg: msg,
    data: data
  }
}
// 加密
function encrypt(data, { algo = 'sha256', output = 'hex' } = {}) {
  const hash = crypto.createHash(algo)
  hash.update(data)
  return hash.digest(output)
}
module.exports = {
  formatData: formatData,
  encrypt
}
