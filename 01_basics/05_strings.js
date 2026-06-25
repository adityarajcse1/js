const name = "Aditya"
const repoCount = 50 

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
//string intercollasion

const gameName = new String('Adityahc')

console.log(gameName[0]);  // at 0th index
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))  // t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0,4)  //no negative
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const namee = "  Aditya   "
console.log(namee.trim());  //remove space

const rename = "Aditfa"
console.log(rename.replace('f','y'))