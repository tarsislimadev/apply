
const {
  PORT = '80',
  ENV = 'development',
  DATA_PATH = '/data',
} = process.env

module.exports = {
  PORT,
  ENV,
  DATA_PATH,
  GITHUB: {
    ACCEPT: 'application/vnd.github+json',
    VERSION: '2022-11-28',
  },
}

// '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'

