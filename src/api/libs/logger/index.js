const { ENV } = require('../../config')

const logger = (name, log = {}, writter = console.log) => {
  if (ENV == 'development') writter(name, (log))
}

module.exports = {
  error: (name, log = {}) => logger(name, log, console.error),
  info: (name, log = {}) => logger(name, log, console.info),
  log: (name, log = {}) => logger(name, log, console.log),
}
