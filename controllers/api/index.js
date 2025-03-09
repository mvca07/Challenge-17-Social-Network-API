const router = require('express').Router();
const thoughtRoute = require('./thoughts');
const userRoute = require('./users');

router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);

module.exports = router;