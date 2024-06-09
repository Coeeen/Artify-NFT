const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const NftModel = require('./../model/NftModel')

dotenv.config({ path: '../config.env' })

const DB = process.env.DATABASE_PASSWORD

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DATABASE CONNECTED')
  })
  .catch((err) => {
    console.error('DB CONNECTION ERROR:', err.message)
  })

const nfts = JSON.parse(fs.readFileSync(`${__dirname}/nfts.json`, 'utf-8'))

const importData = async () => {
  try {
    await NftModel.create(nfts, { validateBeforeSave: false })
    console.log('Data created successfully')
  } catch (error) {
    console.log(error)
  }
  process.exit()
}

const deleteData = async () => {
  try {
    await NftModel.deleteMany()
    console.log('Data deleted successfully')
  } catch (error) {
    console.log(error)
  }
}

console.log(process.argv)

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
