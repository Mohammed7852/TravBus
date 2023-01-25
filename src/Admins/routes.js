const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.get("/",controller.getExpiredLicenses)
router.post("/",controller.addAdmin);
router.get("/:password",controller.authenticateAdmin);
router.put("/",controller.updateAdmin);
//------------------------------------------------------------

module.exports = router;
