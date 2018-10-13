var express = require('express');
var router = express.Router();
var model = require('./fake_model');
var bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get('/users' , (request , response) => {
  response.send(model.get_data());

});

router.get('/users/:id' , (request , response) => {
  response.send(model.get_data(request.params.id));
});
router.post('/users'  , (request , response) => {
  response.send(model.post_data(request.body));
});
router.delete('/users/:id' , (request , response) => {
    response.send(model.delete_data(request.params.id));
});
router.put('/users/:id' , (request , response) => {
    response.send(model.put_data(request.params.id , request.body));
})

module.exports  = router;
