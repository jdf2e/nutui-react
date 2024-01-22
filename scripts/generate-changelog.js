const fs = require('fs-extra');
const path = require('path');
const changelog = fs.readFileSync(path.join(__dirname, '../CHANGELOG.md'), 'utf8');

const a = changelog.split('# v')
console.log(a[1])
const getLatestRelease = (cl) => {
  const a = changelog.split('# v')
  if(a.length === 0) return ''
  return `# v${a[1]}`

  // const tag1 = cl.indexOf('#')
  // if (tag1 > -1) {
  //   const tag2 = cl.split('').slice(tag1 + 1, cl.length - 1).join('').indexOf('#')
  //   if (tag2 > -1) {
  //     return cl.substring(tag1, tag2)
  //   }
  // }
  // return ''
}
let res = getLatestRelease(changelog);
if (res) {
  res += `\n> [CHANGELOG](https://github.com/jdf2e/nutui-react/blob/next/CHANGELOG.md)\n`
  fs.writeFileSync('.github/changelog.md', res);
}