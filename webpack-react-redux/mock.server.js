/**
 * 自动化脚本任务配置模块-假数据服务器配置
 * @module path.config.js
 */
'use strict';

let jsonServer  = require('json-server'),
    server      = jsonServer.create(),
    router      = jsonServer.router('./mock/mock.json'),
    middlewares = jsonServer.defaults();

module.exports = function() {
    server.use(middlewares);
    server.use(router);
    server.listen(9090, function () {
        console.log('JSON Server is running......');
    });
};
