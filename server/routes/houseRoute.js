const { Router } = require('express');
const houseController = require('../controller/houseController');
const router = Router();

router.get('/house', houseController.get_house);
// router.post('/house',houseController.post_house);
router.put('/house/:id',houseController.update_house);
router.delete('/house/:id',houseController.delete_house);


module.exports = router;