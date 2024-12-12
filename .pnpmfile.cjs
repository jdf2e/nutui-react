function readPackage(pkg, context) {
  if(pkg.name == '@nutui/nutui-react-taro') {
    // console.log(pkg)
    // delete pkg.devDependencies[]
    // delete pkg.dependencies[]
  }
  if (pkg.name === '@nutui/nutui-taro-demo') {
    delete pkg.dependencies['@jdreact/jdreact-jsbundle-commonpack']
    delete pkg.dependencies['@jdtaro/plugin-platform-jdhybrid']
    delete pkg.dependencies['@jdtaro/taro-platform-jdharmony']
    delete pkg.dependencies['@jdtaro/plugin-platform-jdharmony-cpp']
    delete pkg.dependencies['@dongdesign/inject-jd-platform-styles']
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
}

