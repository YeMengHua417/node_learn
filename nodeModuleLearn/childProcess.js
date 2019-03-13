//child_process

const {exec,execFile} = require('child_process');
const result = execFile('node',['--version'],(error,stdout,stderr)=>{
  if(error){
    console.log("hi")
    throw error
  }
  console.log("stout",stdout);
})


const result2 = exec('node --version',(error,stdout,stderr)=>{
  if(error){
    console.log("hi")
    throw error
  }
  console.log("stout",stdout);
})

const {spawn} = require('child_process')
const ls = spawn('cmd',['/c','npm'],{
  stdio: 'inherit'
})

const { fork } = require('child_process')
let child = fork('./depend/test.js')

child.on('data', function(data){
  console.log(data);
});