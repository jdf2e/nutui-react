import { BaseLang } from './base'

const zhUG: BaseLang = {
  save: 'ساقلاش',
  confirm: 'ھەئە',
  cancel: 'ياق',
  done: 'تامام',
  noData: 'مەزمۇن يوق',
  placeholder: 'كىرگۈزۈڭ',
  select: 'تاللاڭ',
  video: {
    errorTip: 'فىلىمنى قويۇش مەغلۇپ بولدى',
    clickRetry: 'قايتا سىناش',
  },
  fixednav: {
    activeText: 'يىغىش',
    unActiveText: 'ئۇلىنىش',
  },
  infiniteloading: {
    pullRefreshText: 'قويۇپ بېرىڭ',
    loadText: 'سەل ساقلاڭ',
    loadMoreText: 'ۋاي تۈگىدى',
  },
  pagination: {
    prev: 'ئالدىنقى',
    next: 'كېيىنكى',
  },
  range: { rangeText: 'ئېشىپ كەتتى' },
  calendaritem: {
    weekdays: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    end: 'ئاخىرى',
    start: 'بېشى',
    title: 'تاللاڭ',
    monthTitle: (year: number, month: number) => `${year} يىلى ${month} ئاي`,
    today: 'بۈگۈن',
    loadPreviousMonth: 'ئالدىنقى ئاي',
    noEarlierMonth: 'تۈگىدى',
  },
  shortpassword: {
    title: 'مەخپى نومۇرنى كىرگۈزۈڭ',
    desc: 'مەۋھۇم بايلىق ئىشلىتىش ئۈچۈن',
    tips: 'ئۇنتۇپ قاپتىمەن',
  },
  uploader: {
    ready: 'تاماملىنىۋاتىدۇ',
    readyUpload: 'يوللاش ئالدىدا',
    waitingUpload: 'ساقلاۋاتىدۇ',
    uploading: 'يوللىنىۋاتىدۇ...',
    success: 'مۇۋەپپەقىيەتلىك بولدى',
    error: 'مەغلۇپ بولدى',
    deleteWord: 'ئۆچۈرگىلى بولمايدۇ!',
  },
  countdown: {
    day: 'كۈن',
    hour: 'سائەت',
    minute: 'مىنۇت',
    second: 'سېكۇنت',
  },
  address: {
    selectRegion: 'ئادىرىسنى تاللاڭ',
    deliveryTo: 'قەيەرگە',
    chooseAnotherAddress: 'باشقىنى تاللاش',
  },
  signature: {
    reSign: 'قايتا',
    unSupportTpl: 'كەچۈرۈڭ، بۇ توركۆرگۈچ Canvas قوللىمايدىكەن',
  },
  ecard: {
    chooseText: 'قىممەتنى تاللاڭ',
    otherValueText: 'باشقا قىممەت',
    placeholder: '1 دىن چوڭ 5000 دىن كىچىك پۈتۈن سان كىرگۈزۈڭ',
  },
  timeselect: {
    pickupTime: 'ئېلىۋىلىش ۋاقتى',
  },
  sku: {
    buyNow: 'سېتىۋالىمەن',
    buyNumber: 'سانى',
    addToCard: 'ھارۋىغا سېلىش',
  },
  skuheader: {
    skuId: 'نومۇرى',
  },
  addresslist: {
    addAddress: 'ئادىرىس قوشۇش',
  },
  comment: {
    complaintsText: 'ئەرزىم بار',
    additionalReview: (day: number) => `سېتىۋىلپ ${day} كۈندى كېيىن`,
    additionalImages: (length: number) => `${length} پارچە رەسىم`,
  },
  searchbar: {
    basePlaceholder: 'جىڭدوڭدىن ياخشى مال سېتىۋىلىڭ',
    text: 'خەت',
    test: 'سىناق',
    title1: 'ئاساسلىق',
    title2: 'رامكا ئەڭ كەڭ',
    title3: 'رامكا تەگلىكى',
    title4: 'رامكىنىڭ خېتى',
    title5: 'ئايكوننى ئۆزگەرتىش',
    title6: 'باشقىچە',
  },
  audio: {
    back: 'كەينىگە',
    forward: 'ئالدىغا',
    pause: 'توختا',
    start: 'قويۇش',
    mute: 'جىم',
    tips: 'onPlayEnd بولسا loop=false بولغاندا ئىشلەيدۇ',
  },
  datepicker: {
    year: 'يىل',
    month: 'ئاي',
    day: 'كۈن',
    hour: 'سائەت',
    min: 'مىنۇت',
    seconds: 'سېكۇنت',
  },
  pullToRefresh: {
    pullingText: 'تارتىپ يېڭىلاش',
    canReleaseText: 'قويۇپ بېرىڭ',
    refreshingText: 'يېڭىلىنىۋاتىدۇ...',
    completeText: 'تامام',
  },
  watermark: {
    errorCanvasTips: 'Canvas نى قوللىمايدۇ',
  },
}
export default zhUG
