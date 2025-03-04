import { resolve } from 'path'

export function relativePath(target, source) {
  const resolveSource = resolve(source)
  const resolveTarget = resolve(target)

  let str = resolveTarget.substr(0, resolve(resolveTarget).lastIndexOf('/'))
  while (resolveSource.indexOf(str) == -1) {
    str = str.substr(0, str.lastIndexOf('/'))
  }

  const remain = resolveSource.replace(str+'/', '')
  const matchedSlash = remain.match(/\//g)
  let res = ''
  if (!matchedSlash) {
    res = resolveTarget.replace(str+'/', './')
  } else {
    res = resolveTarget.replace(str+'/', '../'.repeat(matchedSlash.length))
  }
  return res
}