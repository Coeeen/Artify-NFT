const NFT = require('../model/NftModel')

exports.createNFT = async (req, res) => {
  try {
    const doc = await NFT.create(req.body)
    res.status(201).json({ status: 'success', data: doc })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getAllNFT = async (req, res) => {
  try {
    const docs = await NFT.find()
    res
      .status(200)
      .json({ status: 'success', length: docs.length, results: docs })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getRandomNFTs = async (req, res) => {
  try {
    const allNFTs = await NFT.find()

    if (allNFTs.length === 0) {
      return res
        .status(200)
        .json({ status: 'success', message: 'No NFTs found', results: [] })
    }

    const randomNFTs = []
    while (randomNFTs.length < 3) {
      const randomIndex = Math.floor(Math.random() * allNFTs.length)
      const randomNFT = allNFTs[randomIndex]
      if (!randomNFTs.includes(randomNFT)) {
        randomNFTs.push(randomNFT)
      }
    }

    res.status(200).json({
      status: 'success',
      message: 'Random NFTs selected',
      results: randomNFTs,
    })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getAllNormalNFT = async (req, res) => {
  try {
    const docs = await NFT.find({ type: 'All' })
    res
      .status(200)
      .json({ status: 'success', length: docs.length, results: docs })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getAllPuppieslNFT = async (req, res) => {
  try {
    const docs = await NFT.find({ type: 'PuppyNFT' })
    res
      .status(200)
      .json({ status: 'success', length: docs.length, results: docs })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getAllMonkeyNFT = async (req, res) => {
  try {
    const docs = await NFT.find({ type: 'MonkeyNFT' })
    res
      .status(200)
      .json({ status: 'success', length: docs.length, results: docs })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getAllMonstersNFT = async (req, res) => {
  try {
    const docs = await NFT.find({ type: 'MonsterNFT' })
    res
      .status(200)
      .json({ status: 'success', length: docs.length, results: docs })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

exports.getNFT = async (req, res) => {
  try {
    const doc = await NFT.findById(req.params.id)
    if (!doc) {
      return res.status(404).json({ status: 'fail', message: 'NFT not found' })
    }
    res.status(200).json({ status: 'success', results: doc })
  } catch (err) {
    res.status(400).json({ status: 'fail', results: err.message })
  }
}
