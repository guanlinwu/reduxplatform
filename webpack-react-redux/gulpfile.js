'use strict';

var gulp             = require('gulp'),
    gutil            = require('gulp-util'),
    webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    mockServer       = require('./mock.server.js'),

    /** @type {Object} webpack配置 */
    WebpackConfig    = require('./webpack.config'),
    /** @type {Object} 路径配置 */
    pathConfig       = require('./path.config'),
    /** @type {string} 端口 */
    ports            = pathConfig.ports,
    /** @type {string} host */
    host             = pathConfig.host;


/**
 * 普通webpack打包
 * @type task
*/
gulp.task('webpack', function(callback) {
    webpack(WebpackConfig, function(error, stats) {
        if (error) {
            throw new gutil.PluginError('webpack', error);
        }
        gutil.log('[webpack]', stats.toString());

        callback();
    });
});

/**
 * webpack打包-web-dev-server模式
 */
gulp.task('server', function () {
    mockServer();

    var config          =   WebpackConfig,
        compiler        =    {},
        devServer       =    {};

    config.devtool      = 'eval';
    for(var entryItem in config.entry) {
        if(entryItem == 'vendor') {
            continue;
        }
        config.entry[entryItem].unshift('webpack-hot-middleware/client','webpack/hot/dev-server', 'webpack-dev-server/client?http://' + host + ':' + ports);
    }
console.log(config.output.publicPath);
    compiler           = webpack(config);
    devServer          = new WebpackDevServer(compiler, {
        // contentBase        : config.output.path,
        publicPath         : config.output.publicPath,
        hot                : true,
        stats              : config.devServer.stats,
        proxy              : config.devServer.proxy,
        noInfo             : false,
        // quiet              : true, //不显示进程
        historyApiFallback : true
    });

    devServer.listen(ports, host, function(err) {
        if(err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }

        gutil.log('[webpack-dev-server]','http://' + host + ':' + ports + '/webpack-dev-server');
    });
});

/**
 * 默认gulp流程
*/
gulp.task('default', ['server']);
gulp.task('develop', ['server']);

/**
 * 非服务器流程
*/
gulp.task('release', ['webpack']);