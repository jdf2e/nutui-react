const targetBaseUrl = `${process.cwd()}/site_docs_migrate`
const fse = require('fs-extra')

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
  // 判断 site_docs_migrate 文件是否存在根路径中
  const existsRoot = await fse.pathExists(targetBaseUrl)

  if (existsRoot) await removeFile(targetBaseUrl)

  copyFile('migrate-from-v1.md', `${targetBaseUrl}/react/migrate-from-v1.md`)
  copyFile(
    'migrate-from-v1.md',
    `${targetBaseUrl}/react_taro/migrate-from-v1.md`
  )
}
copy()
