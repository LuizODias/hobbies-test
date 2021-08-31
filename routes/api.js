const express = require ('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/test', apiController.test);

router.post('/create-user', apiController.createUser);
router.get('/read-users', apiController.readUsers);
router.put('/update-user/:id', apiController.updateUser);
router.delete('/delete-user/:id', apiController.deleteUser);

router.post('/create-hobbie', apiController.createHobbie);
router.get('/read-hobbies', apiController.readHobbies);
router.put('/update-hobbie/:id', apiController.updateHobbie);
router.delete('/delete-hobbie/:id', apiController.deleteHobbie);

module.exports = router;
