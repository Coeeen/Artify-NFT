const mongoose = require('mongoose')

const NftSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    maxLength: [40, 'Nft have more than 40 characters'],
  },
  price: {
    type: Number,
  },
  numberLikes: {
    type: Number,
  },
  img: {
    type: String,
    require: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['All', 'MonkeyNFT', 'PuppyNFT', 'explore-more'],
    default: 'user',
  },
})

const NftModel = mongoose.model('NFT', NftSchema)

module.exports = NftModel

// {
//     id: 1,
//     img: NFTTwelve,
//     name: "SPORT MANIAC #327",
//     ownerName: "#CryptoKing123",
//     ownerPicture: OwnerThree,
//     price: "7.99$",
//     numberLikes: 105,
//   },
