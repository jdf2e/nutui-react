function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char)

  if (index === -1) {
    return value
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index)
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

export function formatNumber(
  value: string,
  allowDot = true,
  allowMinus = true
) {
  if (allowDot) {
    // eslint-disable-next-line no-param-reassign
    value = trimExtraChar(value, '.', /\./g)
  } else {
    // eslint-disable-next-line prefer-destructuring, no-param-reassign
    value = value.split('.')[0]
  }

  if (allowMinus) {
    // eslint-disable-next-line no-param-reassign
    value = trimExtraChar(value, '-', /-/g)
  } else {
    // eslint-disable-next-line no-param-reassign
    value = value.replace(/-/, '')
  }
  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g

  return value.replace(regExp, '')
}
