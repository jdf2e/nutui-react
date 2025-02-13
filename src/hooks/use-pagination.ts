interface PaginationOptions {
  // 当前页码, 从 1 开始
  current: number
  // 数据总条数
  total: number
  // 每页显示的条目数
  itemsPerPage: number
  // 指示器条目数量
  displayCount: number
  // 省略符号
  ellipse: boolean
}

export type ButtonItem = { number: number; text: string; selected?: boolean }

type PaginationResult = [
  // 指示器
  buttons: Array<ButtonItem>,
  // 指示器的总数量
  buttonsCount: number,
]

const defaultPaginationOptions: Partial<PaginationOptions> = {
  current: 0,
  itemsPerPage: 10,
  displayCount: 5,
  ellipse: false,
}

function human2Machine(number: number) {
  return --number
}

function calculateButtons(options: PaginationOptions, buttonsCount: number) {
  // 分页器内部的索引从 0 开始，用户使用的索引从 1 开始
  const halfIndex = Math.floor(options.displayCount / 2)
  const buttonsCountIndex = human2Machine(buttonsCount)
  const displayCountIndex = human2Machine(options.displayCount)
  const currentIndex = human2Machine(options.current)
  let start
  let end
  if (buttonsCountIndex <= displayCountIndex) {
    start = 0
    end = buttonsCountIndex
  } else {
    start = Math.max(0, currentIndex - halfIndex)
    end = Math.min(buttonsCountIndex, currentIndex + halfIndex)
    if (end - start < displayCountIndex) {
      if (start === 0) {
        end = Math.min(start + displayCountIndex, buttonsCountIndex)
      } else if (end === buttonsCountIndex) {
        start = Math.max(end - displayCountIndex, 1)
      }
    } else if (end - start > displayCountIndex) {
      end = start + displayCountIndex
    }
  }

  const buttons = []
  for (let i = start; i <= end; i++) {
    const humanPageNumber = i + 1
    buttons.push({
      number: humanPageNumber,
      text: humanPageNumber.toString(),
      selected: options.current === humanPageNumber,
    })
  }

  return addEllipses(buttons, {
    buttonsCount,
    ellipse: options.ellipse,
    displayCount: options.displayCount,
  })
}

function addEllipses(
  buttons: Array<ButtonItem>,
  {
    displayCount,
    buttonsCount,
    ellipse,
  }: { displayCount: number; buttonsCount: number; ellipse: boolean }
) {
  if (buttonsCount <= displayCount || !ellipse) return buttons
  const start = buttons[0]
  const end = buttons[buttons.length - 1]

  const leftEllipse = start.number > 1
  const rightEllipse = end.number < buttonsCount
  if (leftEllipse) {
    buttons.unshift({ number: start.number - 1, text: '...' })
  }
  if (rightEllipse) {
    buttons.push({ number: end.number + 1, text: '...' })
  }
  return buttons
}

export const usePagination = (options: PaginationOptions): PaginationResult => {
  const mergedOptions = {
    ...defaultPaginationOptions,
    ...options,
  }
  const { total, itemsPerPage } = mergedOptions
  const buttonsCount = Math.ceil((total || 0) / itemsPerPage) || 1

  return [calculateButtons(mergedOptions, buttonsCount), buttonsCount]
}
