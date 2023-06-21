const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const payRouter = require('./payRouter')
const dishRouter = require('./productRouter')
const reviewRouter = require('./reviewRouter')


router.use('/user', userRouter)
router.use('/pay', payRouter)
router.use('/product', dishRouter)
router.use('/review', reviewRouter)



module.exports = router