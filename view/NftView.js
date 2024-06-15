const express = require('express');

const router = express.Router();
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
} = require('../controller/nftController');

/**
 * @swagger
 * components:
 *   schemas:
 *     NFT:
 *       type: object
 *       required:
 *         - name
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the NFT
 *         name:
 *           type: string
 *           description: The name of the NFT
 *         image:
 *           type: string
 *           description: The URL of the NFT image
 *       example:
 *         name: "Cute Puppy"
 *         image: "http://example.com/puppy.jpg"
 */

/**
 * @swagger
 * /api/v1/nfts:
 *   get:
 *     summary: Get all NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of all NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 *   post:
 *     summary: Create a new NFT
 *     tags: [NFTs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NFT'
 *     responses:
 *       201:
 *         description: The NFT was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NFT'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/nfts/random:
 *   get:
 *     summary: Get random NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of random NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/normal:
 *   get:
 *     summary: Get all normal NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of normal NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/puppies:
 *   get:
 *     summary: Get all puppies NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of puppies NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/monkey:
 *   get:
 *     summary: Get all monkey NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of monkey NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/popular:
 *   get:
 *     summary: Get most popular NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of most popular NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/popular/animalPack:
 *   get:
 *     summary: Get the animal pack of popular NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of popular animal pack NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/popular/monsterPack:
 *   get:
 *     summary: Get the monster pack of popular NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of popular monster pack NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/monsters:
 *   get:
 *     summary: Get all monsters NFTs
 *     tags: [NFTs]
 *     responses:
 *       200:
 *         description: List of monsters NFTs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NFT'
 */

/**
 * @swagger
 * /api/v1/nfts/{id}:
 *   get:
 *     summary: Get an NFT by ID
 *     tags: [NFTs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The NFT id
 *     responses:
 *       200:
 *         description: The NFT description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NFT'
 *       404:
 *         description: The NFT was not found
 *   patch:
 *     summary: Update an NFT by ID
 *     tags: [NFTs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The NFT id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NFT'
 *     responses:
 *       200:
 *         description: The NFT was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NFT'
 *       404:
 *         description: The NFT was not found
 *       400:
 *         description: Bad request
 *   delete:
 *     summary: Delete an NFT by ID
 *     tags: [NFTs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The NFT id
 *     responses:
 *       204:
 *         description: The NFT was successfully deleted
 *       404:
 *         description: The NFT was not found
 *       400:
 *         description: Bad request
 */

router.route('/').post(createNFT).get(getAllNFT);
router.route('/random').get(getRandomNFTs);
router.route('/normal').get(getAllNormalNFT);
router.route('/puppies').get(getAllPuppieslNFT);
router.route('/monkey').get(getAllMonkeyNFT);
router.route('/popular').get(getMostPopular);
router.route('/popular/animalPack').get(getAnimalPack);
router.route('/popular/monsterPack').get(getMonsterPack);
router.route('/monsters').get(getAllMonstersNFT);
router.route('/:id').get(getNFT).patch(updateNFT).delete(deleteNFT);

module.exports = router;
