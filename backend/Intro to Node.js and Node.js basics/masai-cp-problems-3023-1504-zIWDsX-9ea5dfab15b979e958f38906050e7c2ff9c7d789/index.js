// index.js

//  import the crypto module
const crypto = require('crypto')

//  get a commands using process.argv
const [first,second , operation, ...args] = process.argv;
// complete the  function
switch (operation) {
  case 'add':
    if(args.length !== 2){
      console.log("Invalid number of arguments");
    }else{
      console.log(parseFloat(args[0]) + parseFloat(args[1]));
    }
    break;
  case 'sub':
    if(args.length !== 2){
      console.log("Invalid number of arguments");
    }else{
      console.log(parseFloat(args[0]) - parseFloat(args[1]));
    }
    break;
  case 'mult':
    if(args.length !== 2){
      console.log("Invalid number of arguments");
    }else{
      console.log(parseFloat(args[0] * parseFloat(args[1])));
    }
    break;
  case 'divide':
    if(args.length !== 2){
      console.log("Invalid number of arguments");
    }else{
      console.log(parseFloat(args[0] / parseFloat(args[1])));
    }
    break;
  case 'sin':
    if(args.length !== 1){
      console.log("Invalid number of arguments");
    }else{
      console.log(Math.sin(parseFloat(args[0])));
    }
    break;
  case 'cos':
    if(args.length !== 1){
      console.log("Invalid number of arguments");
    }else{
      console.log(Math.cos(parseFloat(args[0])));
    }
    break;
  case 'tan':
    if(args.length !== 1){
      console.log("Invalid number of arguments");
    }else{
      console.log(Math.tan(parseFloat(args[0])));
    }
    break;
  case 'random':
    if(args.length !== 1 || args[0] === undefined){
      console.log("Provide length for random number generation.");
    }else{
      console.log(crypto.randomBytes(parseInt(args[0])/2).toString("hex"));
    }
    break;
  default:
    console.log("Invalid operation");
}
