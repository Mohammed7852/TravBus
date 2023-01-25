const addBookingquery=`INSERT INTO bookings (order_id,status) VALUES ($1,$2)`;
const getBookingsquery=`SELECT * FROM bookings`;
const getBookingByOrderIdquery=`SELECT * FROM bookings WHERE order_id = $1`;
const changeTripstatusquery=`UPDATE bookings SET status = $1 WHERE order_id= $2`;
const deleteBookingquery=`DELETE FROM bookings WHERE booking_id= $1`;


module.exports={
    
    addBookingquery,
    getBookingsquery,
    getBookingByOrderIdquery,
    changeTripstatusquery,
    deleteBookingquery

   
};