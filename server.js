const express = require('express');
const app = express();
const port=8080;
//MiddleWare
// parse json
app.use(express.json())
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT');
  res.header('Access-Control-Allow-Credentials', '*');
  next();
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
