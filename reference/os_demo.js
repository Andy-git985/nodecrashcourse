const os = require('os');

// Platform
console.log(os.platform());
// win32

// CPU Arch
console.log(os.arch());
// x64

// CPU Core Info
console.log(os.cpus());
// returns object with all your cpu cores

// Free memory
console.log(os.freemem());
// 9699328000

// Total memory
console.log(os.totalmem());
// 17024741376

// Home directory
console.log(os.homedir());
// C:\Users\lenny

// Uptime
console.log(os.uptime());
// 82583
