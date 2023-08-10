const fse = require('fs-extra')
const config = require('../../src/config.json')
const targetBaseUrl = `${process.cwd()}/packages`
const taroConfig = `${targetBaseUrl}/nutui-taro-demo/src/app.config.ts`

// 创建 config
const createConfig = async () => {
  let configRef = []

  return new Promise((res, rej) => {
    config.nav.map((item) => {
      let co = {
        root: item.enName,
        pages: [],
      }

      item.packages.map((it) => {
        if (!(it.exportEmpty == false) && it.show && it.taro) {
          co.pages.push(`pages/${it.name.toLowerCase()}/index`)
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
    taroConfig,
    `
const subPackages = ${JSON.stringify(subpackages, null, 2)};\n
export default defineAppConfig ({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI-React',
    navigationBarTextStyle: 'black'
  }
})`,
    'utf8'
  )
}

create()
