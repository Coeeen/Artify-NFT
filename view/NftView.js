const express = require('express')

const router = express.Router()
const {
  createNFT,
  getNFT,
  getAllNFT,
  getAllPuppieslNFT,
  getAllMonkeyNFT,
  getAllMonstersNFT,
  getAllNormalNFT,
  getRandomNFTs,
} = require('../controller/nftController')

router.route('/').post(createNFT).get(getAllNFT)
router.route('/random').get(getRandomNFTs)
router.route('/normal').get(getAllNormalNFT)
router.route('/puppies').get(getAllPuppieslNFT)
router.route('/monkey').get(getAllMonkeyNFT)
router.route('/monsters').get(getAllMonstersNFT)
router.route('/:id').get(getNFT)

module.exports = router
