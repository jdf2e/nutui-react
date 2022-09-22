const targetBaseUrl = `${process.cwd()}/site_docs`
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
  let configPath = `src/config.json`
  let configPkgPath = `package.json`
  let nutuiDocsConfigPath = `${targetBaseUrl}/config.json`

  // 判断 site_docs 文件是否存在根路径中
  const existsRoot = await fse.pathExists(targetBaseUrl)

  if (existsRoot) await removeFile(targetBaseUrl)
  // 复制所有组件
  const fromConfig = await fse.readJson(configPath)
  fromConfig.nav.forEach(({ packages }) => {
    packages.forEach((item) => {
      if (item.show) {
        let cmpName = item.name.toLowerCase()
        let docpath = `src/packages/${cmpName}/doc.md`
        let docENpath = `src/packages/${cmpName}/doc.en-US.md`
        let docTaropath = `src/packages/${cmpName}/doc.taro.md`
        fse.readFile(docpath, (err, data) => {
          if (!err) {
            copyFile(docpath, `${targetBaseUrl}/docs/${cmpName}/doc.md`)
          }
        })
        fse.readFile(docENpath, (err, data) => {
          if (!err) {
            copyFile(docENpath, `${targetBaseUrl}/docs/${cmpName}/doc.en-US.md`)
          }
        })
        fse.readFile(docTaropath, (err, data) => {
          if (!err) {
            copyFile(
              docTaropath,
              `${targetBaseUrl}/docs/${cmpName}/doc.taro.md`
            )
          }
        })
      }
    })
  })

  // 复制 config.json
  const fromPkgConfig = await fse.readJson(configPkgPath)

  const obj = {
    version: '',
    nav: [],
    docs: [],
  }
  fse.outputJSON(nutuiDocsConfigPath, obj, () => {
    const docsConfig = fse.readJson(nutuiDocsConfigPath)
    docsConfig.version = fromPkgConfig.version
    docsConfig.nav = fromConfig.nav
    docsConfig.docs = fromConfig.docs
    docsConfig.demoUrl = 'https://nutui.jd.com/react/demo.html#'
    fse
      .writeJson(nutuiDocsConfigPath, docsConfig, {
        spaces: 2,
      })
      .then(() => {
        console.log(`${fromPkgConfig.version} success!`)
      })
  })
}
copy()
