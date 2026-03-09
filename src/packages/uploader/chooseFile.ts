/**
 * 从本地选择文件。
 */
export const chooseFile = (options: any) => {
  const shouldBeObjectNative = (options: any) => {
    const isObject =
      options !== null && typeof options === 'object' && !Array.isArray(options)

    if (!isObject) {
      return {
        flag: false,
        msg: 'parameter should be Object',
      }
    }

    return {
      flag: true,
      msg: '',
    }
  }
  // options must be an Object
  const isObject = shouldBeObjectNative(options)
  if (!isObject.flag) {
    const res = { errMsg: `taroChooseFile:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  const {
    count = 1,
    success,
    fail,
    complete,
    imageId = 'taroChooseFile',
    sourceType = ['album', 'camera'],
  } = options
  const res: any = {
    tempFilePaths: [],
    tempFiles: [],
    errMsg: '',
  }
  const handleSuccess = (
    data: any = {},
    resolve: (v: any) => any = Promise.resolve.bind(Promise)
  ) => {
    if (!data.errMsg) {
      data.errMsg = 'taroChooseFile:ok'
    }
    typeof success === 'function' && success(data)
    typeof complete === 'function' && complete(data)
    return resolve(data)
  }
  const handleFail = (
    data: any = {},
    reject: (e: any) => any = Promise.reject.bind(Promise)
  ) => {
    if (!data.errMsg) {
      data.errMsg = 'taroChooseFile:fail'
    } else {
      data.errMsg = `taroChooseFile:fail ${data.errMsg}`
    }
    console.error(data.errMsg)
    typeof fail === 'function' && fail(data)
    typeof complete === 'function' && complete(data)
    return reject(data)
  }
  const sourceTypeString = sourceType && sourceType.toString()
  const acceptableSourceType = ['user', 'environment', 'camera']
  if (count && typeof count !== 'number') {
    res.errMsg = `parameter error: count should be number, but got ${typeof count}`
    return handleFail(res)
  }
  const el = document.getElementById(imageId)
  if (!el) {
    res.errMsg = 'taroChooseFile:fail element not found'
    return handleFail(res)
  }
  if (count > 1) {
    el.setAttribute('multiple', 'multiple')
  } else {
    el.removeAttribute('multiple')
  }
  if (acceptableSourceType.indexOf(sourceTypeString) > -1) {
    el.setAttribute('capture', sourceTypeString)
  } else {
    el.removeAttribute('capture')
  }
  return new Promise((resolve) => {
    if (el) {
      const evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
      el.dispatchEvent(evt)
      el.onchange = (e: Event) => {
        const target = e.target as HTMLInputElement | null
        if (target) {
          const files = target.files || []
          const arr = Array.from(files)
          arr.forEach((item) => {
            const blob = new Blob([item], {
              type: item.type,
            })
            const url = URL.createObjectURL(blob)
            res.tempFilePaths.push(url)
            res.tempFiles.push({
              path: url,
              size: item.size,
              type: item.type,
              originalFileObj: item,
            })
          })
          handleSuccess(res, resolve)
          target.value = ''
        }
      }
    }
  })
}
