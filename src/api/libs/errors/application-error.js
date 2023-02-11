const { NEWLINE } = require('../constants')

class ApplicationError extends Error {
  extras = null

  constructor(message = 'Application Error', extras = {}) {
    super([message, JSON.stringify(extras, null, 4)].join(NEWLINE))

    this.extras = extras
  }
}

module.exports = ApplicationError
