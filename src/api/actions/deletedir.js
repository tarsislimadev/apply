const db = require('../libs/db')
const logger = require('../libs/logger')

const deletedir = ({
  token = null,
  dirname = null,
  force = null,
}) => {
  logger.info('actions/deletedir', { token, dirname, force })
}

module.exports = deletedir
