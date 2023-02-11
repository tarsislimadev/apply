const { info } = require('./libs/logger')
const { routes } = require('./routes')

const run = (req, res) => {
  info('app/run', { req, res, routes })

  const route = routes.find(r => r.name == req.path)
  return route ? route.doer?.func(req, res) : res
}

module.exports = { run }
