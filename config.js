module.exports = {
    port: 5000, // port of proxy server
    target: '', // target url
    requestsLimit: 100, // no of requests
    requestsLimitTime: 10 * 1000 * 60 * 10, // 10 minutes (ms)
    requestCacheTime: '2 minutes' // cache time in english
}