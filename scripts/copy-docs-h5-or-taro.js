const targetBaseUrl = `${process.cwd()}/site_docs`
const fse = require('fs-extra')
const type = process.argv[2] || 'h5'
const path = require('path')

function readTsxFile(package, path) {
  const data = fse.readFileSync(`src/packages/${package}/demos/${path}`, 'utf8')
  return data
}

const copyFile = (from, to, package) => {
  fse
    .readFile(from, 'utf8')
    .then((content) => {
      const regex = /<CodeBlock src='(.*?)'><\/CodeBlock>/g
      let match = ''
      while ((match = regex.exec(content))) {
        let temp = readTsxFile(package, match[1]) // 读取src中的文件
        temp = temp.trim()
        content = content.replace(
          `<CodeBlock src='${match[1]}'></CodeBlock>`,
          '```tsx\n' + temp + '\n```'
        )
      }
      return content
    })
    .then((modifiedContent) => {
      // 确保目标文件所在的目录存在，如果不存在就创建
      return fse.ensureDir(path.dirname(to)).then(() => modifiedContent)
    })
    .then((modifiedContent) => {
      // 将修改后的内容写入目标文件
      return fse.writeFile(to, modifiedContent)
    })
    .then(() => {
      console.log(`${from}>>${to} [success]`)
    })
    .catch((err) => {
      console.error('处理文件时发生错误:', err)
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
        // 拷贝 h5 文档
        if (type !== 'taro') {
          let docpath = `src/packages/${cmpName}/doc.md`
          let docENpath = `src/packages/${cmpName}/doc.en-US.md`
          fse.readFile(docpath, (err, data) => {
            if (!err) {
              copyFile(docpath, `${targetBaseUrl}/docs/${cmpName}/doc.md`, cmpName)
            }
          })
          fse.readFile(docENpath, (err, data) => {
            if (!err) {
              copyFile(
                docENpath,
                `${targetBaseUrl}/docs/${cmpName}/doc.en-US.md`,
                cmpName,
              )
            }
          })
        }
        // 拷贝 taro 文档
        if (type === 'taro') {
          let docTaropath = `src/packages/${cmpName}/doc.taro.md`
          fse.readFile(docTaropath, (err, data) => {
            if (!err) {
              copyFile(
                docTaropath,
                `${targetBaseUrl}/docs/${cmpName}/doc.taro.md`,
                cmpName,
              )
            }
          })
        }
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
