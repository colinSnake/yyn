/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Magic
 * @Date: 2021-06-04 15:28:27
 * @LastEditors: Magic
 * @LastEditTime: 2021-06-06 14:23:28
 */

const { override, adjustStyleLoaders, fixBabelImports, addWebpackAlias, addLessLoader }  = require("customize-cra");
const path = require("path");
module.exports = {
    webpack: override(
        // 配置指定文件为sass全局文件，可以不用导入就可以使用
        adjustStyleLoaders(rule => {
            if (rule.test.toString().includes('scss')) {
                rule.use.push({
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                            resources: [
                                './src/assets/css/_variables.scss',
                            ]
                    }
                });
            }
        }),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addLessLoader({
            lessOptions:{
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': 'red'
                },
            }
        }),
        addWebpackAlias({
            '@': path.resolve('./src')
        })
    ),
    // devServer: overrideDevServer()
}
