export const upperCaseFirst = (str: string) => {
  str = str.toLowerCase()
  str = str.replace(
    /\b\w+\b/g,
    (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
  )
  return str
}
