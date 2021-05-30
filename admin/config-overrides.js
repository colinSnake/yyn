/*
 * @,@Descripttion: ,: 
 * @,@version: ,: 
 * @,@Author: ,: Magic
 * @,@Date: ,: 2021-05-30 23:43:52
 * @,@LastEditors: ,: Magic
 * @,@LastEditTime: ,: 2021-05-31 00:18:55
 */

const { override, adjustStyleLoaders }  = require("customize-cra");
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
        })
    ),
    // devServer: overrideDevServer()
}
