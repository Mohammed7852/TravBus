const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addBookingOrder);
router.get("/",controller.getBookingOrders);
router.get("/:name",controller.getBookingOrderByClientName);
router.delete("/:id",controller.deleteBookinOrder);


module.exports = router;
