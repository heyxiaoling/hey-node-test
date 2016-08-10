let query = require('querystring');

//序列化
let q = query.stringify({foo: 'bar', baz: 'qux'}, ';', ':');
console.log(q); //foo:bar;baz:qux


// 反序列化
let q2 = query.parse('foo=bar&baz=qux&baz=quux&corge');
console.log(q2);  //{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }