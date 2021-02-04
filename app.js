// 导入express模块
const express = require('express')
// 创建app
const app = express()
// 开启服务器并配置端口
app.listen(3007, () => console.log('大事件服务器启动了'))

// 配置应用级的配置
// 应用级配置使用cors模块,允许跨域访问
const cors = require('cors')
app.use(cors())
// 接收 urlencoded 类型的请求体 post方式的查询字符串参数
app.use(express.urlencoded({ extended: false }))
// 开放静态资源 -- 上传的文章封面图片所在的目录需要开放
app.use(express.static('./uploads'))
// 配置解密token和不需要验证token路由
const expressJWT = require('express-jwt')
app.use(expressJWT({ secret: 'bigevent-9760', algorithms: ['HS256'] }).unless({ path: /^\/api/ }))

// 登录注册
app.use('/api', require('./routers/login'))
// 个人中心
app.use('/my', require('./routers/user'))
// 文章分类
app.use('/my/article', require('./routers/category'))
// 文章
app.use('/my/article',require('./routers/article'))