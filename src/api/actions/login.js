const db = require('../libs/db')
const logger = require('../libs/logger')

const login = ({
  username = null,
  password = null,
}) => {
  logger.info('actions/login', { username, password })

  const { id: token } = db.in('logins').new().writeMany({ username, password })
  return { token }
}

module.exports = login
