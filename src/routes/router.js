const express = require('express');
const router = express.Router();

const userAct = require('../controllers/crud')

router.post('/users/', userAct.createUser);

router.get('/users/:id', userAct.readUser);

router.get('/users/', userAct.readAllUsers);

router.patch('/users/:id', userAct.updateUser);

router.delete('/users/:id', userAct.deleteUser);

module.exports = router;
