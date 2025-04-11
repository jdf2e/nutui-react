const generateId = (name: string) => {
  // 简单实现：根据 name 生成一个随机 ID
  return name.charCodeAt(0) + name.charCodeAt(1) // 使用字符的 Unicode 值作为 ID
}

export const transformData = (data: any) => {
  const groupByWordCode = (data: any) => {
    return data?.reduce((acc: any, item: any) => {
      const { wordCode } = item
      if (!acc[wordCode]) {
        acc[wordCode] = []
      }
      acc[wordCode].push({
        name: item.value,
        wordCode: item.wordCode,
        id: generateId(item.value),
        children: (item.children && groupByWordCode(item.children)) || null,
      })

      return acc
    }, {})
  }

  const extractTitles = (obj: any) => {
    return Object.keys(obj).map((key) => ({
      title: key,
      list: obj[key].map((item: any) => {
        // console.log('item', item)
        if (item.children) {
          item.children = extractTitles(item.children)
        }
        return item
      }),
    }))
  }

  const middleData = groupByWordCode(data)
  const resultData = extractTitles(middleData)
  return resultData
}
