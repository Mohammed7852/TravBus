const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addTrip);
router.get("/",controller.getters);
router.get("/:id",controller.getters);
router.get("/:office_name",controller.getters);
router.put("/:id",controller.putters);
router.put("/:status",controller.putters);
router.delete("/:office_name",controller.deleteTrip);
//------------------------------------------------------------

module.exports = router;
