const db = require('../libs/db')
const logger = require('../libs/logger')

const publicdir = ({
  token = null,
  dirname = null,
  readonly = null,
}) => {
  logger.info('actions/publicdir', { token, dirname, readonly })
}

module.exports = publicdir
