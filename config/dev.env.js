'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
  FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  FIREBASE_DB_URL: JSON.stringify(process.env.FIREBASE_DB_URL),
  FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
  FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
  FIREBASE_MESSSAGE_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSSAGE_SENDER_ID),
  FLICKR_API_KEY: JSON.stringify(process.env.FLICKR_API_KEY),
  PHOTOSET_ID: JSON.stringify(process.env.PHOTOSET_ID),
  FLICKR_USER_ID: JSON.stringify(process.env.FLICKR_USER_ID)
})
