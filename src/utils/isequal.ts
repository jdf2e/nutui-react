function isequal(value: any, other: any): boolean {
  // 检查基本数据类型和引用类型的值是否相等
  if (value === other) return true

  // 检查是否为对象或数组
  if (
    typeof value !== 'object' ||
    value === null ||
    typeof other !== 'object' ||
    other === null
  ) {
    return false
  }

  // 获取对象或数组的所有键
  const keysA = Object.keys(value)
  const keysB = Object.keys(other)

  // 检查键的数量是否相等
  if (keysA.length !== keysB.length) {
    return false
  }

  // 递归检查每个键值对是否相等
  for (const key of keysA) {
    if (!keysB.includes(key) || !isequal(value[key], other[key])) {
      return false
    }
  }

  return true
}

export default isequal
