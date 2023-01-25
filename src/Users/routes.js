const {Router} = require('express');
const router = Router();
const controller=require('./controller');

router.post("/",controller.addUser);
router.get("/:password",controller.getUserByPassword);
router.put("/:id",controller.updateUser);
router.delete("/:id",controller.deleteUser);


module.exports = router;

            
        