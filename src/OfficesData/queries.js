const addOfficequery=`INSERT INTO offices_data 
(office_name,phoneno,bank_account,bank_name,location,logo_image,booking_policy,subscription_date) 
VALUES ($1,$2,$3,$4,$5,$6,$7,CURRENT_DATE)`;
const getOfficesquery=`SELECT office_id,office_name,phoneno,bank_account,bank_name,location,logo_image,booking_policy,
TO_CHAR(subscription_date::Date,'dd/mm/yyyy') AS subscription_date FROM offices_data`;
const getOfficeByofficeNamequery=`SELECT office_id,office_name,phoneno,bank_account,bank_name,location,logo_image,
booking_policy,TO_CHAR(subscription_date::Date,'dd/mm/yyyy') AS subscription_date
FROM offices_data WHERE office_name=$1`;
const updateOfficequery=`UPDATE offices_data SET phoneno=$1,bank_account=$2,bank_name=$3,location=$4,
logo_image=$5,booking_policy=$6 WHERE office_name=$7`;
const deleteOfficequery=`DELETE FROM offices_data WHERE office_name =$1`;



module.exports={

    addOfficequery,
    getOfficesquery,
    getOfficeByofficeNamequery,
    updateOfficequery,
    deleteOfficequery
    

};