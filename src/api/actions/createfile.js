const db = require('../libs/db')
const logger = require('../libs/logger')

const createfile = ({
  token = null,
  filename = null,
  recursive = null,
}) => {
  logger.info('actions/createfile', { token, filename, recursive })
}

module.exports = createfile
