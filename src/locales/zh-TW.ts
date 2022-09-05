import { BaseLang } from './base'

const zhTW: BaseLang = {
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  done: '完成',
  noData: '暫無數據',
  placeholder: '請輸入',
  select: '請選擇',
  video: {
    errorTip: '視頻加載失敗',
    clickRetry: '點擊重試',
  },
  fixednav: {
    activeText: '收起導航',
    unActiveText: '快速導航',
  },
  infiniteloading: {
    pullRefreshText: '鬆開刷新',
    loadText: '加載中……',
    loadMoreText: '哎呀，這裡是底部了啦',
  },
  pagination: {
    prev: '上一頁',
    next: '下一頁',
  },
  range: { rangeText: '不在該區間內' },
  calendaritem: {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    end: '結束',
    start: '開始',
    title: '行事曆選擇',
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    today: '今天',
    loadPreviousMonth: '加載上一個月',
    noEarlierMonth: '沒有更早月份',
  },
  shortpassword: {
    title: '請輸入密碼',
    desc: '您使用了虛擬資產,請進行驗證',
    tips: '忘記密碼',
  },
  uploader: {
    ready: '準備完成',
    readyUpload: '準備上傳',
    waitingUpload: '等待上傳',
    uploading: '上傳中...',
    success: '上傳成功',
    error: '上傳失敗',
    deleteWord: '使用者阻止了刪除！',
  },
  countdown: {
    day: '天',
    hour: '時',
    minute: '分',
    second: '秒',
  },
  address: {
    selectRegion: '請選擇所在地區',
    deliveryTo: '配送至',
    chooseAnotherAddress: '選擇其他地址',
  },
  signature: {
    reSign: '重簽',
    unSupportTpl: '對不起,當前瀏覽器不支持Canvas,無法使用本控制項！',
  },
  ecard: {
    chooseText: '請選擇電子卡面值',
    otherValueText: '其他面值',
    placeholder: '請輸入1-5000整數',
  },
  timeselect: {
    pickupTime: '取件時間',
  },
  sku: {
    buyNow: '立即購買',
    buyNumber: '購買數量',
    addToCard: '加入購物車',
  },
  skuheader: {
    skuId: '商品編號',
  },
  addresslist: {
    addAddress: '新建地址',
  },
  comment: {
    complaintsText: '我要投訴',
    additionalReview: (day: number) => `購買${day}天後追評`,
    additionalImages: (length: number) => `${length}張追評圖片`,
  },
  searchbar: {
    basePlaceholder: '上京東，購好物',
    text: '文字',
    test: '測試',
    title1: '基礎用法',
    title2: '蒐索框形狀及最大長度',
    title3: '蒐索框內外背景設定',
    title4: '蒐索框文字設定',
    title5: '自定義圖標設定',
    title6: '數據改變監聽',
  },
  audio: {
    back: '快退',
    forward: '快進',
    pause: '暫停',
    start: '開始',
    mute: '靜音',
    tips: 'onPlayEnd事件在loop=false時才會觸發',
  },
  datepicker: {
    year: '年',
    month: '月',
    day: '日',
    hour: '時',
    min: '分',
    seconds: '秒',
  },
  pullToRefresh: {
    pullingText: '下拉刷新',
    canReleaseText: '鬆開刷新',
    refreshingText: '加載中...',
    completeText: '刷新成功',
  },
}
export default zhTW
