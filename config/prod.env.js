'use strict'

require('dotenv').config()

module.exports = {
  NODE_ENV: '"production"',
  FLICKR_API_KEY: JSON.stringify(process.env.FLICKR_API_KEY),
  PHOTOSET_ID: JSON.stringify(process.env.PHOTOSET_ID),
  FLICKR_USER_ID: JSON.stringify(process.env.FLICKR_USER_ID)
}
