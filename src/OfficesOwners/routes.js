const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addOfficeoOwner);
router.get("/",controller.getOfficesOwners);
router.get("/:office_name",controller.getOfficeOwnerByOfficeName);
router.delete("/:office_name",controller.deleteOfficeOwner);
router.put("/:office_name",controller.updateOfficeOwner);


module.exports = router;
