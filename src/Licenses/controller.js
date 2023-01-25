const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//---------------------------------------------------------add a license
const addLicense = (req,res)=>{
const {licenseno,release_date,expiry_date}=req.body;
  client.query(queries.getLicenseByLicensenoquery,[licenseno],(error,result)=>{
    if(result.rows.length!=0){
    res.send("الرخصة موجودة من قبل");
    }
else{
  client.query(queries.addLicensequery,[licenseno,release_date,expiry_date],(error,result)=>{
    if(error) throw error;
    res.status(200).send('تممت العملية بنجاح');

  });
}});
};
//----------------------------------------------------------select all Licenses
const getLicenses= (req, res)=>{
    client.query(queries.getLicensesquery, (error, result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);

    })
    
};

//--------------------------------------------------------get license by licenseno
const getLicenseByLicenseno=(req,res)=>{
  const licenseno=req.params.licenseno;
  client.query(queries.getLicenseByLicensenoquery,[licenseno],(error,result)=>{
    if(result.rows.length==0){
    res.send("الرخصة غير موجودة");
    }else{

      res.status(200).json(result.rows);
      
    }


});    
};
//--------------------------------------------------------update Trip
const updateLicense=(req,res)=>{
  const id=parseInt(req.params.id);
  const {release_date,expiry_date}=req.body;
    client.query(queries.updateLicensequery,[release_date,expiry_date,id],(error,result)=>{
      if(error) throw error;
      res.status(200).send("تم التعديل بنجاح");
    });
  
};
//---------------------------------------------------------delete license
const deleteLicense=(req,res)=>{
  const id=parseInt(req.params.id);
client.query(queries.deleteLicensequery,[id],(error,result)=>{
  if(error) throw error;
  res.status(200).send("تم الحذف بنجاح");
});
  
};
//-------------------------------------------------------
  module.exports = {
    addLicense,
    getLicenses,
    getLicenseByLicenseno,
    deleteLicense,
    updateLicense ,
    
    
  }
  