const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//----------------------------------------------add a office password
const addOffiePassword = (req,res)=>{
  const {password,office_name} = req.body;
  // check if password exists
  client.query(queries.checkpasswordExistsquey,[password],(error,result)=>{
    if(result.rows.length!=0){
      res.send("كلمة المرور هذة غير صالحة");
      
    }
    else{
    //add office password to db
  client.query(queries.addOffiePasswordquery,[password,office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تمت العملية بنجاح');
  
  });
    }
  });
  
  };
  
//-----------------------------------------authenticate Office
const authenticateOffice=(req,res)=>{
const password=req.params.password;
client.query(queries.authenticateOffice,[password],(error,result)=>{
  if(error) throw error;
  if(result.rows.length==0)
  {
    res.send("غير موجود")
}else{

  res.status(200).json(result.rows);
}
})
};

//-----------------------------------------update office password
const updateOfficePassword=(req,res)=>{
  const {oldpassword,newpassword,office_name}=req.body;
  // check validation of old password
  client.query(queries.checkoldpasswordExistsquey,[oldpassword,office_name],(error,result)=>{
    if(result.rows.length==0){
      res.send("كلمةالمرور القديمة غير صحيحة");
  }else
  {// check if new password exists
  
    client.query(queries.checknewpasswordExistsquey,[newpassword],(error,result)=>{
      if(result.rows.length!=0){
        res.send("كلمة المرور الجديدة غير صالحة");
      }
  else{
  //update password
    client.query(queries.updateOfficePasswordquery,[newpassword,office_name],(error,result)=>{
      if(error) throw error;
      res.status(200).send("تم التعديل بنجاح");
    });
  }
  });
  }
  });
};

//--------------------------------------delete Office password
const deleteOffcePassword=(req,res)=>{
  const office_name=req.params.office_name;
  client.query(queries.deleteOffcePasswordquery,[office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send("تم الحذف بنجاح");
  })
  };
//-------------------------------------------------------
  module.exports = {
   
    addOffiePassword,
    authenticateOffice,
    deleteOffcePassword,
    updateOfficePassword  
  }
  