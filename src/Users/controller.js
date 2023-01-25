
const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//----------------------------------------------add a user
const addUser = (req,res)=>{
  const {name, phoneno, identityno, identity_image, birthdate, password} = req.body;
  // check if user name exists
  client.query(queries.checkuserNameexistsquery,[name],(error,result)=>{
    if(result.rows.length!=0){
          res.send("الاسم موجود من قبل");
              }
      else{
           client.query(queries.checkuserIdentitynoexistsquery,[identityno],(error,result)=>{
               if(result.rows.length!=0){
                res.send(" رقم الهوية غير صالحة");

  }
  else{
    client.query(queries.checkuserPasswordexistsquery,[password],(error,result)=>{
        if(result.rows.length!=0){
          res.send("كلمة المرور غير صالحة");

}

  else{
  //add user to db
  client.query(queries.addUserquery,[name, phoneno, identityno, identity_image, birthdate, password],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تمت العملية بنجاح');
  });}});}});}});};
//---------------------------------------------select user by password
const getUserByPassword=(req,res)=>{
  const password=req.params.password;
  client.query(queries.checkuserPasswordexistsquery,[password],(error,result)=>{
    if(error) throw error;
    if(result.rows.length==0){
      res.send("كلمة المرور غير صحيحة");
  
    }else{
      res.status(200).json(result.rows);
  
    }  })
   };
//---------------------------------------------update user
const updateUser=(req,res)=>{
  const id=parseInt(req.params.id);
  const {name,phoneno,identityno,identity_image,birthdate,password}=req.body;
  // check if name exists before 
client.query(queries.checkuserNameexistsquery,[name],(error,result)=>{
  if(result.rows.length!=0){
        res.send(" الاسم موجود من قبل");
            }
  // check if identityno exists before 
  else{ client.query(queries.checkuserIdentitynoexistsquery,[identityno],(error,result)=>{
                  if(result.rows.length!=0){
                   res.send(" رقم الهوية غير صالحة");
        }
  // check if password exists before 
  else{client.query(queries.checkuserPasswordexistsquery,[password],(error,result)=>{
             if(result.rows.length!=0){
              res.send(" كلمة المرور  غير صالحة");
}
//update user 
 else{
  client.query(queries.updateUserquery,[name,phoneno,identityno,identity_image,birthdate,password,id],(error,result)=>{
  if(error) throw error;
  res.status(200).send("تم التعديل بنجاح");
  });}});}});}});};
//----------------------------------------------delete user
const deleteUser=(req,res)=>{
const id=parseInt(req.params.id);
client.query(queries.deleteUserquery,[id],(error,result)=>{
if(error) throw error;
res.status(200).send("تم الحذف بنجاح");
});
};
//-------------------------------------------------------
  module.exports = {
   
    getUserByPassword,
    addUser,
    deleteUser,
    updateUser  
  }
  