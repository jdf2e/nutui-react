const fileRegex = /demo\.tsx$/

export default function viteDemoPlugin() {
  return {
    name: 'viteDemoPlugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // custom handle request...
        if (req.url.indexOf('demo.scss') > -1) {
          req.redirect(req.url.replace('demo.scss', 'demo.module.scss'))
        }
        next()
      })
    },
    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: src,
          map: null, // 如果可行将提供 source map
        }
      }
    },
  }
}
