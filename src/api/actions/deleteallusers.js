const db = require('../libs/db')
const logger = require('../libs/logger')

const deleteallusers = ({
  token = null,
}) => {
  logger.info('actions/deleteallusers', { token })
}

module.exports = deleteallusers
