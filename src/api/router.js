const { info } = require('./libs/logger')

class Doer {
  func = null

  do(f = (() => { })) {
    this.func = f
  }

  doing(req, res) {
    return this.func(req, res)
  }
}

class Router {
  routes = []

  use(name = '') {
    info('Router.use', { name })

    const doer = new Doer(name)
    this.routes.push({ name, doer })
    return doer
  }
}

module.exports = new Router()
