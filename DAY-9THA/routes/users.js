var express = require('express');
const path = require('path');
var router = express.Router();

/* GET users listing. */


router.get('/file/:filename', function (req, res) {
  const filename = req.params.filename
  const fullpath = path.join(__dirname, "../public/images")
  // res.send(absolutepath);
  // console.log(filename);
  res.sendFile(path.join(fullpath, filename));
  // res.send('respond with a resource');
});

router.get('/file', function (req, res) {
  res.send('respond with a resource');

});

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});




module.exports = router;
