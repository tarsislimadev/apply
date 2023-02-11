const db = require('../libs/db')
const logger = require('../libs/logger')

const deleteuser = ({
  token = null,
  username = null,
}) => {
  logger.info('actions/deleteuser', { token, username })
}

module.exports = deleteuser
