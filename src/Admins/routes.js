const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.get("/",controller.getExpiredLicenses)
router.post("/",controller.addAdmin);
router.get("/:password",controller.authenticateAdmin);
router.put("/",controller.updateAdmin);
router.delete("/:pass",controller.deleteAdmin);
//------------------------------------------------------------

module.exports = router;
