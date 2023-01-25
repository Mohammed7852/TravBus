const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addOffiePassword);
router.get("/:password",controller.authenticateOffice);
router.put("/",controller.updateOfficePassword);
router.delete("/:office_name",controller.deleteOffcePassword);


module.exports = router;
