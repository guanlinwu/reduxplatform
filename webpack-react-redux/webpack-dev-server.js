/**
 * 自动化脚本任务配置模块-webpack配置
 * @module webpack.config.js
 */
'use strict';
var webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    configPath       = require('./path.config'),
    config           = require('./webpack.config');

for(var entryItem in config.entry) {
    if(entryItem == 'vendor') {
        continue;
    }
    config.entry[entryItem].unshift('webpack/hot/dev-server', 'webpack-dev-server/client?http://' + configPath.host + ':' + configPath.ports);
}
new WebpackDevServer(webpack(config), {
    contentBase        : config.output.path,
    publicPath         : config.output.publicPath,
    hot                : true,
    stats              : config.devServer.stats,
    proxy              : config.devServer.proxy,
    noInfo             : false,
    historyApiFallback : true
    // quiet              : true //不显示进程
}).listen(configPath.ports, configPath.host, function () {
    console.log('Webpack Dev Server listening on port ' + configPath.ports);
    console.log('http://localhost:' + configPath.ports + '/webpack-dev-server');
});
