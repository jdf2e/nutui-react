import { CascaderOption, CascaderFormat, CascaderOptionKey } from '@/types'

export const normalizeOptions = (
  options: CascaderOption[],
  keyMap: CascaderOptionKey
): CascaderOption[] | undefined => {
  if (!options) return undefined
  return options.map((opt: any) => {
    const {
      [keyMap.textKey]: text,
      [keyMap.valueKey]: value,
      [keyMap.childrenKey]: children,
      ...others
    } = opt
    return {
      text,
      value,
      children: normalizeOptions(children, keyMap),
      ...others,
    } as CascaderOption
  })
}

export const normalizeListOptions = (
  options: CascaderOption[],
  format: CascaderFormat
) => {
  const defaultConvertConfig = {
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: 'sortKey',
  }
  const mergedFormat = {
    ...defaultConvertConfig,
    ...format,
  }
  const { topId, idKey, pidKey, sortKey } = mergedFormat
  const map: { [key: string]: CascaderOption[] } = {}
  options.forEach((opt) => {
    const { [pidKey]: pid, [idKey]: id, ...others } = opt as any
    const newNode: any = { pid, id, ...others }
    if (map[pid]) {
      map[pid].push(newNode)
    } else {
      map[pid] = [newNode]
    }
  })
  for (const key in map) {
    // eslint-disable-next-line no-continue
    if (!Object.prototype.hasOwnProperty.call(map, key)) continue
    map[key].sort((a: any, b: any) => a[sortKey] - b[sortKey])
    map[key].forEach((option: any) => {
      if (map[option.id]) {
        option.children = map[option.id]
      }
    })
  }
  // @ts-ignore
  return map[topId]
}
