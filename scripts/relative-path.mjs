import * as path from 'path'

export function relativeFilePath(from, to) {
  if (
    (from[0] === path.sep && to[0] !== path.sep) ||
    (from[0] !== path.sep && to[0] === path.sep)
  ) {
    return ''
  }

  if (from[from.length - 1] === path.sep || to[to.length - 1] === path.sep) {
    return ''
  }

  const fromPath = from.split(path.sep)
  const toPath = to.split(path.sep)

  let i = 0
  while (i < fromPath.length - 1) {
    if (toPath[i] === undefined || fromPath[i] !== toPath[i]) {
      break
    }
    ++i
  }

  const val = toPath.slice(i).join(path.sep)

  if (i === fromPath.length - 1) {
    return '.' + path.sep + val
  }

  return `..${path.sep}`.repeat(fromPath.length - 1 - i) + val
}
