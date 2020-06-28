const path = require('path');

const config = {};

require('dotenv').config({
    path: path.join(__dirname, '.env').normalize(),
});

config.telegramAPI = process.env.TELEGRAM_API;

module.exports = config;
