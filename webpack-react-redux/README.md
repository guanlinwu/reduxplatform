一 开发命令
1 $ webpack
    正常执行工程化编译
2 $ webpack --display-modules --display-chunks
    正常执行工程化编译的同时，显示隐藏加载的模块和关联的模块
3 $ webpack --watch
    自动监视更改您的文件，并根据需要重新编译

4 $ env.NODE_ENV = 'production' webpack
    生产环境下，执行工程化编译

5 $ webpack --display-error-details

6 $ webpack-dev-server --inline --hot
    http://localhost:8080/webpack-dev-server/

7 $ webpack --profile --json > stats.json
    生成一份分析报告

$ webpack // 最基本的启动webpack方法
$ webpack -w // 提供watch方法，实时进行打包更新
$ webpack -p // 对打包后的文件进行压缩，提供production
$ webpack -d // 提供source map，方便调试。

8 实时刷新
webpack-dev-server --inline --hot
http://localhost:8080/webpack-dev-server

9 利用gulp
（1）开启服务器并执行编译：gulp webpack-dev-server，打开链接：
    http://localhost:8080/webpack-dev-server

