const express = require('express');
const app = express();
var port=process.env.Port || 8080
//MiddleWare
// parse json
app.use(express.json());

// test api in order to check it works  
app.get("/testApp", (req, res) => {
  res.send("All Works Fine!");
});

//--------------------------------------------------------------routes
const AdminsRoutes = require('./src/Admins/routes');
// const BlockedOfficesAccountsRoutes = require('./src/BlockedOfficesAccounts/routes');
const BookingOrdersRoutes = require('./src/BookingOrders/routes');
const BookingsRoutes = require('./src/Bookings/routes');
const LicensessRoutes = require('./src/Licenses/routes');
const OfficesDataRoutes = require('./src/OfficesData/routes');
const OfficesOwnersRoutes = require('./src/OfficesOwners/routes');
const OfficesPasswordsRoutes = require('./src/OfficesPasswords/routes');
const TripsRoutes = require('./src/Trips/routes');
const UsersRoutes = require('./src/Users/routes');
//---------------------------------------------------------------links
app.use('/admins',AdminsRoutes);
// app.use('/blockedofficeaccounts',BlockedOfficesAccountsRoutes);
app.use('/bookingorders',BookingOrdersRoutes);
app.use('/bookings',BookingsRoutes);
app.use('/licenses',LicensessRoutes);
app.use('/officesdata',OfficesDataRoutes);
app.use('/officesowners',OfficesOwnersRoutes);
app.use('/officespasswords',OfficesPasswordsRoutes);
app.use('/trips',TripsRoutes);
app.use('/users',UsersRoutes);
//-------------------------------------------------------------listening to connection
app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`)
})
