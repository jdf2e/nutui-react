
const subPackages = [
  {
    "root": "base",
    "pages": []
  },
  {
    "root": "layout",
    "pages": []
  },
  {
    "root": "nav",
    "pages": []
  },
  {
    "root": "dentry",
    "pages": []
  },
  {
    "root": "dataentry",
    "pages": []
  },
  {
    "root": "feedback",
    "pages": [
      "pages/dialog/index"
    ]
  },
  {
    "root": "exhibition",
    "pages": []
  },
  {
    "root": "business",
    "pages": []
  }
];

export default defineAppConfig({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI-React',
    navigationBarTextStyle: 'black'
  },
  components: ['pages/index/index', ...(subPackages.map(subPackage => {
    return subPackage.pages.map(page => `${subPackage.root}/${page}`)
  }).flat())]
})