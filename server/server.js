const http = require('http')
const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('kcors')
const port = 5000

const app = new Koa()
app.use(koaBody())
app.use(cors());

const modules = require('./src/modules')
modules(app)

app.listen(port)

console.log(`Server listening on port ${port}`)

module.exports = app