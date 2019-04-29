/*console.log("hello world zgj")

var http=require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello world\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

var x=30;
var y=210;
var sum=x+y;
console.log(sum);

阻塞代码实例
var fs=require("fs");
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束");

非阻塞代码实例
var fs=require("fs");
fs.readFile('input.txt',function(err,data){
    if(err)
        return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束");

var events=require('events');
var eventEmitter=new events.EventEmitter();

var connectHandler=function connected(){
    console.log("连接成功");
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
    console.log("数据库连接成功");
});

eventEmitter.emit('connection');
console.log("程序执行完毕");
*/

var fs=require("fs");
fs.readFile("input.txt",function(err,data){
    if(err)
    {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log('程序执行完毕');

   
