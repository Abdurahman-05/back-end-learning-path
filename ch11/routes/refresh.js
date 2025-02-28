const express = require('express');
const { handleLogout } = require('../controllers/logoutController');
const router = express.Router();
const {handleRefresh} = require('../controllers/refreshController')


router.get("/",handleRefresh);

module.exports = router;