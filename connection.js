/* 
this file allows us to connect to our postgres database
*/
const Pool= require('pg').Pool;
/* oled connection: 
host: "postgresql-107647-0.cloudclusters.net",
    // host:"https://travbusdb.netlify.app/",
    user: "admin",
    port: 10259,
    password: "P@ssw0rd",
    database: "TravbusDB"
*/

/* new connection 
  host: "34.133.61.239",
    // host:"https://travbusdb.netlify.app/",
    user: "mali",
    port: 5432,
    password: "P@ssw0rd",
    database: "travbusdb"

*/

const pool = new Pool({
    host: "34.133.61.239",
    // host:"https://travbusdb.netlify.app/",
    user: "mali",
    port: 5432,
    password: "P@ssw0rd",
    database: "travbusdb"
});

module.exports = pool