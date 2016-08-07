/**
 * 自动化脚本任务配置模块-路径配置
 * @module path.config.js
 */
'use strict';

let fs          = require('fs'),
    path        = require('path'),
    node_modules= path.resolve(__dirname, 'node_modules'),
    /** @type {Object} 项目配置 */
    PACKAGE     = JSON.parse(fs.readFileSync('./package.json')),
    /** @type {string} 公共资源路径 */
    srcPath     = 'src',
    /** @type {string} 编译结果路径 */
    assPath     = 'assets',
    /** @type {string} js文档路径   */
    docFile     = 'document',
    /** @type {string} 目标结果路径 */
    desPath     = convertPath(path.join(assPath, PACKAGE.version)),
    /** @type {Array} 应用资源目录或者template模板入口目录 */
    htmlEntries = [],
    /** @type {string} 应用资源路径入口 */
    jsEntries   = {
        index: ['./src/main'],
        vendor: ['zepto', 'react', 'lodash', 'react-dom']
        // vendors : ['zepto']//引进公共lib的js
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        // page2: ["./entry1", "./entry2"]
    },
    /** @type {Object} 配置文件引用路径别名 */
    alias       = {
        'src'       : path.resolve(__dirname, 'src'),
        'scripts'   : path.resolve(__dirname, 'src/scripts'),
        'styles'    : path.resolve(__dirname, 'src/styles'),
        'panels'    : path.resolve(__dirname, 'src/panels'),
        // 'jquery'    : path.join(node_modules, 'jquery/dist/jquery'),
        'zepto'     : path.join(__dirname, 'src/scripts/libraries/zepto'),
        'react'     : path.join(node_modules, 'react/react'),
        'react-dom' : path.join(node_modules, 'react-dom/dist/react-dom'),
        'lodash'    : path.join(node_modules, 'lodash/lodash')
    },
    /** @type {string} 项目信息文件 */
    mainFile    = path.join(assPath, 'sources.json'),
    /** @type {number} 端口 */
    ports       = 8080,
    /** @type {string} host */
    host        = '0.0.0.0';

/**
 * 转换路径反斜杠
 * @function
 * @param  {String} path 路径
 */
function convertPath(path) {
    return path.replace(/\\/g, '/');
}

/**
 * 导出配置
 */
module.exports =  {
    /** @type {Object} 项目配置 */
    pkg              : PACKAGE,
    /** @type {string} 公共资源路径 */
    srcPath          : srcPath,
    /** @type {string} 编译结果路径 */
    assPath          : assPath,
    /** @type {string} js文档路径   */
    docFile          : docFile,
    /** @type {string} 目标结果路径 */
    desPath          : desPath,
    /** @type {string} 项目信息文件 */
    mainFile         : mainFile,
    /** @type {Array} 应用资源目录或者template模板入口目录 */
    htmlEntries      : htmlEntries,
    /** @type {string} 应用资源路径入口 */
    jsEntries        : jsEntries,
    /** @type {Object} 配置文件引用路径别名 */
    alias            : alias,
    /** @type {number} 端口 */
    ports            : ports,
    /** @type {string} host */
    host             : host
};
