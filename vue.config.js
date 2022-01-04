module.exports = {
  filenameHashing: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
}
