export interface IOptions {
  pName: string
  cName: string
  // 默认加载组件的 scss 样式文件，鸿蒙由于不支持 css 变量，优先加载无css 变量的 style.harmony.css 文件。
  style?: boolean | 'css'
}
