const { info, log } = require('./libs/logger')
const router = require('./libs/router')
const actions = require('./actions')
const db = require('./libs/db')

router.use('api/v1/accounts/login').do(({ query }, res) => {
  info('routes/login', { query, res })

  const login = db.in('logins').new()

  login.writeMany({
    username: query.username?.[0],
    password: query.password?.[0],
  })

  return res.setJSON({ token: login.id })
})

router.use('api/v1/projects').do((req, res) => {
  info('routes/projects', { req, res })

  const list = db.in('projects').listJSON()

  return res.setJSON({ list })
})

router.use('api/v1/projects/save').do((req, res) => {
  info('routes/projects/save', { req, res })

  const project = db.in('projects').new()

  project.writeMany(req.body)

  return res.setJSON({ id: project.id })
})

module.exports = router
