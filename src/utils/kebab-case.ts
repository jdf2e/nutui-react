/**
 * 仅用于 CSS 变量 / DOM class token 域的 kebabCase 实现（零依赖内联，替代 lodash.kebabcase）。
 *
 * 注意：它**不是** lodash.kebabcase 的通用替身——
 *  - 只保证对 NutUI CSS Variables token（camelCase 标识符）与 lodash 100% 一致；
 *  - 不处理空格分隔（'foo bar'）、Unicode 变音字符等一般字符串场景。
 * 业务侧如需对任意文本做 kebab 化，请自行使用 lodash 或扩展本函数。
 */
export const kebabCase = (str: string): string => {
  return str
    .replace(/^--/, '')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()
}
