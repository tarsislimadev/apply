const { NotFoundError } = require('../../libs/errors')
const { info } = require('../../libs/logger')
const github = require('../../libs/github')
const db = require('../../libs/db')

module.exports = async (req, res) => {
  info('actions/accounts/login', { req, res })

  const { key, sso } = req.body

  if (!key) {
    return res.setError(new NotFoundError('Key not found.', { key }))
  }

  if (!sso) {
    return res.setError(new NotFoundError('SSO not found.', { sso }))
  }

  const accounts = db.in('accounts')
    .listJSON()
    .filter((object) => object)
    .filter((object) => object['key'] == key)
    .filter((object) => object['sso'] == sso)

  const account = accounts[0]

  if (!account) {
    const { name } = await github.users.profile({ auth: key })

    account = db.in('accounts').new()

    account.writeMany({ name })
  }

  const login = db.in('logins').new()

  login.writeMany({ key, sso, account_id: account.id })

  return res.setJSON({ token: login.id })
}
