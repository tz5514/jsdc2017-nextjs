const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'PRODUCTION': prod,
  'API_DOMAIN': 'http://localhost:3000'
}