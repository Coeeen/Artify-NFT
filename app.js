const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const nftView = require('./view/NftView')
const userView = require('./view/UserView')

const app = express()

app.use(express.static(`${__dirname}/public`))

// HTTPS
app.use(helmet())

//corsy
app.use(cors())

// Parser, limit size
app.use(express.json({ limit: '10kb' }))

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xss())

// Rate limiting
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour',
// })

// app.use('/api', limiter)

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ARTIFY API SWAGGER',
      version: '1.0.0',
      description: 'API for managing users',
    },
    servers: [
      {
        url: 'http://localhost:4444/', 
      },
    ],
  },
  apis: ['./view/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/nfts', nftView)
app.use('/api/v1/users', userView)

module.exports = app
