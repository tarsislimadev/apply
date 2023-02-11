const db = require('./libs/db')

db.in('users').new().writeMany({
  username: 'username',
  password: 'password',
  login_id: 0
})
