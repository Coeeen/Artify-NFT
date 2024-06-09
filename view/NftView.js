const express = require('express')

const router = express.Router()
const { createNFT, getNFT, getAllNFT } = require('../controller/nftController')

router.route('/').post(createNFT).get(getAllNFT)
router.route('/:id').get(getNFT)

module.exports = router
