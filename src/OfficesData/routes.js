const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addOffice);
router.get("/",controller.getOffices);
router.get("/:office_name",controller.getOfficeByOfficeName);
router.put("/:office_name",controller.updateOffice);
router.delete("/:office_name",controller.deleteOffice);
//------------------------------------------------------------

module.exports = router;
