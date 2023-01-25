/* 
this file allows us to connect to our postgres database
*/
const Pool= require('pg').Pool;

const pool = new Pool({
    host: "postgresql-107647-0.cloudclusters.net",
    // host:"https://travbusdb.netlify.app/",
    user: "admin",
    port: 10259,
    password: "P@ssw0rd",
    database: "TravbusDB"
})

pool.connect(function(err) {
    if (err) throw err;
    console.log("Good, Connected!");
  });

module.exports = pool