const db = require('../libs/db')
const logger = require('../libs/logger')

const readfile = ({
  token = null,
  filename = null,
}) => {
  logger.info('actions/readfile', { token, filename })
}

module.exports = readfile
