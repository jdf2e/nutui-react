/**
 * 更新nutui-taro-demo入口文件
 */
const fse = require('fs-extra')
const config = require('../../src/config.json')
const param = process.env.C
// G=nav pnpm dev:jdtaro:jdharmonycpp
// base | layout | nav | dentry | dataentry | feedback | exhibition | business
const paramG = process.env.G

// C=radio pnpm dev:jdtaro:jdharmonycpp or C=radio,button,cell pnpm dev:jdtaro:jdharmonycpp
const specialComponent = (name) => {
  if (!param) return true
  const entries = param.split(',').map((i) => i.toLowerCase())
  return entries.includes(name.toLowerCase())
}

const isShow = (item) => {
  return !(item.exportEmpty == false) && item.show && item.taro
}

// 更新 app.config.ts 文件
const createConfig = async () => {
  let configRef = []

  return new Promise((res, rej) => {
    config.nav.map((item) => {
      let co = {
        root: item.enName,
        pages: [],
      }
      if (paramG) {
        if (paramG === item.enName) {
          item.packages.map((it) => {
            if (isShow(it)) {
              co.pages.push(`pages/${it.name.toLowerCase()}/index`)
            }
          })
        }
      } else {
        item.packages.map((it) => {
          if (isShow(it)) {
            if (!param || specialComponent(it.name)) {
              co.pages.push(`pages/${it.name.toLowerCase()}/index`)
            }
          }
        })
      }
      co = { ...co, pages: co.pages.sort() }
      configRef.push(co)
    })

    // 如果 pages 数据为空，则删除该项
    configRef = configRef.filter((item) => item.pages.length !== 0)

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
  renderingMode: 'mixed',
  components: ['pages/index/index', ...(subPackages.map(subPackage => {
    return subPackage.pages.map(page => \`\${subPackage.root}/\${page}\`)
  }).flat())]
})`,
    'utf8'
  )
}

create()
