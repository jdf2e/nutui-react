const kebabCase = (camelCaseString: string) => {
  return camelCaseString
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
    .toLowerCase()
}
export default kebabCase
