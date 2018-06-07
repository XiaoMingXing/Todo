var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    if(true){
        console.log("This is false ABC")
    }
    res.send('to be or not to be');
});

module.exports = router;
