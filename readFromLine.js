
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`Please enter your name:`, name => {
//     console.log(`hello ${name}`);
//     readline.close();
//   });
const readline=require("readline").createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question(`what is your name:`,(name) =>{
  console.log(`hello ${name}`);
  readline.close();
})