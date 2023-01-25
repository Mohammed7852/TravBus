const addTripquery=`INSERT INTO trips (trip_day,departure_city,arrival_city,attendance_time,departure_time,
waiting_time,departure_station,arrival_station,bus_type,ticket_price,status,office_name) 
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`;
const getTripsquery=`SELECT t.trip_id,t.trip_day,t.departure_city,t.arrival_city,t.attendance_time,
t.departure_time,t.waiting_time,t.bus_type,t.ticket_price,t.status,
t.office_name,od.logo_image
FROM trips t , offices_data od WHERE t.office_name=od.office_name`;
const getTripByIdquery=`SELECT t.trip_day,t.departure_city,t.arrival_city,t.attendance_time,
t.departure_time,t.waiting_time,t.departure_station,t.arrival_station,t.ticket_price,
t.office_name,od.booking_policy,od.bank_name,od.bank_account,od.location
FROM trips t,offices_data od WHERE t.trip_id = $1 AND od.office_name=t.office_name`;
const gettriptochangStatusquery=`SELECT  * FROM trips WHERE trip_id= $1`;
const getTripByOfficeNamequery=`SELECT  * FROM trips WHERE office_name= $1`;
const changeTripstatusquery=`UPDATE trips SET status = $1 WHERE trip_id= $2`;
const updateTripquery=`UPDATE trips SET ticket_price = $1 WHERE trip_id= $2`;
const deleteTripquery=`DELETE FROM trips WHERE office_name= $1`;


module.exports={
    addTripquery,
    getTripsquery,
    getTripByIdquery,
    getTripByOfficeNamequery,
    gettriptochangStatusquery,
    changeTripstatusquery,
    updateTripquery,
    deleteTripquery
    
};