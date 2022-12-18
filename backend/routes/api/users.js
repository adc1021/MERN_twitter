const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { // .get creates a route handler for get requests
  // res.send('respond with a user or Ill scream');
  res.json({message: "GET /api/users"
  });
});




module.exports = router;
