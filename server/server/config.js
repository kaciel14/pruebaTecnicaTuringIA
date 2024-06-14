const dotenv = require('dotenv')

dotenv.config();

const DB_HOST = process.env.DB_HOST  || 'roundhouse.proxy.rlwy.net';
const DB_PORT = process.env.DB_PORT || '52282';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'JoRnOOiFNHFWqXAQwRYkzmdYNNljuOAy';
const DB_DATABASE = process.env.DB_DATABASE || 'railway';

const PORT = process.env.PORT || 8080

module.exports = {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    PORT
  };