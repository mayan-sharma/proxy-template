const cors = require('cors');
const router = require('./routes')
const express = require('express');
const rateLimit = require('express-rate-limit');
const { port, requestsLimit, requestsLimitTime } = require('./config');

const app = express();

const limiter = rateLimit({
    windowMs: requestsLimitTime,
    max: requestsLimit
});

app.use(cors());
app.use(limiter);
app.use('/', router);

app.listen(port, () => console.log(`Proxy server running on port ${port}`));