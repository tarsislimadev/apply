const fs = require('fs')
const path = require('path')

const mkdirSync = (name) => fs.mkdirSync(path.resolve(name), { recursive: true })

const writeFileSync = (name, value = '') => fs.writeFileSync(name, value)

const readdirSync = (name) => {
  mkdirSync(name)
  fs.readdirSync(path.resolve(name))
}

module.exports = {
  mkdirSync,
  writeFileSync,
  readdirSync,
}
