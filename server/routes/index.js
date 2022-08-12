const router = require('express').Router();
const first = require('./first.routes');
const second = require('./second.routes')

router.use('/api/first', first);
router.use('/api/second', second);

module.exports = router;