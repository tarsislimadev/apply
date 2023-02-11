const ApplicationError = require('./application-error')

class NotFoundError extends ApplicationError {
  constructor(message = 'Not Found Error', extras = {}) {
    super(message, extras)
  }
}

module.exports = NotFoundError
