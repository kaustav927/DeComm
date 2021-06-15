const Koa = require('koa');
const Router = require('@koa/router')
const cors= require('@koa/cors')
const ethers = require('ethers')
const Payments = require('../build/contracts/Payments.json')
const{Payment}=require('./database.js')

const app = new Koa();
const router = new Router();

router.get('/api/getPaymentId/:itemId',async ctx => {
    ctx.body='hello world';
})

app.use(cors()).use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Server running on port 4000');
})