const path = require('path')
const fse = require('fs-extra')

const themeDir = path.join(__dirname, '../dist/theme-react')
const siteDir = path.join(process.cwd(), '../nutui-site/dist')

fse.copy(themeDir, path.join(siteDir, 'theme-react'))
