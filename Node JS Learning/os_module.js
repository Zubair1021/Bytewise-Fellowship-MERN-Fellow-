///------------------os functions-------------------///


const os = require('os');

//Host name of the operating system
console.log("Hostname is "+os.hostname());

//Free memory
console.log("Free memory is "+os.freemem());

//Home directory
console.log("Home directory is "+os.homedir());

//operating systm platform
console.log("OS platform is "+os.platform());

//operating system version
console.log("OS version is "+os.version());

//operating system release
console.log("OS release is "+os.release());

//operating system total memory
console.log("OS total memory is "+os.totalmem());

//up time of operating system 
console.log("OS up time is "+os.uptime());

//operating system type
console.log("OS type is "+os.type());

//Operating system temporary directory
console.log("OS temporary directory is "+os.tmpdir());

