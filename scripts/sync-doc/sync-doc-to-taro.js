const fs = require('fs')
const path = require('path')

const syncDoc = () => {
  // 构建文件路径
  const filePath = path.join(__dirname, '../../src/config.json')
  try {
    // 读取文件内容
    const data = fs.readFileSync(filePath, 'utf8')
    // 解析 JSON
    const jsonData = JSON.parse(data)
    const navData = jsonData.nav
    const obj = {}
    for (let i = 0; i < navData.length; i++) {
      const key = navData[i].enName
      const val = navData[i].packages.filter(i => i.version === "3.0.0" && i.show)
      obj[key] = val
    }
    for (const key in obj) {
      const arr = obj[key]
      const map = { base: 'common', layout: 'layout', nav: 'nav', dentry: 'dentry', 'dataentry': 'dentry', feedback: 'feedback', exhibition: 'exhibition', business: 'business' }
      console.log(map[key])
      const targetDir = path.join(__dirname, `./component/${map[key]}`)
      if (!fs.existsSync(targetDir) && obj[key].length > 0) {
        fs.mkdir(targetDir, { recursive: true }, (err) => {
          if (err) {
            return console.error('Error creating directory:', err)
          }
        })
      }
      for (let i = 0; i < arr.length; i++) {
        const componentName = arr[i].name.toLowerCase()
        const docPath = path.join(__dirname, `../../src/packages/${componentName}/doc.taro.md`)
        const rawContent = fs.readFileSync(docPath, 'utf-8')
        const codeBlockRegex = /<CodeBlock src=['"]([^'"]+)['"]\s*><\/CodeBlock>/g
        // 替换函数
        function replaceCodeBlocks (match, src) {
          const codeFilePath = path.join(__dirname, `../../src/packages/${componentName}/demos/${src}`)
          try {
            const codeContent = fs.readFileSync(codeFilePath, 'utf8')
            return '```tsx\n' + codeContent + '\n```'
          } catch (error) {
            console.error(`Error reading file '${src}':`, error)
            return match
          }
        }
        let markdownContent = rawContent.replace(codeBlockRegex, replaceCodeBlocks).replace(/:::demo/g, '').replace(/:::/g, '')
        markdownContent = markdownContent.replace(/@\/utils/g, '@dongdesign/ui/dist/utils')
        markdownContent = markdownContent.replace(/@nutui\/nutui-react-taro/g, '@dongdesign/ui')
        markdownContent = markdownContent.replace(/#\/zh-CN\/component\/configprovider/g, '/docs/component/common/ConfigProvider')
        markdownContent = markdownContent.replace(/借助.*?\n/g, '')
        markdownContent = markdownContent.replace(/### 支持小程序API能力[\s\S]*?(?=## 主题定制)/g, '')
        markdownContent = markdownContent.replace('### 直接使用 Taro 现有 Image 组件开发 [参考文档](https://taro-docs.jd.com/docs/components/media/image)\n', '')
        markdownContent = markdownContent.replace('此外还支持 Taro 中的 [Input 属性](https://docs.taro.zone/docs/components/forms/input/)', '')
        markdownContent = markdownContent.replace(/\n{2,}/g, '\n\n')
        // 写入文件
        try {
          fs.writeFileSync(path.join(__dirname, `./component/${map[key]}/${arr[i].name}.md`), markdownContent, 'utf8')
          // console.log('File written successfully')
        } catch (err) {
          console.error('Error writing file:', err)
        }
      }
    }
  } catch (err) {
    console.error('读取文件或解析 JSON 时出错:', err)
  }
}
syncDoc()
