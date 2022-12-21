const subPackages = [
  {
    root: 'base',
    pages: [
      'pages/button/index',
      'pages/cell/index',
      'pages/icon/index',
      'pages/overlay/index',
      'pages/popup/index',
      'pages/configprovider/index',
      'pages/image/index',
    ],
  },
  {
    root: 'layout',
    pages: ['pages/layout/index', 'pages/divider/index', 'pages/grid/index'],
  },
  {
    root: 'nav',
    pages: [
      'pages/navbar/index',
      'pages/fixednav/index',
      'pages/tabbar/index',
      'pages/elevator/index',
      'pages/pagination/index',
      'pages/tabs/index',
      'pages/indicator/index',
      'pages/menu/index',
    ],
  },
  {
    root: 'dentry',
    pages: [
      'pages/range/index',
      'pages/calendar/index',
      'pages/checkbox/index',
      'pages/datepicker/index',
      'pages/inputnumber/index',
      'pages/input/index',
      'pages/radio/index',
      'pages/rate/index',
      'pages/picker/index',
      'pages/shortpassword/index',
      'pages/textarea/index',
      'pages/uploader/index',
      'pages/cascader/index',
      'pages/searchbar/index',
      'pages/numberkeyboard/index',
      'pages/form/index',
    ],
  },
  {
    root: 'feedback',
    pages: [
      'pages/actionsheet/index',
      'pages/backtop/index',
      'pages/drag/index',
      'pages/dialog/index',
      'pages/infiniteloading/index',
      'pages/notify/index',
      'pages/switch/index',
      'pages/toast/index',
      'pages/swipe/index',
    ],
  },
  {
    root: 'exhibition',
    pages: [
      'pages/circleprogress/index',
      'pages/noticebar/index',
      'pages/steps/index',
      'pages/swiper/index',
      'pages/avatar/index',
      'pages/price/index',
      'pages/badge/index',
      'pages/tag/index',
      'pages/popover/index',
      'pages/skeleton/index',
      'pages/countdown/index',
      'pages/collapse/index',
      'pages/animatingnumbers/index',
      'pages/empty/index',
      'pages/table/index',
      'pages/progress/index',
      'pages/audio/index',
      'pages/imagepreview/index',
      'pages/trendarrow/index',
      'pages/watermark/index',
      'pages/animate/index',
      'pages/ellipsis/index',
    ],
  },
  {
    root: 'business',
    pages: [
      'pages/address/index',
      'pages/barrage/index',
      'pages/signature/index',
      'pages/card/index',
      'pages/timeselect/index',
    ],
  },
]

export default defineAppConfig({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI-React',
    navigationBarTextStyle: 'black',
  },
})
