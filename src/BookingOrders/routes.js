const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addBookingOrder);
router.get("/",controller.getBookingOrders);
router.get("/:id",controller.getBookingOrderByOrdernumber);
router.delete("/:id",controller.deleteBookinOrder);


module.exports = router;
