const db = require('../libs/db')
const logger = require('../libs/logger')

const writefile = ({
  token = null,
  filename = null,
}) => {
  logger.info('actions/writefile', { token, filename })
}

module.exports = writefile
