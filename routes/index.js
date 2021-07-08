var router = require('express').Router(),
    MainAppRoute = require('./mainapp.routes');
    
router.use('/app', MainAppRoute);


module.exports = router;
