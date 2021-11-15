const express = require('express');
const apicache = require('apicache');

const logger = require('../logger');
const { target, requestCacheTime } = require('../config');

const router = express.Router();

let cache = apicache.middleware;

router.all('/', cache(requestCacheTime), async(req, res) => {
    logger.info('Request Recieved: ', req);
    res.redirect(target);
    logger.info('Request redirected');
});

module.exports = router;