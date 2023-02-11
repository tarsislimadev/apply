const db = require('../libs/db')
const logger = require('../libs/logger')

const createuser = ({
  token = null,
  username = null,
  password = null,
}) => {
  logger.info('actions/createuser', { token, username, password })

  const login = db.in('logins').find(token)

  if (!login) {
    throw new Error('Login not found.', { token, username, password })
  }

  const { id } = db.in('users').new().writeMany({
    username,
    password,
    login_id: login.id,
  })

  return { id }
}

module.exports = createuser
