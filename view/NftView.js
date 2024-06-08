const express = require('express')

const router = express.Router()
const { createNFT, getNFT } = require('../controller/nftController')

router.route('/').post(createNFT).get(getNFT)

module.exports = router
