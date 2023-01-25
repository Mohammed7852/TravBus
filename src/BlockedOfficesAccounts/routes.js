const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.BlockOfficeAccount);
router.get("/",controller.getBlockedOfficesAccounts);
router.get("/:office_name",controller.getBlockedOfficesAccountsByofficename);
router.delete("/:office_name",controller.unBlockedOfficeAccount);
//------------------------------------------------------------

module.exports = router;
