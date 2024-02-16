const { Database } = require('@brtmvdl/database') // require('./libs/db')

const db = new Database({ type: 'fs', config: '/data' })

db.in('users').new().writeMany({
  username: 'username',
  password: 'password',
  login_id: 0
})
