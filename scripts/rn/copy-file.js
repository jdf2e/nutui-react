const fse = require('fs-extra')
const path = require('path')

const args = process.argv.slice(2)
const argsPath = process.argv.slice(3)
let adapted = require('../../packages/nutui-taro-demo-rn/scripts/taro/adapted.js')

console.log(adapted)
adapted.push(args[0])
adapted = [...new Set(adapted)]

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
      if (!['cellgroup'].includes(item)) {
        modify(
          `${targetBaseUrl}/packages/${item}/demo.taro.tsx`,
          `import '../../../styles/demo.scss';\n`
        )
      }
      modify(
        `${targetBaseUrl}/packages/${item}/${item}.taro.tsx`,
        `import "./${item}.harmony.css";\n`
      )
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

if (argsPath[0]) {
  const componentBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/src/${argsPath[0]}/pages/${args[0]}`
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
