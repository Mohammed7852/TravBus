const addBlockOfficeAccountquery=`INSERT INTO blocked_offices_accounts (office_name,blocking_date) 
VALUES ($1,CURRENT_DATE)`;
const getBlockedOfficesAccountsquery=`SELECT account_id,office_name,TO_CHAR(blocking_date::Date,'dd/mm//yyyy') 
AS blocking_date  FROM blocked_offices_accounts`;
const getBlockedOfficeAccountqueryByofficenamequey=`SELECT * FROM blocked_offices_accounts WHERE
 office_name = $1`;
const deleteBlockedOfficeAccountquery=`DELETE FROM Blocked_Offices_Accounts WHERE office_name = $1`;


module.exports={

   addBlockOfficeAccountquery,
   getBlockedOfficesAccountsquery,
   getBlockedOfficeAccountqueryByofficenamequey,
   deleteBlockedOfficeAccountquery

};