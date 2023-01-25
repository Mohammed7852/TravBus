const addOffiePasswordquery=`INSERT INTO offices_passwords (password,office_name) VALUES
(PGP_SYM_ENCRYPT($1,'bus4'),$2)`;
const checkoldpasswordExistsquey=`SELECT * FROM offices_passwords 
WHERE PGP_SYM_DECRYPT(password::bytea,'bus4') = $1 AND office_name=$2`;
const checknewpasswordExistsquey=`SELECT * FROM offices_passwords 
WHERE PGP_SYM_DECRYPT(password::bytea,'bus4') = $1`;
const authenticateOffice=`SELECT office_name FROM offices_passwords WHERE PGP_SYM_DECRYPT(password::bytea,'bus4')=$1`;
const deleteOffcePasswordquery=`DELETE FROM offices_passwords WHERE office_name= $1`;
const updateOfficePasswordquery=`UPDATE offices_passwords SET password = PGP_SYM_ENCRYPT($1,'bus4')
 WHERE office_name = $2`;


module.exports={
    
    addOffiePasswordquery,
    checkoldpasswordExistsquey,
    checknewpasswordExistsquey,
    authenticateOffice,
    deleteOffcePasswordquery,
    updateOfficePasswordquery

};