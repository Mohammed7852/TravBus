const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//----------------------------------------------add a office
const addOffice = (req,res)=>{
  const {office_name,phoneno,bank_account,bank_name,location,logo_image,booking_policy}= req.body;
  // check if office_name exists
  client.query(queries.getOfficeByofficeNamequery,[office_name],(error,result)=>{
    if(result.rows.length!=0){
      res.send("المكتب يملك حساب سابق");
      
    }
    else{
    //add office to db
client.query(queries.addOfficequery,[office_name,phoneno,bank_account,bank_name,location,logo_image,booking_policy],(error,result)=>{
  if(error) throw error;
  res.status(201).send('تممت العملية بنجاح');
  
});
    }
  });
  
};
//----------------------------------------------select all offices data
const getOffices= (req, res)=>{
    client.query(queries.getOfficesquery, (error, result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);

    })
    
};
//-----------------------------------------------select Office by office_name
const getOfficeByOfficeName=(req,res)=>{
const office_name=req.params.office_name;
client.query(queries.getOfficeByofficeNamequery,[office_name],(error,result)=>{
    if(error) throw error;
    if(result.rows.length==0)
    { res.send("غير موجود");
  }else
  {
    res.status(200).json(result.rows);

  }
  })

};
//-----------------------------------------------update office
const updateOffice=(req,res)=>{
  const office_name=req.params.office_name;
  const {phoneno,bank_account,bank_name,location,logo_image,booking_policy}=req.body;
  
    client.query(queries.updateOfficequery,[phoneno,bank_account,bank_name,location,logo_image,booking_policy,office_name],(error,result)=>{
      if(error) throw error;
      res.status(200).send("تم التعديل بنجاح");
    });
};
//-----------------------------------------------delete Office
const deleteOffice=(req,res)=>{
const office_name=req.params.office_name;
client.query(queries.deleteOfficequery,[office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send("تم الحذف بنجاح");
});
};
//-------------------------------------------------------
  module.exports = {
    getOffices,
    getOfficeByOfficeName,
    addOffice,
    deleteOffice,
    updateOffice ,
   
  }
  