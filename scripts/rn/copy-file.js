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

const removeAllFile = async (url) => {
    return new Promise((res, rej) => {
        fse.emptyDir(folderPath)
        .then(() => {
          console.log('文件夹已清空');
        })
        .catch(err => {
          console.error(err);
        });
    })
  }

const copy = async () => {
    await removeFile(`${targetBaseUrl}`);
    copyFile(`${targetwrapUrl}`, `${targetBaseUrl}`)
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
