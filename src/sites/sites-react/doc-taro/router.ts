// const modulesPage = import.meta.globEager('/src/packages/**/doc.md', {
//   as: 'raw',
// })
const routes: any[] = []
const guideRoutes: any[] = []
const guideEnRoutes: any[] = []
const guideTaroRoutes: any[] = []
const guideEnTaroRoutes: any[] = []



const modulesTaroPage = import.meta.glob('/src/packages/**/doc.taro.md')
// console.log('modulesTaroPage', modulesTaroPage)
for (const path in modulesTaroPage) {
  let name = (/packages\/(.*)\/doc\.taro\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name,
    component: modulesTaroPage[path],
    name: name,
  })
  routes.push({
    path: '/zh-CN/component/' + name,
    component: modulesTaroPage[path],
    name: name,
  })
}

const modulesTaroDocs = import.meta.glob('/src/sites/sites-react/doc/docs/taro/*.md');
for (const path in modulesTaroDocs) {
  let name = (/docs\/taro\/(.*).md/.exec(path) as any[])[1];
  guideTaroRoutes.push({
    path: `/zh-CN/guide/${name}`,
    component: modulesTaroDocs[path],
    name
  });
}
const modulesEnTaroDocs = import.meta.glob('/src/sites/sites-react/doc/docs/taro/*.en-US.md');
for (const path in modulesEnTaroDocs) {
  let name = (/docs\/taro\/(.*).en-US.md/.exec(path) as any[])[1];
  guideEnTaroRoutes.push({
    path: `/en-US/guide/${name}-taro`,
    component: modulesEnTaroDocs[path],
    name
  });
}
export {routes, guideRoutes, guideEnRoutes, guideTaroRoutes, guideEnTaroRoutes}
