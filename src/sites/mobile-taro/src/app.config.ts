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
    pages: ['pages/layout/index', 'pages/divider/index'],
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
    ],
  },
  {
    root: 'dentry',
    pages: [
      'pages/range/index',
      'pages/calendar/index',
      'pages/checkbox/index',
      'pages/inputnumber/index',
      'pages/input/index',
      'pages/radio/index',
      'pages/rate/index',
      'pages/textarea/index',
      'pages/numberkeyboard/index',
    ],
  },
  {
    root: 'feedback',
    pages: ['pages/actionsheet/index', 'pages/switch/index'],
  },
  {
    root: 'exhibition',
    pages: [
      'pages/noticebar/index',
      'pages/steps/index',
      'pages/swiper/index',
      'pages/avatar/index',
      'pages/price/index',
      'pages/badge/index',
      'pages/tag/index',
      'pages/popover/index',
      'pages/skeleton/index',
      'pages/collapse/index',
      'pages/empty/index',
      'pages/progress/index',
    ],
  },
  {
    root: 'business',
    pages: ['pages/card/index', 'pages/timeselect/index'],
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
