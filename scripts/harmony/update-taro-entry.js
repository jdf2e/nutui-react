/**
 * 更新nutui-taro-demo入口文件
 */
const fse = require('fs-extra')
const path = require('path')
const config = require('../../src/config.json')
const param = process.env.C

// C=radio pnpm dev:taro:jdharmonycpp or C=radio,button,cell pnpm dev:taro:jdharmonycpp
function specialComponent(name) {
  if (!param) return true
  const entries = param.split(',').map((i) => i.toLowerCase())
  return entries.includes(name.toLowerCase())
}

// 已适配组件对象
const adaptedArray = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    const { name, version, dd } = element
    // 通过 pre 命令在 h5 和小程序预览或构建的时候，去掉鸿蒙适配的限制，从而在预览H5 和小程序时展示出未适配鸿蒙的组件
    // 例如 Form 组件未适配鸿蒙但适配了 H5 和小程序，启动 H5或小程序开发环境后，Form 组件并未被编译到开发环境中。导致无法查看 Form 组件。
    if (!dd && !process.env.SKIPDD) return // 未适配不导出
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
