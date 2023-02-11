const db = require('../libs/db')
const logger = require('../libs/logger')

const deletefile = ({
  token = null,
  filename = null,
  force = null,
}) => {
  logger.info('actions/deletefile', { token, filename, force })
}

module.exports = deletefile
