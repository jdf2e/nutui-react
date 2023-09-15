import { useRef } from 'react'

const idCounter: { [key: string]: number } = {}

function uniqueId(prefix = '$nut$') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0
  }

  const id = ++idCounter[prefix]
  if (prefix === '$nut$') {
    return `${id}`
  }
  return `${prefix}${id}`
}

export default function useUuid() {
  const idRef = useRef(uniqueId())
  return idRef.current
}
