const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    publicPath: '/vue-hw-8-final-work',
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@/assets/scss-modules/styles.scss";',
            },
        },
    },
    transpileDependencies: true,
};