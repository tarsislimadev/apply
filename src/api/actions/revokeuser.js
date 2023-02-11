const db = require('../libs/db')
const logger = require('../libs/logger')

const revokeuser = ({
  token = null,
  perm = null,
  username = null,
}) => {
  logger.info('actions/revokeuser', { token, perm, username })
}

module.exports = revokeuser
