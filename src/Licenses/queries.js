const addLicensequery=`INSERT INTO licenses (licenseno,release_date,expiry_date) 
VALUES ($1,$2,$3)`;
const getLicensesquery=`SELECT license_id,licenseno,TO_CHAR(release_date::Date,'dd/mm/yyyy') AS release_date,
TO_CHAR(expiry_date::Date,'dd/mm/yyyy') AS expiry_date FROM licenses`;
const getLicenseByLicensenoquery=`SELECT license_id,licenseno,TO_CHAR(release_date::Date,'dd/mm/yyyy') AS release_date,
TO_CHAR(expiry_date::Date,'dd/mm/yyyy') AS expiry_date FROM licenses WHERE licenseno = $1`;
const updateLicensequery=`UPDATE licenses SET release_date = $1,expiry_date = $2 WHERE license_id= $3`;
const deleteLicensequery=`DELETE FROM licenses WHERE license_id= $1`;



module.exports={

    addLicensequery,
    getLicensesquery,
    getLicenseByLicensenoquery,
    updateLicensequery,
    deleteLicensequery
    
};