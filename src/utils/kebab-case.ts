// 按词法边界分词后用 `-` 连接并小写，输出与 lodash kebabCase 的 ASCII 结果一致
// 分词规则对齐 lodash 的 unicodeWords：数字独立成词，连续大写段遇到「大写+小写」时断开
const reWords =
  /[A-Z]?[a-z]+(?=[^a-z]|$)|[A-Z]+(?=[A-Z][a-z]|[^A-Za-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g

export const kebabCase = (str: string) => {
  const words = String(str).match(reWords)
  return words ? words.map((word) => word.toLowerCase()).join('-') : ''
}
