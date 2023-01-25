
const client = require('../../connection.js');
client.connect();
const queries=require('./queries');
//----------------------------------------------------------------add a Trip
const addTrip = (req,res)=>{
  const status='متاحة';
const{trip_day,departure_city,arrival_city,attendance_time,departure_time,waiting_time,departure_station,
arrival_station,bus_type,ticket_price,office_name} = req.body;
client.query(queries.addTripquery,[trip_day,departure_city,arrival_city,attendance_time,departure_time,
waiting_time,departure_station,arrival_station,bus_type,ticket_price,status,office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send('تممت العملية بنجاح');
  
});
    }

//------------------------------------------------------------------getters
const getters=(req,res)=>{
  var str=req.url;
  var urltype=str.split('=');
//----------------------------------------------------------------select all Trips
    if(urltype[0]=='/')
    {    
      client.query(queries.getTripsquery, (error, result)=>{
      if(error) throw error;
      res.status(200).json(result.rows);

 })
     
}
//---------------------------------------------------------------select Trip  by Id
  else if(urltype[0]=='/id')
  {  
  const id=urltype[1];
client.query(queries.getTripByIdquery,[id],(error,result)=>{
  if(error) throw error;
  res.status(200).json(result.rows);
});
  
  }
  else if(urltype[0]=='/office_name')
  {
      const office_name=decodeURI(urltype[1]);// to get the arabic word from the url as its no %DSG%f

      client.query(queries.getTripByOfficeNamequery,[office_name],(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
      });
        

  }
  else{
    res.send("Error!");
    
}
  
  };
//-----------------------------------------------------------------putters
const putters=(req,res)=>{
  var str=req.url;
  var urltype=str.split('=');
    if(urltype[0]=='/id')
    {
//--------------------------------------------------------------update Trip
  const id=urltype[1];
  const {ticket_price}=req.body;
  client.query(queries.updateTripquery,[ticket_price,id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("تم التعديل بنجاح");
      });
       }
//---------------------------------------------------------change trip status
  else if(urltype[0]=='/status')
  { const id=urltype[1];
    const status1='متاحة';
    const status2='غير متاحة';
client.query(queries.gettriptochangStatusquery,[id],(error,result)=>{
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
  }
  };
//----------------------------------------------------------------delete Trip
const deleteTrip=(req,res)=>{
const office_name=req.params.office_name;
client.query(queries.deleteTripquery,[office_name],(error,result)=>{
  if(error) throw error;
  res.status(200).send("تم الحذف بنجاح");
});
};
//-------------------------------------------------------
  module.exports = {
    
    addTrip,
    getters,
    putters,
    deleteTrip
  };
  