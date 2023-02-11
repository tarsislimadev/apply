const db = require('../libs/db')
const logger = require('../libs/logger')

const grantuser = ({
  token = null,
  perm = null,
  username = null,
}) => {
  logger.info('actions/grantuser', { token, perm, username })
}

module.exports = grantuser
