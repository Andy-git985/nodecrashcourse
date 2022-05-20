const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// http://mywebsite.com/hello.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host);
// mywebsite.com
// mywebsite.com:8000 port included on host

// Host name (does not get port)
console.log(myUrl.hostname);
// mywebsite.com

// Path name
console.log(myUrl.pathname);
// /hello.html

// Serialized query
console.log(myUrl.search);
// ?id=100%status=active

// Params object
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// id: 100
// status: active
// abc: 123
