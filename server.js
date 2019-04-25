const express = require('express')
const jwt = require('jsonwebtoken') // 用来生成token的
const bodyParser = require('body-parser') // 解析请求体的
const app = express()
let whiteList = ['http://localhost:8081', 'http://192.168.12.207:8081']; // 设置白名单，允许哪些地址跨域请求
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 设置cros跨域头
app.use((req, res, next) => {
  if (whiteList.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,TOKEN') /** 这里的写法一定要注意 */
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS')
    res.setHeader('Access-Control-Max-Age', '10')
    res.setHeader('Access-Control-Allow-Credentials', true)
    // res.setHeader('Access-Control-Expose-Headers', 'TOKEN')
    if (req.method === 'options') { // options是预请求，不需要做任何处理
      res.end();
    }
  }
  next();
})
let secret = 'vue-element-admin' // 加密的秘钥
app.post('/user/login', (req, res) => {
  let {username, password} = req.body;
  let token = jwt.sign({username, password}, secret, {expiresIn: '1h'})
  console.log(token);
  res.send({code: 0, data: {token}, message: 'success'})
})

app.listen(3000, function () {
  console.log(`3000 port is running!`)
})
