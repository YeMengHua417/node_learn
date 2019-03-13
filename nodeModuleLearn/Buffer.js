
var imgPath = path.join(__dirname,'./depend/Capture.PNG');
fs.readFile(imgPath,function(err,stat){
  if(err){
    console.log(err)
    return;
  }

  console.log(stat)
  // var buf = new Buffer(stat,'base64');
  var buf = Buffer.alloc(100,stat,'base64')
  console.log(buf);
})