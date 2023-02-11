const db = require('../libs/db')
const logger = require('../libs/logger')

const login = ({
  username = null,
  password = null,
}) => {
  logger.info('actions/login', { username, password })

  const login = db.in('logins').new()

  login.writeMany({ username, password })

  return { token: login.id }
}

module.exports = login
