module.exports = {
  // 基本路径
  publicPath: "./",
  // 构建时的输出的目录
  outputDir: "dist",
  // 放置静态资源的目录
  assetsDir: "static",
  // html的输出路径
  indexPath: "index.html",
  // 文件名哈希
  filenameHashing: true,
  devServer: {
    port: 3000,
    open: true
  }
}
