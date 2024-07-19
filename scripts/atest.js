const MarkdownIt = require('markdown-it')
const fs = require('fs')
const path = require('path')

// 指定要读取的目录
const directoryPath = path.join(__dirname, '../src/packages/address')

// 读取目录中的文件
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('无法扫描目录: ' + err)
  }

  // 过滤出 Markdown 文件
  const mdFiles = files.filter(file => path.extname(file) === '.md')

  // 读取每个 Markdown 文件的内容
  mdFiles.forEach(file => {
    const filePath = path.join(directoryPath, file)

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return console.log('无法读取文件: ' + err)
      }

      // console.log(`文件名: ${file}`)
      // console.log(`内容:\n${data}`)
      // console.log('-----------------------')
      const md = new MarkdownIt()
      const result = md.parse(data, {})

      result
    })
  })
});

