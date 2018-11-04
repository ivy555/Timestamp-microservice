
var express = require('express');
var router = express.Router();

router.get('/api/timestamp/:date?', function(req,res) {
    
    var date = null;
  
    if(req.params.date !== undefined) { // if params.date is not undefined
      
      var unixTimestamp = parseInt(req.params.date);
      
      if(isNaN(unixTimestamp)) {
        
        date = new Date(req.params.date); // if Timestamp is Not a Number
        
      } else {
        
        date = new Date(unixTimestamp); // else get new date from unixTimestamp
        
      }
      
    } else {
      
      date = new Date(Date.now());
      
    }
  
    var response = date == "Invalid Date" ? 
        { error: "Invalid Date" } : 
        { 
          "unix": date.getTime(), 
          "utc": date.toUTCString()
        };
  
    res.json(response);
  
  });

module.exports = router;