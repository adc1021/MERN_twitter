module.exports = {
  mongoURI: process.env.MONGO_URI,
  isProduction: process.env.NOCE_ENV === 'production'
}
