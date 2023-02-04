const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//----------------------------------------------add  admin
const addAdmin = (req,res)=>{
  const {username,password} = req.body;      
client.query(queries.addAdminquery,[username,password],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تمت العملية بنجاح');
  });
 };
//----------------------------------------------authenticate admin
const authenticateAdmin= (req, res)=>{
const password=req.params.password;
client.query(queries.authenticateAdminquery,[password],(error,result)=>{
  if(error) throw error;
  if(result.rows.length!=0)
  {  res.status(200).json(result.rows);

  }else{

    res.send("كلمة المرور غير صحيحة ...حاول مرة اخرى")
  }
})

  
};
//---------------------------------------------update admin
const updateAdmin=(req,res)=>{
const {oldpassword,newpassword,username}=req.body;
// check validation of old password
client.query(queries.checkoldPasswordExistsquery,[oldpassword,username],(error,result)=>{
  if(result.rows.length==0){
    res.send("كلمةالمرور القديمة غير صحيحة");
}else
{// check if new password exists

  client.query(queries.checknewPasswordExistsquery,[newpassword],(error,result)=>{
    if(result.rows.length!=0){
      res.send("كلمة المرور الجديدة غير صالحة");
    }
else{
//update password
  client.query(queries.updateAdminequery,[newpassword,username],(error,result)=>{
    if(error) throw error;
    res.status(200).send("تم التعديل بنجاح");
  });
}
});
}
});
};
//------------------------------------------------delete Admin
const deleteAdmin=(req,res)=>{
  const password=req.params.pass;
client.query(queries.deleteAdminquery,[password],(error,result)=>{
if(error) throw error;
res.status(200).send("تم الحذف بنجاح ");
});

};
//---------------------------------------------get expired license
const getExpiredLicenses=(req,res)=>{
  client.query(queries.checkLicenseExpiery,(error,result)=>{
    if(result.rows.length==0){
    res.send("لا توجد حسابات منتهية الصلاحية");
    }else{

      res.status(200).json(result.rows);
      
    }


});    
};
//--------------------------------------------------------
  module.exports = {
    
    addAdmin,
    getExpiredLicenses,
    authenticateAdmin,
    deleteAdmin,
    updateAdmin,
    
};
  