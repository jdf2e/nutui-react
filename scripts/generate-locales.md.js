const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')

const locales = ['en-US', 'zh-TW']
const componentDocs = glob.sync('./src/packages/**/doc.md')

componentDocs.forEach((file) => {
  locales.forEach((locale) => {
    if (!fs.pathExistsSync(file.replace('doc.md', `doc.${locale}.md`))) {
      console.log('generate ', file.replace('doc.md', `doc.${locale}.md`))
      fs.copySync(path.join(file), path.join(file.replace('doc.md', `doc.${locale}.md`)))
    }
  })
})
