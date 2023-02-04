
const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//------------------------------------------Block office account
const BlockOfficeAccount = (req,res)=>{
  const {office_name} = req.body;
  client.query(queries.addBlockOfficeAccountquery,[office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تمت العملية بنجاح');
  });
    };
//------------------------------------------select all blocked offices accounts
const getBlockedOfficesAccounts= (req, res)=>{
  client.query(queries.getBlockedOfficesAccountsquery, (error, result)=>{
      if(error) throw error;
      res.status(200).json(result.rows);

  })
  
};
//-----------------------------------------select blocked office account by office name
const getBlockedOfficesAccountsByofficename=(req,res)=>{
const office_name=req.params.office_name;
client.query(queries.getBlockedOfficeAccountqueryByofficenamequey,[office_name],(error,result)=>{
  if(error) throw error;
  if(result.rows.length!=0)
  {  res.status(200).json(result.rows);

  }else{
    res.send("لايوجد حساب لهذا اللمكتب ضمن الحسابات المقفلة");

  }
})

};
//------------------------------------------unblock office account
const unBlockedOfficeAccount=(req,res)=>{
const office_name=req.params.office_name;
client.query(queries.deleteBlockedOfficeAccountquery,[office_name],(error,result)=>{
if(error) throw error;
res.status(200).send("تم الغاء القفل ");
});
};
//-------------------------------------------------------
  module.exports = {
      
   BlockOfficeAccount,
   getBlockedOfficesAccounts,
   getBlockedOfficesAccountsByofficename,
   unBlockedOfficeAccount  
  }
  