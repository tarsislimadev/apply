const db = require('../libs/db')
const logger = require('../libs/logger')

const listallusers = ({
  token = null,
}) => {
  logger.info('actions/listallusers', { token })
}

module.exports = listallusers
