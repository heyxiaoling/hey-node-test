let http = require('http'),
	url = 'http://sports.sina.com.cn/global/';

http.get(url,function(res){
	let html = '';
	res.on('data',function(data){
		html += data;
	})

	res.on('end',function(){
		console.log(html);
	})
}).on('error',function(){
	console.log('获取错误');
});