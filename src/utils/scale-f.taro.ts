export let scale = 1

export async function getScaleF() {
  return 1
}

export function setScaleF() {
  scale = 1
  return scale
}

export async function refreshScaleF() {
  scale = 1
  return scale
}

export function initScaleF() {
  scale = 1
  return () => {}
}
