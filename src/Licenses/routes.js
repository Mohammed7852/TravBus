const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addLicense);
router.get("/",controller.getLicenses);
router.get("/:licenseno",controller.getLicenseByLicenseno)
router.delete("/:id",controller.deleteLicense);
router.put("/:id",controller.updateLicense);
//------------------------------------------------------------

module.exports = router;
