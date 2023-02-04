const client = require('../../connection.js');
client.connect();
const queries=require('./queries');

//----------------------------------------------add a office_owner
const addOfficeoOwner = (req,res)=>{
  const {office_owner_name,phoneno,idcardno,licenseno,office_name} = req.body;
  client.query(queries.checkLicensenoExistsquery,[licenseno],(error,result)=>{
     if(result.rows.length !=0)
     res.send("رقم الرخصة غير صالح");
else{
  client.query(queries.checkOfficeNameExistsquery,[office_name],(error,result)=>{
     if(result.rows.length !=0)
      res.send("اسم المكتب  مستخدم من قبل حساب اخر تأكد من كتابتة بشكل صحيح");
        //add to db
else{
  client.query(queries.addOfficeoOwnerquery,[office_owner_name,phoneno,idcardno,licenseno,office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تمت العملية بنجاح');
  
});}});}});};
//----------------------------------------------select all offices_owners
const getOfficesOwners= (req, res)=>{
  client.query(queries.getOfficesOwnersquery, (error, result)=>{
      if(error) throw error;
      res.status(200).json(result.rows);

  })
};
//-----------------------------------------------select Office_owner by office name
const getOfficeOwnerByOfficeName=(req,res)=>{
  const office_name=req.params.office_name;
  client.query(queries.getOfficeOwnerByOfficeNamequery,[office_name],(error,result)=>{
    if(error) throw error;
    if(result.rows.length==0)
    {
      res.send('غير موجود');

      
    }
    else{
      res.status(200).json(result.rows);

   }
  })
  };
//-----------------------------------------------update office_owner
const updateOfficeOwner=(req,res)=>{
  const office_name=req.params.office_name;
  const {phoneno}=req.body;
    client.query(queries.updateOfficeOwnerquery,[phoneno,office_name],(error,result)=>{
      if(error) throw error;
      res.status(200).send("تم التعديل بنجاح");
    });
  
  };
  
//-----------------------------------------------delete Office_owner
const deleteOfficeOwner=(req,res)=>{
const office_name=req.params.office_name;
client.query(queries.deleteOfficeOwnerquery,[office_name],(error,result)=>{
if(error) throw error;
res.status(200).send("تم الحذف بنجاح");
});

};
//------------------------------------------------------
  module.exports = {
   
    addOfficeoOwner,
    getOfficesOwners,
    getOfficeOwnerByOfficeName,
    updateOfficeOwner, 
    deleteOfficeOwner
  }
  