const { createPool } = require('mysql');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'rohan',
    password: 'root'
});

module.exports = pool;