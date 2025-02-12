const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '../dist-site/taro') // 假设你的构建输出目录是 dist-site/taro

fs.rename(
  path.join(distDir, 'index.taro.html'),
  path.join(distDir, 'index.html'),
  (err) => {
    if (err) {
      console.error('重命名文件时出错:', err)
    } else {
      console.log('文件重命名成功')
    }
  }
)
