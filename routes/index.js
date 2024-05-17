const router = require('express').Router();
const htmlroute= require('./html-routes')
const apiroute= require('./api-routes')

router.use('/', htmlroute)
router.use('/api', apiroute)


module.exports = router;