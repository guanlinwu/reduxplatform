/**
 * 自动化脚本任务配置模块-webpack配置
 * @module webpack.config.js
 */
'use strict';

var path              = require('path'),
    webpack           = require('webpack'),
    configPath        = require('./path.config');


/**
 * webpack插件
 */
var CleanPlugin       = require('clean-webpack-plugin'), //清除文件
    ExtractTextPlugin = require('extract-text-webpack-plugin'), //提取器
    HtmlWebpackPlugin = require('html-webpack-plugin'); //结构模板抽离整合

/**
 * 配置插件
 * @function
 */
function plugins(config) {
    let desPath     = config.desPath,
        mainFile    = config.mainFile,
        docFile     = config.docFile,
        plugins     = [];

    plugins = [
        // 清除旧文件
        new CleanPlugin(desPath),
        new CleanPlugin(mainFile),
        new CleanPlugin(docFile),
        // 允许错误不打断程序
        new webpack.NoErrorsPlugin(),
        //提取公共部分js
        new webpack.optimize.CommonsChunkPlugin({
            name          : 'vendor',//这里需要优化，这样写是为了统一样式路径
            chunkNames    : ['vendor'],
            chunkFilename : '[name].[chunkhash:5].chunk.js',// 添加 chunkFilename
            filename      : 'public/scripts/[name].js'//导出的文件的名称
        })
    ];
    plugins = plugins.concat(findHtmlEntries());
    /**
     * develop开发模式
     */
    // if (environment == 'develop') {
    plugins = plugins.concat([
        new webpack.optimize.DedupePlugin(),
        //提取独立样式css
        // new ExtractTextPlugin('[name]/styles/index.css'),
        new ExtractTextPlugin('styles/index.css', { allChunks: true }),
        //热模块
        new webpack.HotModuleReplacementPlugin()
    ]);

    /**
     * 配置html模板文件
     * @function
     */
    function findHtmlEntries() {
        var _plugins = [];

        var conf = {
            template : 'src/index.html',
            hash     : false,
            inject   : 'body',
            favicon  : 'favicon.ico',
            filename : '../index.html'
        };

        conf.chunks = ['vendor', 'index'];

        _plugins.push(
            new HtmlWebpackPlugin(conf)
        );

        return _plugins;
    }

    return plugins;
}

/**
 * 配置webpack
 * @function
 */
function webpackConfig(config) {
    var desPath     = config.desPath,       /** @type {string} 编译结果路径 */
        selfAlias   = config.alias,         /** @type {Object}配置文件引用路径别名 */
        jsEntries   = config.jsEntries;     /** @type {Object}入口文件路径 */

    return {
        entry: jsEntries,
        output: {
            // path: '/assets',
            path: path.join(__dirname, desPath),
            publicPath : '/' + desPath + '/',//如果是开启服务器
            // publicPath : './',//如果是开启服务器
            filename: 'scripts/[name].js',
            chunkFilename: '[name].[chunkhash:5].chunk.js'
        },
        module: {
            //webpack 将不再扫描这个文件中的依赖
            noParse: ['zepto'],
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style', 'css!sass') //一个s的
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                },
                {
                    test:   /\.(png|gif|jpe?g|svg)$/i,
                    // loaders: [
                    //     'url?limit=5120&name=public/panels/[name]-[hash:8].[ext]',
                    //     'image?{bypassOnDebug: true, progressive: true, optimizationLevel: 3, pngquant: {quality: "60-70", speed: 4}}'
                    // ]
                    loaders: [
                        'url?limit=5120&name=public/panels/[name]-[hash:8].[ext]'
                    ]
                }
            ]
        },
        // postcss: function () {
        //     return [require('autoprefixer')];
        // },
        plugins: plugins(config),
        resolve: {
            //省略后缀
            extensions: ['', '.jsx', '.js','.scss', '.html', '.png', '.jpg', 'jpeg', '.svg', '.gif', '.json'],
            //别名
            alias: selfAlias
        },
        devServer: {
            stats: {
                inline: true,
                cached: false,
                colors: true
            },
            proxy: {
                '/api/*': {
                    target: 'http://localhost:9090'
                }
            }
        }
    };
}

module.exports =  webpackConfig(configPath);