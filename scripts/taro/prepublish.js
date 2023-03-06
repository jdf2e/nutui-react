const path = require('path')
const packageData = require('../../package.json')
const fsExtra = require('fs-extra')

if (packageData.name.indexOf('-taro') > -1) {
  console.log('prepublish done')
  fsExtra.copySync(
    path.join(process.cwd(), 'package.json'),
    path.join(process.cwd(), 'node_modules/.cache/package.json.bk'),
    { overwrite: true }
  )
  delete packageData.dependencies['react-router-dom']
  fsExtra.writeJsonSync(path.join(process.cwd(), 'package.json'), packageData, {
    spaces: 2,
  })
}
