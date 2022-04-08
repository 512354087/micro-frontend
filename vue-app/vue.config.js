const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:config=>{
    // 配置不打包 Vue 及 vue-router
    config.externals(["vue","vue-router"])
}
})
