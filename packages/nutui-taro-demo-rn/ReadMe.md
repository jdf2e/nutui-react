# NutUI-React 支持 Taro 的调研

yarn安装

外层到内层，不写组件类别，可不反复修改demo入口文件
`node ./scripts/rn/copy-file.js [组件名] [组件类别]`

内层到外层
`node ./scripts/rn/copy-file.js [组件名] reverse`

外层scss文件转鸿蒙css
`node ./scripts/rn/replace-css-var.js [组件名]`

修改nutui-react下面对应组件文件适配

运行`pnpm run dev:taro:rn`

属性支持参考 https://taro-mcube-docs-pro.local-pf.jd.com/docs/jdrn/react-native-remind