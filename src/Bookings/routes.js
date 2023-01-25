const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addBooking);
router.get("/",controller.getBookings);
router.get("/:id",controller.getBookingByOrderId);
router.put("/:id",controller.changeBookingStatus);
router.delete("/:id",controller.deleteBooking);


module.exports = router;
