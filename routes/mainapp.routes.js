var router = require('express').Router();
const mainApp = require('../controllers/mainApp.controller');
// Single event Routes
router.route('/')
      .get(mainApp.responseCreator);
      
module.exports = router;



