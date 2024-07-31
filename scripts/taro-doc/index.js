const fs = require('fs')
const path = require('path')

// 同步读取
const data = fs.readFileSync(
  path.join(__dirname, '../../src/config.json'),
  'utf8'
)
const jsonData = JSON.parse(data)
const navArr = jsonData.nav
const dirMap = {
  base: 'common',
  business: 'business',
  dataentry: 'dentry',
  dentry: 'dentry',
  layout: 'layout',
  feedback: 'feedback',
  nav: 'nav',
  exhibition: 'exhibition',
}
for (let i = 0; i < navArr.length; i++) {
  const cur = navArr[i]
  try {
    fs.mkdirSync(path.join(__dirname, `./docs/${dirMap[cur.enName]}`), {
      recursive: true,
    })
    const packages = cur.packages
    const trverseFiles = (item) => {
      const markdownFilePath = path.join(
        __dirname,
        `../../src/packages/${item}/doc.taro.md`
      )
      let markdownContent = fs.readFileSync(markdownFilePath, 'utf8')
      const codeBlockRegex = /<CodeBlock src=['"]([^'"]+)['"]\s*><\/CodeBlock>/g

      // 替换函数
      function replaceCodeBlocks(match, src) {
        const codeFilePath = path.join(
          __dirname,
          `../../src/packages/${item}/demos/${src}`
        )
        try {
          const codeContent = fs.readFileSync(codeFilePath, 'utf8')
          return '```tsx\n' + codeContent + '\n```'
        } catch (error) {
          console.error(`Error reading file '${src}':`, error)
          return match
        }
      }
      markdownContent = markdownContent.replace(
        codeBlockRegex,
        replaceCodeBlocks
      )
      markdownContent = markdownContent
        .replace(/:::demo/g, '')
        .replace(/:::/g, '')
      markdownContent = markdownContent.replace(
        '@/utils',
        '@dongdesign/ui/dist/utils'
      )
      markdownContent = markdownContent.replace(
        '@nutui/nutui-react-taro',
        '@dongdesign/ui'
      )
      const insertContent = `\n\n:::info 兼容性\n仅支持H5及小程序，JDRN、鸿蒙端待支持\n:::`
      markdownContent = markdownContent.replace(
        /(^# .*$)/gm,
        `$1${insertContent}`
      )
      const classContent = `---\nsidebar_class_name: hasIcon\n---\n\n`
      markdownContent = classContent + markdownContent
      markdownContent = markdownContent.replace(/\n{2,}/g, '\n\n')
      // 或者写入到文件
      fs.writeFileSync(
        path.join(__dirname, `./docs/${dirMap[cur.enName]}/${item}.md`),
        markdownContent,
        'utf8'
      )
    }
    packages.forEach((item) => {
      if (item.show && item.version === '3.0.0') {
        trverseFiles(item.name)
      }
    })
  } catch (err) {
    console.error('Error creating directory:', err)
  }
}
