const NFT = require('../model/NftModel')

exports.createNFT = async (req, res) => {
  try {
    const doc = await NFT.create(req.body)
    res.status(201).json({ status: 'success', data: doc })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}

exports.getNFT = async (req, res) => {
  try {
    const docs = await NFT.find()
    res.status(200).json({ status: 'success', data: docs })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err })
  }
}
