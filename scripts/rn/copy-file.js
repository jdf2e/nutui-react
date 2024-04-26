const fse = require('fs-extra')

const args = process.argv.slice(2)
const argsPath = process.argv.slice(3)
let targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react/packages/${args[0]}`
let targetwrapUrl = `${process.cwd()}/src/packages/${args[0]}`

if (argsPath[0] === 'reverse') {
  targetBaseUrl = `${process.cwd()}/src/packages/${args[0]}`
  targetwrapUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react/packages/${args[0]}`
}

const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to)
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

const copy = async () => {
  await removeFile(`${targetBaseUrl}/${args[0]}.taro.tsx`)
  await removeFile(`${targetBaseUrl}/${args[0]}.harmony.css`)
  await removeFile(`${targetBaseUrl}/${args[0]}.tsx`)
  await removeFile(`${targetBaseUrl}/${args[0]}.scss`)

  copyFile(
    `${targetwrapUrl}/${args[0]}.taro.tsx`,
    `${targetBaseUrl}/${args[0]}.taro.tsx`
  )

  copyFile(`${targetwrapUrl}/${args[0]}.tsx`, `${targetBaseUrl}/${args[0]}.tsx`)

  copyFile(
    `${targetwrapUrl}/${args[0]}.harmony.css`,
    `${targetBaseUrl}/${args[0]}.harmony.css`
  )

  copyFile(
    `${targetwrapUrl}/${args[0]}.scss`,
    `${targetBaseUrl}/${args[0]}.scss`
  )
}

copy()
if (argsPath[0] !== 'reverse' && argsPath[0]) {
  const componentBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/src/${argsPath[0]}/pages/${args[0]}`
  fse.writeFileSync(
    `${componentBaseUrl}/index.tsx`,
    `import Demo from '@/packages/${args[0]}/demo.taro';
     export default Demo;`
  )
  const componentName = args[0].charAt(0).toUpperCase() + args[0].slice(1)
  fse.writeFileSync(
    `${componentBaseUrl}/index.config.ts`,
    `export default {
        navigationBarTitleText: '${componentName}',
     }`
  )
}
