const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE_PASSWORD
const port = process.env.PORT || 4444
const app = require('./app')

mongoose
  .connect(DB, {})
  .then((con) => {
    console.log('DATABASE CONNECTED')
  })
  .catch((err) => {
    console.error('DB CONNECTION ERROR:', err.message)
  })

app.listen(port, () => {
  console.log(`PORT START ON :${port}`)
})
