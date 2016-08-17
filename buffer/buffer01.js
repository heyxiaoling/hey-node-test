new Buffer('hello world');
new Buffer('hello world', 'base64');

var buf = new Buffer(8);
buf.length // 8

var buf2 = new Buffer(7);
buf2.write('1234567');
console.log(buf2);

var buf3 = new Buffer([1,2.33,3]);
console.log(buf3[1]);  //2  取整
