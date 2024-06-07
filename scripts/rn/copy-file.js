const fse = require('fs-extra')
const path = require('path')
const config = require('../../src/config.json')

const args = process.argv.slice(2)
const argsPath = process.argv.slice(3)
let adapted = require('../../packages/nutui-taro-demo-rn/scripts/taro/adapted.js')

console.log(adapted)
if (args[0]) {
  adapted.push(args[0])
  adapted = [...new Set(adapted)]
} else if (!args[0]) {
  console.log('error!>请输入当前适配组件名字')
}
console.log(adapted)

const targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react`
const targetwrapUrl = `${process.cwd()}/src`

if (args.length) {
  const filePath = `${process.cwd()}/packages/nutui-taro-demo-rn/scripts/taro/adapted.js`

  fse.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err
    // eslint-disable-next-line global-require
    fse.writeFile(
      filePath,
      `exports = module.exports = ${JSON.stringify(adapted)};`,
      'utf8',
      (err) => {
        if (err) throw err
        console.log('文件已更新')
      }
    )
  })
}

const copyFile = async (from, to, success, isSingle = false) => {
  fse.copy(from, to, function (err) {
    if (err) {
      console.error('An error occurred while copying the directory.', err)
      return
    }
    console.log(`${success}!>`, to)

    adapted.map((item) => {
      if (item) {
        if (
          !['cellgroup', 'row', 'col', 'griditem', 'hoverbuttonitem'].includes(
            item
          )
        ) {
          modify(
            `${targetBaseUrl}/packages/${item}/demo.taro.tsx`,
            `import '../../../styles/demo.scss';\n`
          )
        }
        modify(
          `${targetBaseUrl}/packages/${item}/${item}.taro.tsx`,
          `import "./${item}.harmony.css";\n`
        )
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
    if (argsPath[0] === 'reverse') {
      modifiedContent = modifiedContent.replace(importStatement, '')
    } else {
      modifiedContent = [importStatement, modifiedContent.slice(0)].join('')
    }

    return fse.writeFile(fileUrl, modifiedContent, 'utf8')
  })
}

const copy = async () => {
  await removeFile(`${targetBaseUrl}`)
}

copy()

// 创建 config
const createConfig = async () => {
  const configRef = []

  return new Promise((res, rej) => {
    config.nav.map((item) => {
      let co = {
        root: item.enName,
        pages: [],
      }

      item.packages.map((it) => {
        if (!(it.exportEmpty == false) && it.show && it.taro) {
          co.pages.push(`pages/${it.name.toLowerCase()}/index`)
        }
      })
      co = { ...co, pages: co.pages.sort() }
      configRef.push(co)
    })
    res(configRef)
  })
}
// 创建 app.config.ts
const create = async () => {
  const subpackages = await createConfig()
  fse.writeFileSync(
    `${process.cwd()}/packages/nutui-taro-demo-rn/src/app.config.ts`,
    `
const subPackages = ${JSON.stringify(subpackages, null, 2)};\n
export default defineAppConfig ({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI-React',
    navigationBarTextStyle: 'black'
  }
})`,
    'utf8'
  )
}

// 跟新pages下面的入口文件
const updatePages = (componentBaseUrl) => {
  fse.writeFileSync(
    `${componentBaseUrl}/index.tsx`,
    `import Demo from '@/packages/${args[0]}/demo.taro';\nexport default Demo;`
  )
  const componentName = args[0].charAt(0).toUpperCase() + args[0].slice(1)
  fse.writeFileSync(
    `${componentBaseUrl}/index.config.ts`,
    `export default {\n  navigationBarTitleText: '${componentName}'\n}`
  )
}

if (argsPath[0]) {
  const componentBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/src/${argsPath[0]}/pages/${args[0]}`
  // 判断文件夹是否存在
  fse.access(componentBaseUrl, fse.constants.F_OK, (err) => {
    if (err) {
      // 文件夹不存在，创建文件夹
      fse.mkdir(componentBaseUrl, { recursive: true }, (err) => {
        if (err) throw err
        console.log('文件夹创建成功！')
        updatePages(componentBaseUrl)
      })
    } else {
      updatePages(componentBaseUrl)
    }
  })
  create()
}
