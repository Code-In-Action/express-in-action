// 1.引入依赖
var express = require('express');

var http = require('http');
var path = require('path');

var app = express();
// 2.设置相关配置
// 服务器应该请求的端口号
app.set('port', process.env.PORT || 3000);
// 试图模板的绝对路径
app.set('views', path.join(__dirname, 'views'));
// 模板文件的扩展
app.set('view engine', 'jade');


app.all('*', function(req, res) {
  res.render('index', {msg: 'Hello Express!'})
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
