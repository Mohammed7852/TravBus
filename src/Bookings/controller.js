
const client = require('../../connection.js');
client.connect();
const queries=require('./queries');

//----------------------------------------------add a booking
const addBooking = (req,res)=>{
  const {order_id} = req.body;
  const status='غير مدفوع';
  
  client.query(queries.addBookingquery,[order_id,status],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تمت العملية بنجاح');
  });
  };
//---------------------------------------------select all bookings
const getBookings= (req, res)=>{
  client.query(queries.getBookingsquery,(error, result)=>{
      if(error) throw error;
      res.status(200).json(result.rows);

  })
  
};
//----------------------------------------------select Bookings  order id
const getBookingByOrderId=(req,res)=>{
const id=parseInt(req.params.id);
client.query(queries.getBookingByOrderIdquery,[id],(error,result)=>{
  if(error) throw error;
  if(result.rows.length==0){
    res.send("غير موجود")
  }else
  res.status(200).json(result.rows);
})
};
//-------------------------------------------------change booking status
const changeBookingStatus=(req,res)=>{
  const id=parseInt(req.params.id);
  const status1='مدفوع';
  const status2='غير مدفوع'
  
              client.query(queries.getBookingByOrderIdquery,[id],(error,result)=>{
                var currentstatus=result.rows[0].status;

                  if(currentstatus===status1){
                      client.query(queries.changeTripstatusquery,[status2,id],(error,result)=>{
                          if(error) throw error;
                          res.status(200).send("تم التغيير بنجاح");
                      });
                  }
                  else{

                      client.query(queries.changeTripstatusquery,[status1,id],(error,result)=>{
                          if(error) throw error;
                          res.status(200).send("تم التغيير بنجاح");
                      });
                    }
                });


};

//----------------------------------------------delete booking
const deleteBooking=(req,res)=>{
const id=parseInt(req.params.id);
client.query(queries.deleteBookingquery,[id],(error,result)=>{
if(error) throw error;
res.status(200).send("تم الحذف بنجاح");
});
};
//-------------------------------------------------------
  module.exports = {
   
    addBooking,
    getBookings,
    getBookingByOrderId,
    changeBookingStatus,
    deleteBooking
  }
  