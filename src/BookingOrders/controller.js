const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//----------------------------------------------add a Booking order
const addBookingOrder = (req,res)=>{
const {trip_id,client_name,client_phoneno,client_identity_image,trip_date,payment_type }=req.body; 
client.query(queries.addBookingorderquery,[trip_id,client_name,client_phoneno,client_identity_image,trip_date,payment_type],(error,result)=>{
  if(error) throw error;
  res.status(201).send('تمت العملية بنجاح');
  
});
};
//----------------------------------------------select all booking orders
const getBookingOrders= (req, res)=>{
  client.query(queries.getBookingordersquery, (error, result)=>{
      if(error) throw error;
      res.status(200).json(result.rows);

  })
  
};
//-----------------------------------------------select booking order by client name
const getBookingOrderByOrdernumber=(req,res)=>{
  const orderno=req.params.id;
  client.query(queries.getBookingorderByOrderno,[orderno],(error,result)=>{
    if(error) throw error;
    if(result.rows.length==0){
      res.send("غير موجود");
  
    }else{
    res.status(200).json(result.rows);
    }
  })
  
  };
//------------------------------------------------delete a booking order
const deleteBookinOrder=(req,res)=>{
const id=parseInt(req.params.id);
client.query(queries.deleteBookingorderquery,[id],(error,result)=>{
if(error) throw error;
res.status(200).send("تم الحذف بنجاح");
});
};
//-------------------------------------------------------
  module.exports = {

    addBookingOrder,
    getBookingOrders,
    getBookingOrderByOrdernumber,
    deleteBookinOrder
      
  }
  