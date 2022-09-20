const modulesPage = import.meta.globEager('/src/packages/**/doc.md', {
  as: 'raw',
})
const routes: any[] = []
for (const path in modulesPage) {
  let name = (/packages\/(.*)\/doc\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/zh-CN/component/' + name,
    component: modulesPage[path],
    name,
  })
}

const modulesENPage = import.meta.globEager('/src/packages/**/doc.en-US.md', {
  as: 'raw',
})
// console.log('modulesENPage', modulesENPage)
for (const path in modulesENPage) {
  let name = (/packages\/(.*)\/doc\.en-US\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name,
    component: modulesENPage[path],
    name,
  })
}

const modulesTaroPage = import.meta.globEager('/src/packages/**/doc.taro.md', {
  as: 'raw',
})
// console.log('modulesTaroPage', modulesTaroPage)
for (const path in modulesTaroPage) {
  let name = (/packages\/(.*)\/doc\.taro\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name + '-taro',
    component: modulesTaroPage[path],
    name: name + '-taro',
  })
  routes.push({
    path: '/zh-CN/component/' + name + '-taro',
    component: modulesTaroPage[path],
    name: name + '-taro',
  })
}

export default routes
