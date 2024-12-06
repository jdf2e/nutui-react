const fs = require('fs')
const path = require('path')

// 获取当前目录
const currentDir =
  '/Users/huxiyang3/Desktop/NutUI/NutUI-React/3.0/nutui-react/cypress/e2e/h5'

// 遍历当前目录下的所有文件
fs.readdir(currentDir, (err, files) => {
  if (err) {
    console.error('无法读取目录:', err)
    return
  }

  // 过滤出所有的 .js 文件
  const jsFiles = files.filter((file) => path.extname(file) === '.js')

  jsFiles.forEach((file) => {
    const filePath = path.join(currentDir, file)

    // 读取文件内容
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`无法读取文件 ${file}:`, err)
        return
      }

      // 使用正则表达式进行替换
      const result = data.replace(
        /componentTest\('([^']*)',\s*\(\)\s*=>\s*\{\}\)/g,
        "it('$1', () => {visitH5Demo('$1')})"
      )

      // 将替换后的内容写回文件
      fs.writeFile(filePath, result, 'utf8', (err) => {
        if (err) {
          console.error(`无法写入文件 ${file}:`, err)
        } else {
          console.log(`文件 ${file} 已更新`)
        }
      })
    })
  })
})
