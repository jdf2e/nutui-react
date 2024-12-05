/**
 * RN 自动化适配脚本
 */
const fse = require('fs-extra')
const config = require('../../src/config.json')
const args = process.argv.splice(2)

console.log('rn copy-file.js args',args)

// 已适配组件对象
const adaptedArray = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    const { name, version } = element
    if (version !== '3.0.0') return // 未适配不导出
    adaptedArray.push({
      ...element,
      lowercaseName: element.name.toLowerCase(),
      enName: item.enName,
    })
  })
})
// 子组件
const childAdaptedArray = [
  'cellgroup',
  'row',
  'col',
  'griditem',
  'swiperitem',
  'hoverbuttonitem',
  'avatargroup',
  'icon',
]

// copy文件并增加css引入
const targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo/nutui-react`
const targetwrapUrl = `${process.cwd()}/src`

const copyFile = async (from, to, success, isSingle = false) => {
  fse.copy(from, to, function (err) {
    if (err) {
      console.error('An error occurred while copying the directory.', err)
      return
    }
    console.log(`${success}!>`, to)

    adaptedArray.map((item) => {
      if (item.lowercaseName) {
        if (!childAdaptedArray.includes(item.lowercaseName)) {
          modify(
            `${targetBaseUrl}/packages/${item.lowercaseName}/demo.taro.tsx`,
            `import '../../../styles/demo.scss';\n`
          )
        }
        if (!['icon'].includes(item)) {
          modify(
            `${targetBaseUrl}/packages/${item.lowercaseName}/${item.lowercaseName}.taro.tsx`,
            `import "./${item.lowercaseName}.scss";\n`
          )
        }
      }
    })
  })
}

const removeFile = async (url) => {
  fse.remove(url, (err) => {
    if (err) {
      throw err
    }
    console.log(`全部移除成功!>`, url)
    copyFile(`${targetwrapUrl}`, `${targetBaseUrl}`, '全部拷贝完成')
  })
}

const modify = (fileUrl, importStatement) => {
  fse.readFile(fileUrl, 'utf8').then((content) => {
    let modifiedContent = content
    modifiedContent = [importStatement, modifiedContent.slice(0)].join('')
    return fse.writeFile(fileUrl, modifiedContent, 'utf8')
  })
}

const copy = async () => {
  await removeFile(`${targetBaseUrl}`)
}

copy()
