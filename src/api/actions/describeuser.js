const db = require('../libs/db')
const logger = require('../libs/logger')

const describeuser = ({
  token = null,
  username = null,
}) => {
  logger.info('actions/describeuser', { token, username })
}

module.exports = describeuser
