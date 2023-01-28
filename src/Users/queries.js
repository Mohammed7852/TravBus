const addUserquery=`INSERT INTO users (name, phoneno, identityno, identity_image, birthdate, password) 
VALUES ($1,$2,$3,$4,$5,PGP_SYM_ENCRYPT($6,'bus4'))`;
const checkuserNameExistsquery=`SELECT * FROM users WHERE name =$1`;
const checkuserIdentitynoexistsquery=`SELECT * FROM users WHERE  identityno=$1`;
const checkuserPasswordexistsquery=`SELECT user_id, name, phoneno, identityno, identity_image,
TO_CHAR(birthdate::Date,'dd/mm/yyyy') AS birthdate,PGP_SYM_DECRYPT(password::bytea,'bus4') AS password 
FROM users WHERE  PGP_SYM_DECRYPT(password::bytea,'bus4') =$1`;
const updateUserquery=`UPDATE users SET name=$1, phoneno =$2 ,identityno =$3, identity_image= $4,birthdate=$5,
password=PGP_SYM_ENCRYPT($6,'bus4') WHERE user_id = $7`;
const deleteUserquery=`DELETE FROM users WHERE user_id= $1`;


module.exports={

    addUserquery,
    checkuserPasswordexistsquery,
    checkuserNameExistsquery,
    checkuserIdentitynoexistsquery,
    updateUserquery,
    deleteUserquery
};