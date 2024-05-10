const fse = require('fs-extra')
const path = require('path')

const args = process.argv.slice(2)
const argsPath = process.argv.slice(3)
const targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react`
const targetwrapUrl = `${process.cwd()}/src`

if (args.length) {
  const filePath = `${process.cwd()}/packages/nutui-taro-demo-rn/scripts/taro/adapted.js`

  fse.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err
    // eslint-disable-next-line global-require
    let adapted = require('../../packages/nutui-taro-demo-rn/scripts/taro/adapted.js')
    console.log(adapted)
    adapted.push(args[0])
    adapted = [...new Set(adapted)]
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
  fse
    .copy(from, to)
    .then(() => {
      console.log(`${success}!>`, to)
      if (isSingle) {
        modify(
          `${targetBaseUrl}/packages/${args[0]}/demo.taro.tsx`,
          `import '../../../styles/demo.scss';\n`
        )
        modify(
          `${targetBaseUrl}/packages/${args[0]}/${args[0]}.taro.tsx`,
          `import "./${args[0]}.harmony.css";\n`
        )
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

// const removeFile = async (dir) => {
//   return new Promise((res, rej) => {
//     fse.readdirSync(dir).forEach((file) => {
//       const currentPath = path.join(dir, file)
//       if (fse.lstatSync(currentPath).isDirectory()) {
//         // 递归删除子目录
//         removeFile(currentPath)
//       } else {
//         // 删除文件
//         fse.unlinkSync(currentPath)
//       }
//     })
//   })
// }

const removeFile = async (url) => {
  return new Promise((res, rej) => {
    fse.remove(url, (err) => {
      if (err) {
        throw err
      }
      res(true)
    })
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
  await removeFile(`${targetBaseUrl}`).finally(() => {
    console.log('1')
    copyFile(`${targetwrapUrl}`, `${targetBaseUrl}`, '全部拷贝完成').finally(
      () => {
        console.log('2')
        removeFile(`${targetBaseUrl}/packages/${args[0]}`).finally(() => {
          console.log('3')
          copyFile(
            `${targetwrapUrl}/packages/${args[0]}`,
            `${targetBaseUrl}/packages/${args[0]}`,
            '单个拷贝完成',
            true
          )
        })
      }
    )
  })
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
