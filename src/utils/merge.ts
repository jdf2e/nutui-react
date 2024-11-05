export function merge(...objects) {
  const result = Array.isArray(objects[0]) ? [] : {}

  function mergeHelper(obj, path = []) {
    for (const [key, value] of Object.entries(obj)) {
      const newPath = [...path, key]

      if (Array.isArray(value)) {
        // Arrays are always overridden
        result[key] = [...value]
      } else if (typeof value === 'object' && value !== null) {
        // Check for circular references
        // eslint-disable-next-line no-continue
        if (path.some((p) => p === value)) continue

        // Recursively merge objects
        if (!result[key]) result[key] = {}
        mergeHelper(value, newPath)
      } else {
        // Set primitive values
        result[key] = value
      }
    }
  }

  objects.filter((obj) => !!obj).forEach((obj) => mergeHelper(obj))

  return result
}
