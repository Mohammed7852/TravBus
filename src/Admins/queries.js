const addAdminquery=`INSERT INTO admins (username,password)
VALUES ($1,PGP_SYM_ENCRYPT($2,'bus4'))`;
const authenticateAdminquery=`SELECT username FROM admins WHERE PGP_SYM_DECRYPT(password::bytea,'bus4') = $1`;
const checkoldPasswordExistsquery=`SELECT * FROM admins WHERE PGP_SYM_DECRYPT(password::bytea,'bus4')=$1 AND username=$2`;
const checknewPasswordExistsquery=`SELECT * FROM admins WHERE PGP_SYM_DECRYPT(password::bytea,'bus4')=$1`;
const updateAdminequery=`UPDATE admins SET password = PGP_SYM_ENCRYPT($1,'bus4') WHERE username= $2`;
const checkLicenseExpiery=`SELECT licenseno,TO_CHAR(expiry_date::Date,'dd/mm/yyyy') AS expiry_date FROM licenses WHERE expiry_date = CURRENT_DATE`
module.exports={

    addAdminquery,
    checkoldPasswordExistsquery,
    checknewPasswordExistsquery,
    checkLicenseExpiery,
    authenticateAdminquery,
    updateAdminequery,
};