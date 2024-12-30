/*
执行方式： node scripts/sync-to-taro-playground.js
产物路径：dist/nutui
同步操作：
1. 将 dist/nutui/packages 和 dist/nutui/src 拷贝到 playground 的 src/pages/nutui 目录中
2. 将 dist/nutui/subpackages.ts 文件拷贝到 playground 的 src 目录中

注意：需要将 nutui 进行构建，执行 pnpm build:taro 后，用 dist 下的文件 和 仓库中的 package.json 文件覆盖 playground 仓库中的@nutui/nutui-react-taro 包
*/
const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const glob = require('glob')

const projectAbsolutePath = process.cwd()
const sourcePath = path.join(projectAbsolutePath, 'src/packages')
const distPath = path.join(projectAbsolutePath, 'dist/nutui')

function clean() {
  execSync(`rm -rf ${path.join(distPath, '..')}`)
}

function cp(source, dist) {
  execSync(`cp -Rf ${source} ${dist}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`)
    }
  })
}

function mkdir(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true })
  } catch (e) {
    return e
  }
}

function fileExists(file) {
  try {
    fs.accessSync(file)
    return true
  } catch (e) {
    return false
  }
}

function getSubDir(dir) {
  return fs.readdirSync(dir).filter((subDir) => {
    const subDirPath = path.join(dir, subDir)
    return fs.statSync(subDirPath).isDirectory()
  })
}

function main() {
  clean()

  const config = require(path.join(sourcePath, '..', 'config.json'))
  // 3.0 组件列表
  const v3 = []
  const subPackages = []
  config.nav.forEach((nav) => {
    subPackages.push({
      root: `pages/nutui/src/${nav.enName}`,
      pages: [],
    })
    nav.packages.forEach((package) => {
      if (package.dd && package.show) {
        const name = package.name.toLowerCase()
        v3.push(name)
        subPackages[subPackages.length - 1].pages.push(`pages/${name}/index`)

        const a = path.join(
          sourcePath,
          '../../',
          'packages/nutui-taro-demo/src',
          nav.enName,
          'pages',
          package.name.toLowerCase()
        )
        mkdir(
          path.join(
            distPath,
            'src',
            nav.enName,
            'pages',
            package.name.toLowerCase()
          )
        )
        cp(
          path.join(a, '/*'),
          path.join(
            distPath,
            'src',
            nav.enName,
            'pages',
            package.name.toLowerCase()
          )
        )
      }
    })
    if (subPackages[subPackages.length - 1].pages.length === 0) {
      subPackages.splice(subPackages.length - 1, 1)
    }
  })

  const subDirs = getSubDir(sourcePath)
  // 按照 3.0 标识拷贝组件
  subDirs.forEach((dir) => {
    // 判断是不是 3.0 组件
    if (!v3.includes(dir)) return
    const demoFile = path.join(sourcePath, dir, 'demo.taro.tsx')
    const demoScssFile = path.join(sourcePath, dir, 'demo.scss')
    const demoDir = path.join(sourcePath, dir, 'demos/taro')
    const distDemoFile = path.join(distPath, 'packages', dir, 'demo.taro.tsx')
    const distDemoScssFile = path.join(distPath, 'packages', dir, 'demo.scss')
    const distDemoDir = path.join(distPath, 'packages', dir, 'demos/taro')

    if (fileExists(demoFile)) {
      mkdir(distDemoDir)
      cp(demoFile, distDemoFile)
      if (fileExists(demoScssFile)) {
        cp(demoScssFile, distDemoScssFile)
      }
      cp(`${demoDir}/*`, distDemoDir)
    }
  })
  // 拷贝 demo 用到的 head 等组件
  const distSitesComponents = path.join(distPath, 'packages/sites')
  mkdir(distSitesComponents)
  cp(path.join(sourcePath, '..', 'sites/components'), distSitesComponents)

  // 拷贝语言包
  const distLocaleTaro = path.join(
    distPath,
    'packages/sites/assets/locale/taro'
  )
  mkdir(distLocaleTaro)
  cp(path.join(sourcePath, '..', 'sites/assets/locale/taro/*'), distLocaleTaro)

  // 拷贝语言包
  const distLocalesPath = path.join(distPath, 'packages/locales')
  mkdir(distLocalesPath)
  cp(path.join(sourcePath, '..', 'locales/*'), distLocalesPath)

  // 拷贝 utils 文件
  mkdir(path.join(distPath, 'packages/utils'))
  cp(
    path.join(sourcePath, '..', 'utils/*'),
    path.join(distPath, 'packages/utils')
  )
  // 拷贝配置文件，配置文件因为在 playground 里合并了 components 部分，所以暂时不拷贝该部分。
  // cp(
  //   path.join(sourcePath, '..', 'config.json'),
  //   path.join(distPath, 'packages')
  // )
  // 生成分包文件
  fs.writeFile(
    path.join(distPath, 'subpackages.ts'),
    `// 本文件由脚本生成\nexport const subpackages = ${JSON.stringify(subPackages)}`,
    (err) => {
      if (err) return console.log(err)
    }
  )
  // 修改引入的 utils
  glob.sync(`${distPath}/**/` + `demos/taro/*.tsx`).map((f) => {
    const sourceFileContent = fs.readFileSync(f, { encoding: 'utf-8' })
    const distFileContent = sourceFileContent
      .toString()
      .replace(/@\/utils/g, '../../../utils')
      .replace(/@nutui\/nutui-react-taro/g, '@dongdesign/ui')
    fs.writeFileSync(f, distFileContent)
  })
  // 修改引入的 utils
  glob.sync(`${distPath}/**/` + `demo.taro.tsx`).map((f) => {
    const sourceFileContent = fs.readFileSync(f, { encoding: 'utf-8' })
    const distFileContent = sourceFileContent
      .toString()
      .replace(/@\/utils/g, '../utils')
      .replace(/@nutui\/nutui-react-taro/g, '@dongdesign/ui')
    fs.writeFileSync(f, `import '../../styles/demo.scss'\n${distFileContent}`)
  })
}

main()
