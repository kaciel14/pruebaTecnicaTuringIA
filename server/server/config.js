const dotenv = require('dotenv')

dotenv.config();

const DB_HOST = process.env.DB_HOST  || 'localhost';
const DB_PORT = process.env.DB_PORT || '3306';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'superuser';
const DB_DATABASE = process.env.DB_DATABASE || 'pruebaTecnica';

const PORT = process.env.PORT || 8080;

module.exports = {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    PORT
  };