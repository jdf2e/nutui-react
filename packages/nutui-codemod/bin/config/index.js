const pkgVersion = process.argv.indexOf('-taro') > -1 ? 'taro' : 'h5'
const pkgInfo = {
  h5: {
    icon: '@nutui/icons-react',
    ui: '@nutui/nutui-react',
  },
  taro: {
    icon: '@nutui/icons-react-taro',
    ui: '@nutui/nutui-react-taro',
  },
}

pkgInfo[pkgVersion].version = pkgVersion

module.exports = pkgInfo[pkgVersion]
