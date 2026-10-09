// 多版本 sync 的配置：数据源仓库、默认 major、各 major 的抽取参数。
// CLI 仓库自带（不随叶子包发布）。sync.mjs 读取它遍历 tag 生成快照。
//
// 说明：
// - repo 用 SSH。实测本机 https://github.com 不通、git@github.com 可达；SSH 也便于
//   在开发机复用已配置的凭证。CI 上若走 HTTPS，改这里即可。
// - cssVarPrefix：v3 与 v4 的组件 token 体系实测均为 --nutui-（3.x 的 variables.scss
//   有 900+ 行 --nutui-，仅个位数 --nut-scale-* 工具变量不带 !default、不计入 token），
//   故两者都用 --nutui-。保留该字段仅为未来某个 major 若切换前缀时的扩展点。
// - includePrerelease：v4 目前只有 beta tag，需允许预发布才能取到 latest。
export default {
  repo: 'git@github.com:jdf2e/nutui-react.git',
  defaultMajor: 'v4',
  majors: {
    v3: { cssVarPrefix: '--nutui-', includePrerelease: false, stable: true },
    v4: { cssVarPrefix: '--nutui-', includePrerelease: true, stable: false },
  },
}
