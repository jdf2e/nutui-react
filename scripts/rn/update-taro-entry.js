/**
 * 更新nutui-taro-demo入口文件
 */
const fse = require('fs-extra')
const path = require('path')
const config = require('../../src/config.json')
const param = process.env.C

// C=radio pnpm dev:taro:jdharmonycpp or C=radio,button,cell pnpm dev:taro:jdharmonycpp
function specialComponent(name) {
  if(!param) return true
  const entries = param.split(',').map((i) => i.toLowerCase())
  return entries.includes(name.toLowerCase())
}

// 已适配组件对象
const adaptedArray = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    const { name, version } = element
    if (version !== '3.0.0') return // 未适配不导出
    if (specialComponent(name)) return
    adaptedArray.push({
      ...element,
      lowercaseName: element.name.toLowerCase(),
      enName: item.enName,
    })
  })
})
// 子组件
const childAdaptedArray = [
  'cellgroup',
  'row',
  'col',
  'griditem',
  'swiperitem',
  'hoverbuttonitem',
  'avatargroup',
  'icon',
  'tabpane',
]

// 更新 app.config.ts 文件
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
          if (!param || specialComponent(it.name)) {
            co.pages.push(`pages/${it.name.toLowerCase()}/index`)
          }
        }
      })
      co = { ...co, pages: co.pages.sort() }
      configRef.push(co)
    })
    res(configRef)
  })
}

const create = async () => {
  const subpackages = await createConfig()
  fse.writeFileSync(
    `${process.cwd()}/packages/nutui-taro-demo/src/app.config.ts`,
    `
const subPackages = ${JSON.stringify(subpackages, null, 2)};\n
export default defineAppConfig({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI-React',
    navigationBarTextStyle: 'black'
  },
  components: ['pages/index/index', ...(subPackages.map(subPackage => {
    return subPackage.pages.map(page => \`\${subPackage.root}/\${page}\`)
  }).flat())]
})`,
    'utf8'
  )
}

create()

// 更新pages下面的入口文件
const updatePages = (componentBaseUrl, item) => {
  fse.writeFileSync(
    `${componentBaseUrl}/index.tsx`,
    `import Demo from '@/packages/${item.lowercaseName}/demo.taro';\nexport default Demo;`
  )
  fse.writeFileSync(
    `${componentBaseUrl}/index.config.ts`,
    `export default {\n  navigationBarTitleText: '${item.name}',\n}`
  )
}

adaptedArray.map((item) => {
  if (childAdaptedArray.includes(item.lowercaseName)) return
  const componentBaseUrl = `${process.cwd()}/packages/nutui-taro-demo/src/${item.enName}/pages/${item.lowercaseName}`
  // 判断文件夹是否存在
  fse.access(componentBaseUrl, fse.constants.F_OK, (err) => {
    if (err) {
      // 文件夹不存在，创建文件夹
      fse.mkdir(componentBaseUrl, { recursive: true }, (err) => {
        if (err) throw err
        console.log('文件夹创建成功！')
        updatePages(componentBaseUrl, item)
      })
    } else {
      updatePages(componentBaseUrl, item)
    }
  })
})
