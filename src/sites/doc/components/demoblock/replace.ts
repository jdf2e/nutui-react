import translation from '../../../../translation/translation.ts'
import * as babel from '@babel/standalone'
import replacePlugin from './replacePlugin'
const replacePlaceholders = (
  code: string,
  filename: string,
  lang: 'zh-CN' | 'en-US'
) => {
  const res = babel.transform(code, {
    presets: ['typescript'],
    filename,
    plugins: [[replacePlugin, { map: translation[lang] }]],
  })
  return res.code.replace(/\\u[\dA-Fa-f]{4}/g, function (match) {
    return String.fromCharCode(parseInt(match.replace('\\u', ''), 16))
  })
}
export default replacePlaceholders
