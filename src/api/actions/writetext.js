const db = require('../libs/db')
const logger = require('../libs/logger')

const writetext = ({
  token = null,
  filename = null,
  content = null,
}) => {
  logger.info('actions/writetext', { token, filename, content })
}

module.exports = writetext
