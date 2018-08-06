'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FLICKR_API_KEY: JSON.stringify(process.env.FLICKR_API_KEY),
  PHOTOSET_ID: JSON.stringify(process.env.PHOTOSET_ID),
  FLICKR_USER_ID: JSON.stringify(process.env.FLICKR_USER_ID)
})
