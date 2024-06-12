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
  getMostPopular,
  getAnimalPack,
  getMonsterPack,
  updateNFT,
  deleteNFT,
} = require('../controller/nftController')

router.route('/').post(createNFT).get(getAllNFT)
router.route('/random').get(getRandomNFTs)
router.route('/normal').get(getAllNormalNFT)
router.route('/puppies').get(getAllPuppieslNFT)
router.route('/monkey').get(getAllMonkeyNFT)
router.route('/popular').get(getMostPopular)
router.route('/popular/animalPack').get(getAnimalPack)
router.route('/popular/monsterPack').get(getMonsterPack)
router.route('/monsters').get(getAllMonstersNFT)
router.route('/:id').get(getNFT).patch(updateNFT).delete(deleteNFT)

module.exports = router
