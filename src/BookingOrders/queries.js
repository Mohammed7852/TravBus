const addBookingorderquery=`INSERT INTO booking_orders 
(trip_id,client_name,client_phoneno,client_identity_image,trip_date,booking_date,payment_type) 
VALUES ($1,$2,$3,$4,$5,CURRENT_DATE,$6)`;
const getBookingordersquery=`SELECT order_id,trip_id,client_name,client_phoneno,client_identity_image,
TO_CHAR(trip_date::Date,'dd/mm/yyyy') AS trip_date ,
TO_CHAR(trip_date::Date,'dd/mm/yyyy') AS booking_date,payment_type FROM booking_orders `;
const getBookingorderByOrderno=`SELECT order_id,trip_id,client_name,client_phoneno,client_identity_image,
TO_CHAR(trip_date::Date,'dd/mm/yyyy') AS trip_date ,
TO_CHAR(trip_date::Date,'dd/mm/yyyy') AS booking_date,payment_type FROM booking_orders WHERE order_id = $1`;
const deleteBookingorderquery=`DELETE FROM booking_orders WHERE order_id= $1`;

module.exports={

    addBookingorderquery,
    getBookingordersquery,
    getBookingorderByOrderno,
    deleteBookingorderquery

};