const { DATA_PATH } = require('../../config')

const Database = require('./database') 

module.exports = new Database(DATA_PATH)
