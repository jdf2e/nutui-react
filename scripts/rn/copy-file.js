const fse = require('fs-extra')

const args = process.argv.slice(2)
const argsPath = process.argv.slice(3)
let targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react/packages/${args[0]}`
let targetwrapUrl = `${process.cwd()}/src/packages/${args[0]}`

if (argsPath[0] === 'reverse') {
  targetBaseUrl = `${process.cwd()}/src/packages/${args[0]}`
  targetwrapUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react/packages/${args[0]}`
}

const copyFile = async (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to)
      modify(
        `${targetBaseUrl}/demo.taro.tsx`,
        `import '../../../styles/demo.scss';\n`
      )
      modify(
        `${targetBaseUrl}/${args[0]}.taro.tsx`,
        `import "./${args[0]}.harmony.css";\n`
      )
    })
    .catch((err) => {
      console.error(err)
    })
}

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
  await removeFile(`${targetBaseUrl}`)
  await copyFile(`${targetwrapUrl}`, `${targetBaseUrl}`)
}

copy()
if (argsPath[0] !== 'reverse' && argsPath[0]) {
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
