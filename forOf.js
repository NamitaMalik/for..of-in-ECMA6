//Array
let fruits = ["Banana", "Orange", "Kiwi", "Apple"];
for (let fruit of fruits) {
  console.log(fruit);
}
//String
let city = "Berlin";
for (let char of city) {
  console.log(char)
}
//Map
let map = new Map();
map.set(0, 'Zero');
map.set(1, 'One');
for (let element of map) {
  console.log(element);
}

for (let [key, value] of map) {
  console.log(value);
}
//function arguments
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3, 4)
