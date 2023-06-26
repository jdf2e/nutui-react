/*
 * 用于发布之前纠正 H5 和 Taro 版本的依赖
 * */
const path = require('path')
const fsExtra = require('fs-extra')
const packageData = require('../package.json')

const cachePath = path.join(process.cwd(), '.cache/')
if (!fsExtra.ensureDirSync(cachePath)) {
  fsExtra.mkdirpSync(cachePath)
}

fsExtra.copySync(
  path.join(process.cwd(), 'package.json'),
  path.join(cachePath, 'package.json.bk'),
  { overwrite: true }
)

if (packageData.name.indexOf('-taro') > -1) {
  delete packageData.dependencies['@nutui/icons-react']
} else {
  delete packageData.dependencies['@nutui/icons-react-taro']
}

delete packageData.devDependencies
packageData.scripts = {}

packageData.scripts['postpublish'] = 'node scripts/postpublish.js'

fsExtra.writeJsonSync(path.join(process.cwd(), 'package.json'), packageData, {
  spaces: 2,
})
