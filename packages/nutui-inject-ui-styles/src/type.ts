export interface IOptions {
  pName: string
  cName: string
  // 默认加载组件的 scss 样式文件，鸿蒙由于不支持 css 变量，优先加载无css 变量的 style.harmony.css 文件。mini 则加载无 RTL 的精简产物。注意：'mini' 仅在普通小程序/Web 构建下生效；harmony()/dynamic() 平台下会自动回退为 style.harmony.css 并输出警告。
  style?: boolean | 'css' | 'mini'
}
