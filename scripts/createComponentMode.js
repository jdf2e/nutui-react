// 创建模板
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const config = require('../src/config.json')
const demoModel = require('./demo')
const nav = config.nav

var newCpt = {
  version: '1.0.0',
  name: '',
  type: '',
  cName: '',
  desc: '',
  sort: '',
  show: true,
  taro: true,
  author: '',
}
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
        validate(value) {
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
      },
      {
        type: 'input',
        name: 'cName',
        message: '组件中文名(十个字以内)：',
        validate(value) {
          const pass = value && value.length <= 10
          if (pass) {
            return true
          }
          return '不能为空，且不能超过十个字符'
        },
      },
      {
        type: 'input',
        name: 'desc',
        message: '组件描述(五十个字以内)：',
      },
      {
        type: 'rawlist',
        name: 'type',
        message: '请选择组件类型(输入编号)：目前只支持组建模板',
        choices: ['component'],
        validate(value) {
          const pass = value && /^[1-4]$/.test(value)
          if (pass) {
            return true
          }
          return '输入有误！请输入选项前编号'
        },
      },
      {
        type: 'input',
        name: 'sort',
        message:
          '请选择组件分类(输入编号)：1基础组件，2布局组件，3导航组件，4数据录入，5操作反馈，6展示组件，7特色组件',
        validate(value) {
          const pass = /^[1-7]$/.test(value)
          if (pass) {
            return true
          }
          return '输入有误！请输入选项前编号'
        },
      },
      //   {
      //     type: 'confirm',
      //     name: 'showDemo',
      //     message: '是否需要DEMO页面?',
      //     default: true
      //   },
      //   {
      //     type: 'confirm',
      //     name: 'showTest',
      //     message: '是否需要单元测试页面?',
      //     default: true
      //   },
      {
        type: 'input',
        name: 'author',
        message: '组件作者(可署化名):',
      },
    ])
    .then(function (answers) {
      // answers.sort = String(sorts.indexOf(answers.sort));
      newCpt = Object.assign(newCpt, answers)
      createNew()
    })
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
    const dirPath = path.join(__dirname, `../src/packages/${nameLc}/`)
    const filePath = path.join(dirPath, `${nameLc}.tsx`)
    const indexFilePath = path.join(dirPath, `index.ts`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    try {
      fs.writeFileSync(filePath, content)
      fs.writeFileSync(indexFilePath, indexFileContent)
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
    let content = demoModel(name).react
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
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)
    const filePath = path.join(dirPath, `demo.tsx`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`生成demo.tsx文件成功`)
    })
  })
}

function createTaroDemo() {
  return new Promise((resolve, reject) => {
    const name = newCpt.name
    const nameLc = newCpt.name.toLowerCase()
    let content = demoModel(name).tarodemo
    const dirPath = path.join(__dirname, '../src/packages/' + nameLc)
    const filePath = path.join(dirPath, `demo.taro.tsx`)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath)
    }
    fs.writeFile(filePath, content, (err) => {
      if (err) throw err
      resolve(`生成demo.taro.tsx文件成功`)
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
    const name = newCpt.name

    let content = demoModel(name).doc
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
