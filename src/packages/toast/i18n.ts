import { useTranslate } from '@/sites/assets/locale'

interface T {
  basic: string
  toastText: string
  toastTextMsg: string
  toastTitle: string
  toastSuccess: string
  toastError: string
  toastLoading: string
  toastWarning: string
  toastAll: string
  toastBottom: string
  toastTransparent: string
  toastDuration: string
  toastDurationText: string
  toastHide: string
  toastCustomIcon: string
  toastWordBreak: string
  toastWordBreak1: string
  toastWordBreak2: string
}

export default () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      toastText: '文字提示',
      toastTextMsg: '网络失败，请稍后再试~',
      toastTitle: '标题提示',
      toastSuccess: '成功提示',
      toastError: '失败提示',
      toastWarning: '警告提示',
      toastLoading: '加载提示',
      toastAll: 'Toast 不消失',
      toastBottom: '自定义底部高度',
      toastTransparent: '加载状态透明遮罩',
      toastDuration: '设置展示时长',
      toastDurationText: '展示时长为10秒',
      toastHide: '隐藏Toast',
      toastCustomIcon: '自定义Icon',
      toastWordBreak: '换行截断方式',
      toastWordBreak1: '换行时截断单词',
      toastWordBreak2: '换行时不截断单词',
    },
    'en-US': {
      basic: 'Basic Usage',
      toastText: 'Text Message',
      toastTextMsg: 'Network failure, please try again later~',
      toastTitle: 'Title',
      toastSuccess: 'Success',
      toastError: 'Error',
      toastWarning: 'Warning',
      toastLoading: 'Loading',
      toastAll: 'Not Disappear',
      toastBottom: 'Custom Bottom Height',
      toastTransparent: 'Loading Transparent Cover',
      toastDuration: 'Set Display Duration',
      toastDurationText: 'Show for 10 seconds',
      toastHide: 'Hide Toast',
      toastCustomIcon: 'Custom Icon',
      toastWordBreak: 'Word Break',
      toastWordBreak1: 'Break All',
      toastWordBreak2: 'Break Word',
    },
  })
  return { translated }
}
