/**
 * 自动化脚本任务配置模块-假数据服务器配置
 * @module path.config.js
 */

let jsonServer  = require('json-server'),
    server      = jsonServer.create(),
    mockFile    = require('../mock/mock.json'),
    router      = jsonServer.router(mockFile),
    middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/user/userMenus'                    : '/api/userMenus',
  '/api/discover/categories/subscribe'     : '/api/subscribe',
  '/api/discover/categories/recommend'     : '/api/recommend',
  '/api/discover/categories/entertainment' : '/api/entertainment'
}));
server.use('/api', router);
server.listen(9090, function () {
    console.log('JSON Server is running......PORT: 9090');
});
