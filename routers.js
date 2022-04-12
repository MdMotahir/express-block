var express = require('express');
const {userController, tokenController, gameController} = require("./controller");


var router = express.Router();


router.get('/get-token', tokenController.findAll);
router.post('/create-token', tokenController.create);
router.get('/get-user', userController.findAll);
router.post('/create-user', userController.create);
router.get('/get-data', gameController.getData);


router.get('/:id', function(req, res){
   res.send('GET route on things. ' +req.params.id);
});
router.post('/test', function(req, res){
    console.log(req.body)
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;