/*setTimeout(() => {
    console.log("pop up");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("pop down");
}, 1000);

console.log(__dirname);
console.log(__filename);*/
const os = require('os');
console.log(os.platform(), os.homedir());