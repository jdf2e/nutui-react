// 创建模板
const prompts = require('@inquirer/prompts')
const path = require('path')
const fs = require('fs')
const config = require('../src/config.json')
const demoModel = require('./demo')
const nav = config.nav

var newCpt = {
  version: '3.0.0',
  name: '',
  type: '',
  cName: '',
  desc: '',
  sort: '',
  show: true,
  taro: true,
  v15: false,
  dd: true,
  author: '',
}

async function init() {
  const answers = {}
  answers.name = await prompts.input({
    message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
    validate: (value) => {
      let repeat = false
      for (var i = 0; i < nav.length; i++) {
        for (var j = 0; j < nav[i].packages.length; j++) {
          if (nav[i].packages[j].name === value) {
            repeat = true
          }
        }
      }

      if (repeat) {
        return '该组件名已存在！'
      }
      const pass = value && value.match(/^[A-Z]/)
      if (pass) {
        return true
      }
      return '不能为空，且每个单词的首字母都要大写，如TextBox'
    },
  })
  answers.cName = await prompts.input({
    message: '组件中文名(十个字以内)：',

    validate: (value) => {
      const pass = value && value.length <= 10

      if (pass) {
        return true
      }
      return '不能为空，且不能超过十个字符'
    },
  })
  answers.desc = await prompts.input({
    message: '组件描述(五十个字以内)：',
  })
  answers.type = await prompts.rawlist({
    message: '请选择组件类型(输入编号)：目前只支持组建模板',
    choices: ['component'],
    validate: (value) => {
      const pass = value && /^[1-4]$/.test(value)
      if (pass) {
        return true
      }
      return '输入有误！请输入选项前编号'
    },
  })
  answers.sort = await prompts.input({
    message:
      '请选择组件分类(输入编号)：1基础组件，2布局组件，3导航组件，4数据录入，5操作反馈，6展示组件，7特色组件',

    validate: (value) => {
      const pass = /^[1-7]$/.test(value)
      if (pass) {
        return true
      }
      return '输入有误！请输入选项前编号'
    },
  })
  answers.author = await prompts.input({
    message: '组件作者(可署化名):',
  })

  newCpt = Object.assign(newCpt, answers)
  createNew()
}

function createIndexJs() {
  const nameLc = newCpt.name.toLowerCase()
  const destPath = path.join('src/packages/' + nameLc)
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath)
  }

  if (newCpt.type == 'method') return
  return new Promise((resolve, reject) => {
    resolve(`生成index.js文件成功`)
  })
}

function createReact() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase()
    const name = newCpt.name
    let content = demoModel(name).react
    let indexFileContent = demoModel(name).index
    let typeFileContent = demoModel(name).types
    const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`)
    const filePath = path.join(dirPath, `${nameLc}.tsx`)
    const indexFilePath = path.join(dirPath, `index.ts`)
    const typeFilePath = path.join(dirPath, `types.ts`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    try {
      fs.writeFileSync(filePath, content)
      fs.writeFileSync(indexFilePath, indexFileContent)
      fs.writeFileSync(typeFilePath, typeFileContent)
    } catch (e) {
      throw e
    }
    resolve(`生成index.ts文件成功`)
  })
}

function createReactTaro() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase()
    const name = newCpt.name
    let content = demoModel(name).taroreact
    let indexFileContent = demoModel(name).taroindex
    const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`)
    const filePath = path.join(dirPath, `${nameLc}.taro.tsx`)
    const indexFilePath = path.join(dirPath, `index.taro.ts`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    try {
      fs.writeFileSync(filePath, content)
      fs.writeFileSync(indexFilePath, indexFileContent)
    } catch (e) {
      throw e
    }
    resolve(`生成index.taro.ts文件成功`)
  })
}

function createDemo() {
  return new Promise((resolve, reject) => {
    const name = newCpt.name
    const nameLc = newCpt.name.toLowerCase()
    let content = demoModel(name).demo
    let demoContent = demoModel(name).demoitem
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)
    const filePath = path.join(dirPath, `demo.tsx`)
    const demosPath = path.join(dirPath, 'demos')
    const h5Path = path.join(demosPath, 'h5')
    const demoPath = path.join(h5Path, 'demo1.tsx')

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
    }
    if (!fs.existsSync(demosPath)) {
      fs.mkdirSync(demosPath)
    }
    if (!fs.existsSync(h5Path)) {
      fs.mkdirSync(h5Path)
    }

    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`生成demo.tsx文件成功`)
    })

    fs.writeFile(demoPath, demoContent, (err) => {
      if (err) throw err
      resolve(`生成demo1.tsx文件成功`)
    })
  })
}

function createTaroDemo() {
  return new Promise((resolve, reject) => {
    const name = newCpt.name
    const nameLc = newCpt.name.toLowerCase()
    let content = demoModel(name).tarodemo
    let demoContent = demoModel(name).tarodemoitem
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)
    const filePath = path.join(dirPath, `demo.taro.tsx`)
    const demosPath = path.join(dirPath, 'demos')
    const taroDirPath = path.join(demosPath, 'taro')
    const demoPath = path.join(taroDirPath, 'demo1.tsx')

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
    }
    if (!fs.existsSync(demosPath)) {
      fs.mkdirSync(demosPath)
    }
    if (!fs.existsSync(taroDirPath)) {
      fs.mkdirSync(taroDirPath)
    }

    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`生成demo.taro.tsx文件成功`)
    })
    fs.writeFile(demoPath, demoContent, (err) => {
      if (err) throw err
      resolve(`生成demo1.tsx文件成功`)
    })
  })
}

function addToPackageJson() {
  return new Promise((resolve, reject) => {
    let sort = newCpt.sort
    newCpt.sort = nav[sort - 1].packages.length + 1
    nav[sort - 1].packages.push(newCpt)
    nav[sort - 1].packages = [
      ...nav[sort - 1].packages.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      }),
    ]
    config.nav = nav
    const dirPath = path.join(__dirname, `../`)
    const filePath = path.join(dirPath, `src/config.json`)

    var tempfile = JSON.stringify(config, null, 2)
    fs.writeFile(filePath, tempfile, (err) => {
      if (err) throw err
      resolve(`修改config.json文件成功`)
    })
  })
}
function createScss() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase()
    let content = `.nut-${nameLc} {}`
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)
    const filePath = path.join(dirPath, `${nameLc}.scss`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`${nameLc}.scss文件成功`)
    })
  })
}
function createDoc() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase()
    const { name, cName, desc } = newCpt

    let content = demoModel(name, cName, desc).doc
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)
    const filePath = path.join(dirPath, `doc.md`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`doc.md文件成功`)
    })
  })
}
function createTest() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase()
    const { name } = newCpt

    let content = demoModel(name).test
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)

    const testFolderPath = path.join(dirPath, `__test__`)
    const filePath = path.join(testFolderPath, `${nameLc}.spec.tsx`)

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
    }
    if (!fs.existsSync(testFolderPath)) {
      fs.mkdirSync(testFolderPath)
    }
    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`doc.md文件成功`)
    })
  })
}
function createNew() {
  createIndexJs()
    .then(() => {
      if (newCpt.type == 'component' || newCpt.type == 'method') {
        return createReact() && createReactTaro()
      } else {
        return
      }
    })
    .then(() => {
      return createScss()
    })
    .then(() => {
      return createDemo()
    })
    .then(() => {
      return createTaroDemo()
    })
    .then(() => {
      return createDoc()
    })
    .then(() => {
      return createTest()
    })
    .then(() => {
      return addToPackageJson()
    })
    .then(() => {
      console.log('组件模板生成完毕，请开始你的表演~')
      process.exit()
    })
}
function createComponent() {
  init()
}
createComponent()
