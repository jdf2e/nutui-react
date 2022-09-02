import { BaseLang } from './base'

const zhCN: BaseLang = {
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  done: '完成',
  noData: '暂无数据',
  placeholder: '请输入内容',
  select: '请选择',
  video: {
    errorTip: '视频加载失败',
    clickRetry: '点击重试',
  },
  fixednav: {
    activeText: '收起导航',
    unActiveText: '快速导航',
  },
  infiniteloading: {
    pullRefreshText: '松开刷新',
    loadText: '加载中……',
    loadMoreText: '哎呀，这里是底部了啦',
  },
  pagination: {
    prev: '上一页',
    next: '下一页',
  },
  range: {
    rangeText: '不在该区间内',
  },
  calendaritem: {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    end: '结束',
    start: '开始',
    title: '日历选择',
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    today: '今天',
    loadPreviousMonth: '加载上一个月',
    noEarlierMonth: '没有更早月份',
  },
  shortpassword: {
    title: '请输入密码',
    desc: '您使用了虚拟资产，请进行验证',
    tips: '忘记密码',
  },
  uploader: {
    ready: '准备完成',
    readyUpload: '准备上传',
    waitingUpload: '等待上传',
    uploading: '上传中...',
    success: '上传成功',
    error: '上传失败',
    deleteWord: '用户阻止了删除！',
  },
  countdown: {
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒',
  },
  address: {
    selectRegion: '请选择所在地区',
    deliveryTo: '配送至',
    chooseAnotherAddress: '选择其他地址',
  },
  signature: {
    reSign: '重签',
    unSupportTpl: '对不起，当前浏览器不支持Canvas，无法使用本控件！',
  },
  ecard: {
    chooseText: '请选择电子卡面值',
    otherValueText: '其他面值',
    placeholder: '请输入1-5000整数',
  },
  timeselect: {
    pickupTime: '取件时间',
  },
  sku: {
    buyNow: '立即购买',
    buyNumber: '购买数量',
    addToCard: '加入购物车',
  },
  skuheader: {
    skuId: '商品编号',
  },
  addresslist: {
    addAddress: '新建地址',
  },
  comment: {
    complaintsText: '我要投诉',
    additionalReview: (day: number) => `购买${day}天后追评`,
    additionalImages: (length: number) => `${length}张追评图片`,
  },
  searchbar: {
    basePlaceholder: '上京东，购好物',
    text: '文本',
    test: '测试',
    title1: '基础用法',
    title2: '搜索框形状及最大长度',
    title3: '搜索框内外背景设置',
    title4: '搜索框文本设置',
    title5: '自定义图标设置',
    title6: '数据改变监听',
  },
  audio: {
    back: '快退',
    forward: '快进',
    pause: '暂停',
    start: '开始',
    mute: '静音',
    tips: 'onPlayEnd事件在loop=false时才会触发',
  },
  datepicker: {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    min: '分',
    seconds: '秒',
  },
  pullToRefresh: {
    pullingText: '下拉刷新',
    canReleaseText: '松开刷新',
    refreshingText: '加载中...',
    completeText: '刷新成功',
  },
}
export default zhCN
