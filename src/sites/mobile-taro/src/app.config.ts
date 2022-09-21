const subPackages = [
  {
    root: 'base',
    pages: [
      'pages/button/index',
      'pages/cell/index',
      'pages/icon/index',
      'pages/overlay/index',
      'pages/popup/index',
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
      'pages/searchbar/index',
      'pages/numberkeyboard/index',
    ],
  },
  {
    root: 'feedback',
    pages: [
      'pages/actionsheet/index',
      'pages/switch/index',
      'pages/toast/index',
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
      'pages/empty/index',
      'pages/progress/index',
      'pages/audio/index',
    ],
  },
  {
    root: 'business',
    pages: [
      'pages/barrage/index',
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
