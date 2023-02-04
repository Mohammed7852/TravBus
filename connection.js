// /* 
// this file allows us to connect to our postgres database
// */
const Pool= require('pg').Pool;
const pool = new Pool({
    host: "34.133.61.239",
    user: "mali",
    port: 5432,
    password: "P@ssw0rd",
    database: "travbusdb"
})
module.exports = pool


