const router = require('./libs/router')

const { info } = require('./libs/logger')

const actions = require('./actions')

router.use('login').do(({ query }, res) => {
  info('routes/login', { query, res })

  return res.setJSON(actions.login({
    username: query.username?.[0],
    password: query.password?.[0],
  }))
})

router.use('createuser').do(({ query, header }, res) => {
  info('routes/createuser', { query, header, res })

  const token = query.token[0]
  const username = query.username[0]
  const password = query.password[0]
  const host = query.host?.[0]

  return res.setJSON(actions.createuser({ token, username, password, host, }))
})

module.exports = router
