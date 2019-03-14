const cluster = require('cluster')
const http = require('http')
const cpuNums = require('os').cpus().length

if(cluster.isMaster){
    console.log(`main progress${process.pid}is running`)
    for(var i=0;i<cpuNums;i++){
        cluster.fork();
    }
    cluster.on('exit',(work,code,signal)=>{
        console.log(`work progress ${work.process.id}quit`)
    })
}else{
    http.createServer((req,res)=>{
        console.log(`progress ${cluster.worker.process.pid} req handle`);
        // res.writeHead(200);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); //为了解决中文不识别问题
        res.end('hi，叶子')

    }).listen(8000)
    console.log(`work progress ${process.pid} start`);
}

//https://www.jb51.net/article/81063.htm 这篇讲的挺好的

// 打印出来是这样的
// D:\node\mystudy\nodeModuleLearn>chcp 65001 && node cluster.js
// Active code page: 65001
// main progress206696is running
// work progress 209552 start
// work progress 210028 start
// work progress 198796 start
// work progress 174304 start
// work progress 145976 start
// work progress 3796 start
// work progress 210708 start
// work progress 210380 start
// progress 210380 req handle
// progress 210380 req handle
// progress 210380 req handle
// progress 210380 req handle
// progress 210380 req handle