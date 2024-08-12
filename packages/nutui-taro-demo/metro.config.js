/* eslint-disable import/no-commonjs */
const { mergeConfig } = require('@react-native/metro-config')
const { getMetroConfig } = require('@jdtaro/plugin-platform-jdrn/dist/supporter')


module.exports = (async function (){
  return mergeConfig({
    resolver: {}
  }, await getMetroConfig())
})()