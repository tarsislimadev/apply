const db = require('../libs/db')
const logger = require('../libs/logger')

const createdir = ({
  token = null,
  dirname = null,
  recursive = null,
  public = null,
}) => {
  logger.info('actions/createdir', { token, dirname, recursive, public })
}

module.exports = createdir
