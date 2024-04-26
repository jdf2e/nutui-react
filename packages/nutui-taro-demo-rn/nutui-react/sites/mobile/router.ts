const modulesPage = import.meta.glob('/src/packages/**/demo.tsx')

const routes: any[] = []
for (const path in modulesPage) {
  let name = (/packages\/(.*)\/demo.tsx/.exec(path) as any[])[1]
  routes.push({
    path: '/zh-CN/component/' + name.toLowerCase(),
    component: modulesPage[path],
    name,
  })

  routes.push({
    path: '/en-US/component/' + name.toLowerCase(),
    component: modulesPage[path],
    name,
  })
}

export default routes
