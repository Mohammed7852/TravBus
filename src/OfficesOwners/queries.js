const addOfficeoOwnerquery=`INSERT INTO offices_owners (office_owner_name, phoneno, idcardno, licenseno,office_name)
VALUES ($1,$2,$3,$4,$5)`;
const checkOwnerNameExistsquery=`SELECT * FROM offices_owners WHERE office_owner_name=$1`;
const checkOwnerIdcardnoExistsquery=`SELECT * FROM offices_owners WHERE idcardno=$1`;
const checkLicensenoExistsquery=`SELECT * FROM offices_owners WHERE licenseno=$1`;
const checkOfficeNameExistsquery=`SELECT * FROM offices_owners WHERE office_name=$1`;
const getOfficesOwnersquery=`SELECT ow.office_name,ow.office_owner_name,ow.phoneno,od.location,
TO_CHAR(od.subscription_date::Date,'dd/mm/yyyy') AS subscription_date
FROM offices_owners ow,offices_data od WHERE ow.office_name=od.office_name`;
const getOfficeOwnerByOfficeNamequery=`SELECT  ow.office_name,ow.office_owner_name,ow.phoneno,od.location,
TO_CHAR(od.subscription_date::Date,'dd/mm/yyyy') AS subscription_date
FROM offices_owners ow,offices_data od WHERE ow.office_name=od.office_name AND ow.office_name= $1`;
const updateOfficeOwnerquery=`UPDATE offices_owners SET phoneno = $1 WHERE office_name = $2`;
const deleteOfficeOwnerquery=`DELETE FROM offices_owners WHERE office_name= $1`;


module.exports={

    addOfficeoOwnerquery,
    checkOwnerNameExistsquery,
    checkOwnerIdcardnoExistsquery,
    checkLicensenoExistsquery,
    checkOfficeNameExistsquery,
    getOfficesOwnersquery,
    getOfficeOwnerByOfficeNamequery,
    updateOfficeOwnerquery,
    deleteOfficeOwnerquery

};