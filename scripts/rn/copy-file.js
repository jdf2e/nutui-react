/**
 * RN 自动化适配脚本
 */
const fse = require('fs-extra')
const path = require('path')
const config = require('../../src/config.json')

// 已适配组件对象
const adaptedArray = []
config.nav.map((item) => {
    item.packages.forEach((element) => {
        let { name, version } = element
        if (version !== '3.0.0') return // 未适配不导出
        adaptedArray.push({...element, lowercaseName: element.name.toLowerCase(), enName: item.enName})
    }
  )
})
const childAdaptedArray = [
    'cellgroup',
    'row',
    'col',
    'griditem',
    'swiperitem',
    'hoverbuttonitem',
    'avatargroup',
    'icon',
  ]

// copy文件并增加css引入
const targetBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/nutui-react`
const targetwrapUrl = `${process.cwd()}/src`

const copyFile = async (from, to, success, isSingle = false) => {
  fse.copy(from, to, function (err) {
    if (err) {
      console.error('An error occurred while copying the directory.', err)
      return
    }
    console.log(`${success}!>`, to)

    adaptedArray.map((item) => {
      if (item.lowercaseName) {
        if (
          !childAdaptedArray.includes(item.lowercaseName)
        ) {
          modify(
            `${targetBaseUrl}/packages/${item.lowercaseName}/demo.taro.tsx`,
            `import '../../../styles/demo.scss';\n`
          )
        }
        if (!['icon'].includes(item)) {
          modify(
            `${targetBaseUrl}/packages/${item.lowercaseName}/${item.lowercaseName}.taro.tsx`,
            `import "./${item.lowercaseName}.scss";\n`
          )
        }
      }
    })
  })
}

const removeFile = async (url) => {
  fse.remove(url, (err) => {
    if (err) {
      throw err
    }
    console.log(`全部移除成功!>`, url)
    copyFile(`${targetwrapUrl}`, `${targetBaseUrl}`, '全部拷贝完成')
  })
}

const modify = (fileUrl, importStatement) => {
  fse.readFile(fileUrl, 'utf8').then((content) => {
    let modifiedContent = content
    modifiedContent = [importStatement, modifiedContent.slice(0)].join('')
    return fse.writeFile(fileUrl, modifiedContent, 'utf8')
  })
}

const copy = async () => {
  await removeFile(`${targetBaseUrl}`)
}

copy()


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
    `${process.cwd()}/packages/nutui-taro-demo-rn/src/app.config.ts`,
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
  }
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

adaptedArray.map((item)=> {
  if(childAdaptedArray.includes(item.lowercaseName)) return
  const componentBaseUrl = `${process.cwd()}/packages/nutui-taro-demo-rn/src/${item.enName}/pages/${item.lowercaseName}`
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
