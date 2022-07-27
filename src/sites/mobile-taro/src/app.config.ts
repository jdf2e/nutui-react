const subPackages = [
  {
    root: 'base',
    pages: ['pages/button/index', 'pages/overlay/index'],
  },
  // {
  //   "root": "layout",
  //   "pages": [
  //     "pages/layout/index",
  //     "pages/divider/index"
  //   ]
  // },
  // {
  //   "root": "nav",
  //   "pages": [
  //     "pages/fixednav/index",
  //     "pages/tabbar/index",
  //     "pages/pagination/index",
  //     "pages/tabs/index"
  //   ]
  // },
  // {
  //   "root": "dentry",
  //   "pages": [
  //     "pages/checkbox/index",
  //     "pages/input/index",
  //     "pages/radio/index"
  //   ]
  // },
  // {
  //   "root": "feedback",
  //   "pages": [
  //     "pages/actionsheet/index"
  //   ]
  // },
  // {
  //   "root": "exhibition",
  //   "pages": [
  //     "pages/steps/index",
  //     "pages/skeleton/index",
  //     "pages/countdown/index",
  //     "pages/empty/index"
  //   ]
  // },
  // {
  //   "root": "business",
  //   "pages": []
  // }
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
