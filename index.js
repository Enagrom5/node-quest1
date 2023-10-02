const cowsay = require('cowsay');
const userInfo = require('./information');

console.log(cowsay.say({ text: `Hi! I m  ${userInfo.firstName}  my campus is ${userInfo.campus}` }));
