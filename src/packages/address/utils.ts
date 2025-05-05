const generateId = (name: string) => {
  return name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) // 使用字符的 Unicode 值作为 ID
}

export const transformData = (data: any) => {
  const groupByWordCode = (
    data: any,
    parentId: string | number,
    parentName: string
  ) => {
    return data?.reduce((acc: any, item: any) => {
      const { wordCode } = item
      if (!acc[wordCode]) {
        acc[wordCode] = []
      }
      const currentId = generateId(item.value)
      acc[wordCode].push({
        name: item.value,
        wordCode: item.wordCode,
        id: currentId,
        pId: parentId,
        pName: parentName,
        children:
          (item.children &&
            groupByWordCode(item.children, currentId, item.text)) ||
          null,
      })
      return acc
    }, {})
  }

  const extractTitles = (obj: any) => {
    return Object.keys(obj).map((key) => ({
      title: key,
      list: obj[key].map((item: any) => {
        if (item.children) {
          item.children = extractTitles(item.children)
        }
        return item
      }),
    }))
  }

  const middleData = groupByWordCode(data, '', '')
  const resultData = extractTitles(middleData)
  return resultData
}

export const findDataByName: any = (data: any, name: string) => {
  for (const item of data) {
    if (item.name?.indexOf(name) === 0) return item
    if (item.children) {
      const found = findDataByName(item.children, name)
      if (found) return found
    }
    if (item.list) {
      const found = findDataByName(item.list, name)
      if (found) return found
    }
  }
  return null // 如果没有找到，返回 null
}
