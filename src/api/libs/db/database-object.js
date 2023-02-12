const path = require('path')

const { info } = require('../logger')

const { mkdirSync, writeFileSync, readdirSync, readFileSync } = require('../fs')

const { v4: uuid } = require('../uuid')

class DatabaseObject {
  index = ''
  id = null
  dirname = null

  constructor(index, id = uuid()) {
    info('libs/db/DatabaseObject', { index, id })

    this.index = index

    this.id = id

    this.dirname = path.resolve(index, id)

    mkdirSync(this.dirname)
  }

  getPath() {
    info('libs/db/DatabaseObject.getPath', {})

    return this.dirname
  }

  write(name, value = null) {
    info('libs/db/DatabaseObject.write', { name, value })

    writeFileSync(path.resolve(this.dirname, name), value)

    return this
  }

  writeMany(props = {}) {
    info('libs/db/DatabaseObject.writeMany', { props })

    const self = this

    Object.keys(props)
      .filter(prop => !!prop && !!props[prop])
      .map((prop) => self.write(prop.toString(), props[prop].toString()))

    return this
  }

  read(name, def = null) {
    info('libs/db/DatabaseObject.read', { name, def })

    return readFileSync(path.resolve(this.getPath(), name))
  }

  readString(name, def = null) {
    info('libs/db/DatabaseObject.readString', { name, def })

    return this.read(name, def).toString()
  }

  listProps() {
    info('libs/db/DatabaseObject.listProps', {})

    return readdirSync(this.getPath())
  }

  toJSON() {
    info('libs/db/DatabaseObject.toJSON', {})

    const self = this

    const props = this.listProps()

    return props
      .reduce((obj, propName) => {
        obj[propName] = self.readString(propName)

        return obj
      }, {})
  }
}

module.exports = DatabaseObject

