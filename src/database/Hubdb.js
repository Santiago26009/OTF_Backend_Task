require('dotenv').config()
const hubspot = require('@hubspot/api-client');

async function start() {
    
}

const hubspotClient = new hubspot.Client({apiKey: process.env.HUBSPOT_API_KEY})
start()

module.exports = hubspotClient;