const mongoose = require('mongoose')

const NftSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxLength: [40, 'Nft have more than 40 characters'],
  },
  price: {
    type: Number,
  },
  numberLikes: {
    type: Number,
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
  },

  ownerImg: {
    type: String,
  },
})

const NftModel = mongoose.model('NFT', NftSchema)

module.exports = NftModel
