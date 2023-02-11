const db = require('../libs/db')
const logger = require('../libs/logger')

const listdir = ({
  token = null,
  dirname = null,
}) => {
  logger.info('actions/listdir', { token, dirname })
}

module.exports = listdir
