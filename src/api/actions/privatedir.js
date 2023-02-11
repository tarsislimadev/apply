const db = require('../libs/db')
const logger = require('../libs/logger')

const privatedir = ({
  token = null,
  dirname = null,
}) => {
  logger.info('actions/privatedir', { token, dirname })
}

module.exports = privatedir
