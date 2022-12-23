const path = require('path')
const fsExtra = require('fs-extra')
const packageData = require('../../package.json')

if (packageData.name.indexOf('-taro') > -1) {
  console.log('postpublish done')
  fsExtra.copySync(
    path.join(process.cwd(), 'node_modules/.cache/package.json.bk'),
    path.join(process.cwd(), 'package.json'),
    { overwrite: true }
  )
  fsExtra.removeSync(
    path.join(process.cwd(), 'node_modules/.cache/package.json.bk')
  )
}
