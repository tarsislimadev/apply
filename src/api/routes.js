const { info, log } = require('./libs/logger')
const router = require('./libs/router')
const actions = require('./actions/index')

router.use('api/v1/accounts/login').do(actions.accounts.login)

router.use('api/v1/projects/list').do(actions.projects.list)

router.use('api/v1/projects/create').do(actions.projects.create)

module.exports = router
