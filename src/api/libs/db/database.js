const path = require('path')

const fs = require('../fs')
const logger = require('../logger')

const DatabaseObject = require('./database-object')

class Database {
  dirname = ''

  constructor(dirname = '') {
    logger.info('libs/db/database/Database', { dirname })

    this.dirname = dirname

    return fs.mkdirSync(this.dirname)
  }

  list() {
    logger.info('libs/db/database/Database.list', { })

    return fs.readdirSync(this.dirname)
  }

  new() {
    logger.info('libs/db/database/Database.new')

    return new DatabaseObject(this.dirname)
  }

  in(dirname = '') {
    logger.info('libs/db/database/Database.in', { dirname })

    return new Database(path.resolve(this.dirname, dirname))
  }

  listJSON() {
    logger.info('libs/db/database/Database.listJSON', {})

    const self = this

    return this.list()
      .map((id) => new DatabaseObject(self.dirname, id))
      .map((obj) => obj.toJSON())
  }
}

module.exports = Database
