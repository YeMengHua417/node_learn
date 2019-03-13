//tcp-ping
const tcpp = require('tcp-ping');
tcpp.probe('127.0.0.1', 8080, function(err, available) {
  console.log("err",err)
  console.log("available",available);
});


// 如果可以ping通的情况下 err undefined  available true 我这时候起了前端