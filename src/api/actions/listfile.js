const db = require('../libs/db')
const logger = require('../libs/logger')

const listfile = ({
  token = null,
  filename = null,
  hidden = null,
}) => {
  logger.info('actions/listfile', { token, filename, hidden })
}

module.exports = listfile
