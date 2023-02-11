
const {
  PORT = '80',
  ENV = 'development',
  DATA_PATH = '/data',
} = process.env

module.exports = {
  PORT,
  ENV,
  DATA_PATH,
}
