const mongoose = require('mongoose')

const NftSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxLength: [40, 'Nft have more than 40 characters'],
  },
  price: {
    type: Number,
    default: 0,
  },
  numberLikes: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    trim: true,
    maxLength: [40, 'Nft have more than 80 characters'],
  },
  img: {
    type: String,
  },
  type: {
    type: String,
    enum: ['All', 'MonkeyNFT', 'PuppyNFT', 'MonsterNFT', 'explore-more'],
    default: 'All',
  },
  owner: {
    type: String,
    default: 'TESTER123',
  },
  animalPack: {
    type: Boolean,
    require: false,
  },
  monsterPack: {
    type: Boolean,
    require: false,
  },
  views: {
    type: Number,
    default: 0,
  },

  ownerImg: {
    type: String,
    default: 'https://i.ibb.co/d5tGMdZ/model1.jpg',
  },
})

const NftModel = mongoose.model('NFT', NftSchema)

module.exports = NftModel
