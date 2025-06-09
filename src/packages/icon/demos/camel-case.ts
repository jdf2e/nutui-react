const UPPERCASE = /[\p{Lu}]/u
const LOWERCASE = /[\p{Ll}]/u
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u
const SEPARATORS = /[_.\- ]+/

const LEADING_SEPARATORS = new RegExp(`^${SEPARATORS.source}`)
const SEPARATORS_AND_IDENTIFIER = new RegExp(
  SEPARATORS.source + IDENTIFIER.source,
  'gu'
)
const NUMBERS_AND_IDENTIFIER = new RegExp(`\\d+${IDENTIFIER.source}`, 'gu')

const preserveCamelCase = (
  string: string | any[],
  toLowerCase: { (string: any): any; (arg0: any): any },
  toUpperCase: { (string: any): any; (arg0: any): any }
) => {
  let isLastCharLower = false
  let isLastCharUpper = false
  let isLastLastCharUpper = false

  for (let index = 0; index < string.length; index++) {
    const character = string[index]

    if (isLastCharLower && UPPERCASE.test(character)) {
      string = `${string.slice(0, index)}-${string.slice(index)}`
      isLastCharLower = false
      isLastLastCharUpper = isLastCharUpper
      isLastCharUpper = true
      index++
    } else if (
      isLastCharUpper &&
      isLastLastCharUpper &&
      LOWERCASE.test(character)
    ) {
      string = `${string.slice(0, index - 1)}-${string.slice(index - 1)}`
      isLastLastCharUpper = isLastCharUpper
      isLastCharUpper = false
      isLastCharLower = true
    } else {
      isLastCharLower =
        toLowerCase(character) === character &&
        toUpperCase(character) !== character
      isLastLastCharUpper = isLastCharUpper
      isLastCharUpper =
        toUpperCase(character) === character &&
        toLowerCase(character) !== character
    }
  }

  return string
}

const preserveConsecutiveUppercase = (
  input: string,
  toLowerCase: { (string: any): any; (arg0: any): any }
) => {
  LEADING_CAPITAL.lastIndex = 0

  return input.replace(LEADING_CAPITAL, (m1: any) => toLowerCase(m1))
}

const postProcess = (
  input: string,
  toUpperCase: { (string: any): any; (arg0: any): any }
) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0
  NUMBERS_AND_IDENTIFIER.lastIndex = 0

  return input
    .replace(SEPARATORS_AND_IDENTIFIER, (_: any, identifier: any) =>
      toUpperCase(identifier)
    )
    .replace(NUMBERS_AND_IDENTIFIER, (m: any) => toUpperCase(m))
}

export const camelCase = (input: any, options: any) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`')
  }

  options = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...options,
  }

  if (Array.isArray(input)) {
    input = input
      .map((x) => x.trim())
      .filter((x) => x.length)
      .join('-')
  } else {
    input = input.trim()
  }

  if (input.length === 0) {
    return ''
  }

  const toLowerCase =
    options.locale === false
      ? (string: string) => string.toLowerCase()
      : (string: string) => string.toLocaleLowerCase(options.locale)

  const toUpperCase =
    options.locale === false
      ? (string: string) => string.toUpperCase()
      : (string: string) => string.toLocaleUpperCase(options.locale)

  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return ''
    }

    return options.pascalCase ? toUpperCase(input) : toLowerCase(input)
  }

  const hasUpperCase = input !== toLowerCase(input)

  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase)
  }

  input = input.replace(LEADING_SEPARATORS, '')
  input = options.preserveConsecutiveUppercase
    ? preserveConsecutiveUppercase(input, toLowerCase)
    : toLowerCase(input)

  if (options.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1)
  }

  return postProcess(input, toUpperCase)
}
